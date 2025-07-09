const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');

const router = express.Router();

// Use environment variable for frontend URL
const CLIENT_URL = process.env.CLIENT_URL || 'http://localhost:5173';

// Initiate Google OAuth
router.get(
  '/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

// Handle Google OAuth callback
router.get(
  '/google/callback',
  passport.authenticate('google', {
    failureRedirect: `${CLIENT_URL}/login`,
    session: false,
  }),
  (req, res) => {
    if (!req.user) {
      return res.redirect(`${CLIENT_URL}/login?error=unauthorized`);
    }

    const token = jwt.sign(
      { id: req.user._id, role: req.user.role },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );

    res.redirect(`${CLIENT_URL}/main?token=${token}&role=${req.user.role}`);
  }
);

module.exports = router;
