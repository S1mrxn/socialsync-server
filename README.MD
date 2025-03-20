Description

This is the backend for an image-based social media application. The backend is built using GraphQL, Node.js, and Express.js, with MongoDB as the database. It allows users to create accounts, post images (via URLs), like and comment on posts, and view a personalized feed.

Features

User Authentication with JWT

GraphQL API for querying and mutating data

MongoDB with Mongoose ODM for database operations

Follow system for personalized feed

Like & Comment functionality

Secure API key handling with environment variables

Deployment on Render

GitHub Actions for CI/CD

Technologies Used

Node.js

Express.js

GraphQL

Apollo Server Express

MongoDB & Mongoose

JWT Authentication

GitHub Actions (CI/CD)

Helmet & CORS Security Enhancements

Render for Deployment

Installation

Prerequisites

Node.js installed on your machine

MongoDB Atlas or a local MongoDB instance

Render account for deployment

Steps

Clone the repository:

Install dependencies:

Create a .env file and configure the following:

Start the server:

API Usage

User Authentication

Register User

Login User

Post Operations

Create a Post

Get All Posts

Like a Post

Comment on a Post

Deployment

This backend is deployed on Render. To deploy your own instance:

Push the repository to GitHub.

Create a Render Web Service.

Set the Environment Variables in Render.

Deploy and test the API.

GitHub Actions (CI/CD)

This project includes a GitHub Actions workflow to automate testing and deployment. The workflow runs on every push to the main branch and deploys the backend to Render.

Security Enhancements

JWT-based authentication for secure access.

Environment variables to protect sensitive data.

Helmet & CORS to enhance security against common web vulnerabilities.

Contributing

Contributions are welcome! If you'd like to contribute, please fork the repository and create a pull request with your changes.

License

This project is licensed under the MIT License.

Contact

For questions or suggestions, feel free to reach out via GitHub Issues.