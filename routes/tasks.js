// routes/tasks.js

const express = require('express');
const router = express.Router();
const Task = require('../models/task');

// Get all tasks
router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a single task by ID
router.get('/:id', getTask, (req, res) => {
  res.json(res.task);
});

// Create a new task
router.post('/', async (req, res) => {
  const task = new Task({
    title: req.body.title,
    description: req.body.description,
    status: req.body.status,
  });

  try {
    const newTask = await task.save();
    res.status(201).json(newTask);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a task
router.put('/:id', getTask, async (req, res) => {
  if (req.body.title != null) {
    res.task.title = req.body.title;
  }
  if (req.body.description != null) {
    res.task.description = req.body.description;
  }
  if (req.body.status != null) {
    res.task.status = req.body.status;
  }

  try {
    const updatedTask = await res.task.save();
    res.json(updatedTask);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a task
router.delete('/:id', getTask, async (req, res) => {
    try {
      // Use deleteOne to remove the task
      await res.task.deleteOne();
      res.json({ message: 'Task deleted successfully' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

// Middleware to get task by ID
async function getTask(req, res, next) {
    let task;
    try {
      task = await Task.findById(req.params.id);
      if (task == null) {
        return res.status(404).json({ message: 'Task not found' });
      }
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  
    res.task = task;
    next();
  }
  
module.exports = router;
