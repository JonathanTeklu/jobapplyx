// Task routes - merge conflicts resolved
const express = require('express');
const router = express.Router();
const Task = require('../models/Task');
const verifyToken = require('../middleware/verifyToken');

// Create a new task (students only)
router.post('/', verifyToken, async (req, res) => {
  if (req.user.role !== 'student') {
    return res.status(403).json({ message: 'Only students can create tasks' });
  }
  try {
    const task = await Task.create({ ...req.body, student: req.user.id });
    res.status(201).json(task);
  } catch (err) {
    console.error('Task creation error:', err);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

// Get all open tasks with filters
router.get('/', verifyToken, async (req, res) => {
  const { minBudget, maxBudget, location, major, campus } = req.query;
  const filter = { status: 'open' };

  if (minBudget) filter.budget = { ...filter.budget, $gte: Number(minBudget) };
  if (maxBudget) filter.budget = { ...filter.budget, $lte: Number(maxBudget) };
  if (location) filter.locationPreference = location;
  if (major) filter.major = major; // Uses major field from the schema
  if (campus) filter.campus = campus;

  try {
    const tasks = await Task.find(filter).populate('student', 'name');
    res.json(tasks);
  } catch (err) {
    console.error('Task fetch error:', err);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

// Claim a task (snaggers only)
router.put('/:id/claim', verifyToken, async (req, res) => {
  if (req.user.role !== 'snagger') {
    return res.status(403).json({ message: 'Only snaggers can claim tasks' });
  }

  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ message: 'Task not found' });
    if (task.status !== 'open') return res.status(400).json({ message: 'Task already claimed' });

    task.snagger = req.user.id;
    task.status = 'claimed';
    await task.save();

    res.json(task);
  } catch (err) {
    console.error('Task claim error:', err);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

module.exports = router;
