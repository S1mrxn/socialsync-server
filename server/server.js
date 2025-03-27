require("dotenv").config();
const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const { ApolloServerPluginLandingPageGraphQLPlayground } = require("apollo-server-core");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const helmet = require("helmet");
const cors = require("cors");

const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");

const app = express();

// ✅ Middleware
app.use(helmet());
app.use(cors({ origin: process.env.CLIENT_URL }));
app.use(express.json()); // 🔥 Required to make Playground and API work

// ✅ Optional root route
app.get("/", (req, res) => {
  res.send("Welcome to the SocialSync GraphQL API. Visit /graphql.");
});

// ✅ Extract user from JWT token
const getUserFromToken = (token) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch {
    return null;
  }
};

// ✅ Apollo Server config
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    const token = req.headers.authorization || "";
    const user = getUserFromToken(token.replace("Bearer ", ""));
    return { user };
  },
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});

// ✅ Start server after connecting to MongoDB
server.start().then(() => {
  server.applyMiddleware({ app });

  mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => {
    const PORT = process.env.PORT || 4000;
    app.listen(PORT, () => {
      console.log(`🚀 Server running at http://localhost:${PORT}${server.graphqlPath}`);
    });
  }).catch((err) => {
    console.error("❌ MongoDB connection error:", err);
  });
});
