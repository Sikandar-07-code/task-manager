import { Pool } from 'pg';

// Configure the connection to your PostgreSQL database
const pool = new Pool({
  user: 'postgres',        // Your PostgreSQL username
  host: 'localhost',       // The database host
  database: 'taskmanager', // Your database name
  password: 'Sikandar786', // Your PostgreSQL password
  port: 5432,              // Default PostgreSQL port
});

// Test the connection
pool.connect()
  .then(() => console.log('Connected to PostgreSQL database'))
  .catch(err => console.error('Database connection error:', err.stack));

export default pool;
