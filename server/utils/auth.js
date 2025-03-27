const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
require("dotenv").config(); 

const generateToken = (user) => {
  return jwt.sign(
    { id: user._id }, 
    process.env.JWT_SECRET, 
    { expiresIn: "7d" } 
  );
};

const verifyToken = (token) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET); 
  } catch (error) {
    return null; 
  }
};

const hashPassword = async (password) => {
  return await bcrypt.hash(password, 10);
};

const comparePasswords = async (password, hashedPassword) => {
  return await bcrypt.compare(password, hashedPassword);
};

module.exports = { generateToken, verifyToken, hashPassword, comparePasswords };
