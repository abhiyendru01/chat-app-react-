// backend/routes/chat.js
const express = require('express');
const Message = require('../models/Message');

const router = express.Router();

// Get all messages
router.get('/messages', async (req, res) => {
  try {
    const messages = await Message.find().populate('sender', 'username');
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).send('Error fetching messages');
  }
});

// Send a new message
router.post('/messages', async (req, res) => {
  const { senderId, content } = req.body;
  try {
    const message = new Message({ sender: senderId, content });
    await message.save();
    res.status(201).json(message);
  } catch (error) {
    res.status(500).send('Error sending message');
  }
});

module.exports = router;
