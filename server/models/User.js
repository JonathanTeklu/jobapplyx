const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String }, // Optional for Google users
  googleId: { type: String }, // For Google OAuth
  role: { type: String, enum: ['student', 'snagger'], required: true },
  bio: { type: String },
  major: { type: String },
  location: { type: String },
  reviews: [{ type: Number }],

  // Password reset fields
  resetToken: { type: String },
  resetTokenExpiration: { type: Date },
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
