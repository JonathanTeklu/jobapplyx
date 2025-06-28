const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String }, // Optional for Google users
  googleId: { type: String }, // For Google OAuth
  role: { type: String, enum: ['student', 'assistant'], required: true },

  // Add these two fields for password reset
  resetToken: { type: String },
  resetTokenExpire: { type: Date }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
