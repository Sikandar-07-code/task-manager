import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import pool from './db.js';
import taskRoutes from './routes/taskRoutes.js'; // ✅ Import task routes

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// 🔌 Connect your task API routes
app.use('/tasks', taskRoutes);

// Optional: Root route
app.get('/', (req, res) => {
  res.send('Task Manager API is running');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
