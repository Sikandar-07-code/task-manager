import express from 'express';
import { getAllTasks, createTask, getTaskById, updateTaskById, deleteTaskById } from '../models/taskModel.js';


const router = express.Router();

// Get all tasks
router.get('/', async (req, res) => {
  try {
    const tasks = await getAllTasks();
    res.json(tasks);
  } catch (err) {
    console.error('Error fetching tasks:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Create a new task
router.post('/', async (req, res) => {
  try {
    const newTask = await createTask(req.body);
    res.status(201).json(newTask);
  } catch (err) {
    console.error('Error creating task:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get task by ID
router.get('/:id', async (req, res) => {
  try {
    const task = await getTaskById(req.params.id);
    if (task) {
      res.json(task);
    } else {
      res.status(404).json({ error: 'Task not found' });
    }
  } catch (err) {
    console.error('Error fetching task:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Update task by ID
router.put('/:id', async (req, res) => {
  const { title, description, start_date, end_date, recurrence_type, recurrence_interval, recurrence_days, recurrence_nth_weekday } = req.body;

  try {
    // Check if task exists
    const task = await getTaskById(req.params.id);
    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }

    // Update task
    const updatedTask = await updateTaskById(req.params.id, {
      title,
      description,
      start_date,
      end_date,
      recurrence_type,
      recurrence_interval,
      recurrence_days,
      recurrence_nth_weekday,
    });

    // Respond with the updated task
    res.json(updatedTask);
  } catch (err) {
    console.error('Error updating task:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Delete a task by ID
router.delete('/:id', async (req, res) => {
  try {
    // Check if task exists
    const task = await getTaskById(req.params.id);
    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }

    // Delete task
    await deleteTaskById(req.params.id);

    // Respond with a success message
    res.json({ message: 'Task deleted successfully' });
  } catch (err) {
    console.error('Error deleting task:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});


export default router;
