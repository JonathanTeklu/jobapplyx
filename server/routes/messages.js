const express = require('express');
const router = express.Router();
const Message = require('../models/Message');
const verifyToken = require('../middleware/verifyToken');

// POST /api/messages — Send a message
router.post('/', verifyToken, async (req, res) => {
  const { to, content } = req.body;
  const from = req.user.id;

  if (!to || !content) {
    return res.status(400).json({ message: 'Missing fields' });
  }

  try {
    const message = new Message({ from, to, content });
    await message.save();
    res.status(201).json(message);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

// GET /api/messages/:userId — Fetch messages between logged in user and another
router.get('/:userId', verifyToken, async (req, res) => {
  const otherUserId = req.params.userId;
  const currentUserId = req.user.id;

  try {
    const messages = await Message.find({
      $or: [
        { from: currentUserId, to: otherUserId },
        { from: otherUserId, to: currentUserId }
      ]
    }).sort({ timestamp: 1 }); // oldest first
    res.status(200).json(messages);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

module.exports = router;
  