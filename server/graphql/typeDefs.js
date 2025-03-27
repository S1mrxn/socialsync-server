const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    email: String!
    profilePicture: String
    posts: [Post]
    followers: [User]
    following: [User]
  }

  type Post {
    id: ID!
    imageUrl: String!
    caption: String
    createdAt: String
    user: User!
    likes: [User]
    comments: [Comment]
  }

  type Comment {
    id: ID!
    user: User!
    text: String!
    createdAt: String
  }

  type AuthPayload {
    token: String!
    user: User!
  }

  type Query {
    getUser(id: ID!): User
    getAllUsers: [User]
    getPosts: [Post]
    getPost(id: ID!): Post
  }

  type Mutation {
    register(username: String!, email: String!, password: String!): AuthPayload
    login(email: String!, password: String!): AuthPayload
    createPost(imageUrl: String!, caption: String): Post
    likePost(postId: ID!): Post
    commentOnPost(postId: ID!, text: String!): Post
  }
`;

module.exports = typeDefs;
