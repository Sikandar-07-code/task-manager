import pool from '../db.js';

// Get all tasks
export async function getAllTasks() {
  const result = await pool.query('SELECT * FROM tasks ORDER BY id');
  return result.rows;
}

// Create a new task
export async function createTask(taskData) {
  const {
    title,
    description,
    start_date,
    end_date,
    recurrence_type,
    recurrence_interval,
    recurrence_days,
    recurrence_nth_weekday,
  } = taskData;

  const result = await pool.query(
    `INSERT INTO tasks 
      (title, description, start_date, end_date, recurrence_type, recurrence_interval, recurrence_days, recurrence_nth_weekday)
     VALUES 
      ($1, $2, $3, $4, $5, $6, $7, $8)
     RETURNING *`,
    [
      title,
      description,
      start_date,
      end_date,
      recurrence_type,
      recurrence_interval,
      recurrence_days,
      recurrence_nth_weekday,
    ]
  );

  return result.rows[0];
}

// Get a single task by ID
export async function getTaskById(id) {
  const result = await pool.query('SELECT * FROM tasks WHERE id = $1', [id]);
  return result.rows[0];
}

// Update task by ID
export async function updateTaskById(id, taskData) {
  const {
    title,
    description,
    start_date,
    end_date,
    recurrence_type,
    recurrence_interval,
    recurrence_days,
    recurrence_nth_weekday,
  } = taskData;

  const result = await pool.query(
    `UPDATE tasks 
     SET 
      title = $1, 
      description = $2, 
      start_date = $3, 
      end_date = $4, 
      recurrence_type = $5, 
      recurrence_interval = $6, 
      recurrence_days = $7, 
      recurrence_nth_weekday = $8 
     WHERE id = $9
     RETURNING *`,
    [
      title,
      description,
      start_date,
      end_date,
      recurrence_type,
      recurrence_interval,
      recurrence_days,
      recurrence_nth_weekday,
      id,
    ]
  );

  return result.rows[0];
}

// Delete task by ID
export async function deleteTaskById(id) {
  await pool.query('DELETE FROM tasks WHERE id = $1', [id]);
}


