const express = require('express');
const passport = require('passport');

const router = express.Router();

// Start Google OAuth
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// Callback route
router.get('/google/callback',
  passport.authenticate('google', {
    successRedirect: 'https://snagged.dev/', // frontend URL
    failureRedirect: '/login'
  })
);

module.exports = router;
