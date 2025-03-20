const User = require("../models/User");
const Post = require("../models/Post");
const { generateToken, hashPassword, comparePasswords } = require("../utils/auth");
const { AuthenticationError } = require("apollo-server-express");

const resolvers = {
  Query: {
    getUser: async (_, { id }) => await User.findById(id).populate("posts"),
    getAllUsers: async () => await User.find(),
    getPosts: async () => await Post.find().populate("user"),
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

    createPost: async (_, { imageUrl, caption }, { user }) => {
      if (!user) throw new AuthenticationError("Not authenticated");
      const post = new Post({ imageUrl, caption, user: user.id });
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
