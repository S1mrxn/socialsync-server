const User = require("../models/User");
const Post = require("../models/Post");
const { generateToken, hashPassword, comparePasswords } = require("../utils/auth");
const { AuthenticationError } = require("apollo-server-express");
const cloudinary = require("../utils/cloudinary");

const resolvers = {
  Query: {
    getUser: async (_, { id }) => await User.findById(id).populate("posts"),
    getAllUsers: async () => await User.find(),

    // ✅ Updated getPosts to show only followed users' posts and self-posts
    getPosts: async (_, __, { user }) => {
      if (!user) throw new AuthenticationError("Not authenticated");

      const loggedInUser = await User.findById(user.id);
      const following = loggedInUser.following.concat(user.id); // Include self-posts

      return await Post.find({ user: { $in: following } })
        .populate("user")
        .sort({ createdAt: -1 });
    },

    getPost: async (_, { id }) => await Post.findById(id).populate("user"),
  },

  Mutation: {
    register: async (_, { username, email, password }) => {
      const hashedPassword = await hashPassword(password);
      const user = new User({ username, email, password: hashedPassword });
      await user.save();
      return { token: generateToken(user), user };
    },

    login: async (_, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user || !(await comparePasswords(password, user.password))) {
        throw new AuthenticationError("Invalid credentials");
      }
      return { token: generateToken(user), user };
    },

    createPost: async (_, { file, caption }, { user }) => {
      if (!user) throw new AuthenticationError("Not authenticated");

      const { createReadStream } = await file;
      const stream = createReadStream();

      const uploadResult = await new Promise((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
          { folder: "social-media-posts" },
          (error, result) => {
            if (error) reject(error);
            resolve(result);
          }
        );

        stream.pipe(uploadStream);
      });

      const post = new Post({
        imageUrl: uploadResult.secure_url,
        caption,
        user: user.id,
      });

      await post.save();
      return post;
    },

    likePost: async (_, { postId }, { user }) => {
      if (!user) throw new AuthenticationError("Not authenticated");
      const post = await Post.findById(postId);
      if (!post) throw new Error("Post not found");

      if (post.likes.includes(user.id)) {
        post.likes.pull(user.id);
      } else {
        post.likes.push(user.id);
      }

      await post.save();
      return post;
    },

    followUser: async (_, { userId }, { user }) => {
      if (!user) throw new AuthenticationError("Not authenticated");
    
      if (user.id === userId) throw new Error("You cannot follow yourself");
    
      const loggedInUser = await User.findById(user.id);
      const userToFollow = await User.findById(userId);
    
      if (!userToFollow) throw new Error("User to follow not found");
    
      
      if (!loggedInUser.following.includes(userId)) {
        loggedInUser.following.push(userId);
        await loggedInUser.save();
      }
    
      return userToFollow;
    },
    
    commentOnPost: async (_, { postId, text }, { user }) => {
      if (!user) throw new AuthenticationError("Not authenticated");
      const post = await Post.findById(postId);
      if (!post) throw new Error("Post not found");

      post.comments.push({ user: user.id, text });
      await post.save();
      return post;
    },
  },
};

module.exports = resolvers;
