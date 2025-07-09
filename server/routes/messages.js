const express = require('express');
const router = express.Router();
const Message = require('../models/Message');
const verifyToken = require('../middleware/verifyToken');

// @route   POST /api/messages
// @desc    Send a message
router.post('/', verifyToken, async (req, res) => {
  const { to, content } = req.body;
  const from = req.user.id;

  if (!to || !content) {
    return res.status(400).json({ message: 'Missing "to" or "content" field' });
  }

  try {
    const message = new Message({ from, to, content });
    await message.save();
    res.status(201).json(message);
  } catch (err) {
    console.error('Message save error:', err);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

// @route   GET /api/messages/:userId
// @desc    Get all messages between logged in user and another user
router.get('/:userId', verifyToken, async (req, res) => {
  const otherUserId = req.params.userId;
  const currentUserId = req.user.id;

  try {
    const messages = await Message.find({
      $or: [
        { from: currentUserId, to: otherUserId },
        { from: otherUserId, to: currentUserId }
      ]
    }).sort({ createdAt: 1 }); // ensure you use the correct field from your schema
    res.status(200).json(messages);
  } catch (err) {
    console.error('Message fetch error:', err);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

module.exports = router;
