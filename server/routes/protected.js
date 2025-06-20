const express = require('express');
const verifyToken = require('../middleware/verifyToken');
const router = express.Router();

// Protected route
router.get('/dashboard', verifyToken, (req, res) => {
  res.json({
    message: 'Access granted to protected dashboard!',
    user: req.user
  });
});

module.exports = router;
