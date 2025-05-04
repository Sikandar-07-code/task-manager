
Task Manager App
Overview
This is a Task Manager App with recurring task functionality. The app allows users to create, edit, delete, and view tasks, with support for recurring tasks. It has a clean, professional design with a clear and user-friendly interface. The app also includes advanced recurrence logic, such as "Every X interval" and "Nth weekday" options.

Features
Task Management
CRUD Operations: Create, Read, Update, and Delete tasks.

Recurring Tasks: Supports recurring tasks with the following options:

Daily

Weekly

Monthly

Yearly

Custom Recurrence (Every X [interval] days, weeks, months, or years)

Specific days of the week (e.g., Mon/Wed/Fri)

Nth weekday of the month (e.g., 2nd Tuesday)

User Interface
Reusable Date Picker component for recurrence setup.

Visual Mini-Calendar preview for recurring dates.

Technologies Used
Frontend: Next.js, React, Tailwind CSS

Backend: Node.js, Express.js, PostgreSQL

Database: PostgreSQL

State Management: React hooks

Form Handling: React forms for task creation and editing

Getting Started
1. Clone the Repository
bash
Copy
Edit
git clone https://github.com/your-username/task-manager.git
2. Install Dependencies
Navigate to the project directory:

bash
Copy
Edit
cd task-manager
Install the frontend dependencies:

bash
Copy
Edit
npm install
3. Set Up the Backend
Navigate to the backend folder (if separate) or ensure the backend setup is inside the project directory.

Install the backend dependencies:

bash
Copy
Edit
cd backend
npm install
4. Set Up the Database
Ensure you have PostgreSQL installed and running. You can check if PostgreSQL is running on the default port (5432). If needed, update the database connection details in the backend config file (e.g., db.js).

To create the necessary tables, run:

bash
Copy
Edit
psql -U your-username -d your-database-name -f database.sql
Replace your-username, your-database-name, and database.sql with the actual details.

5. Running the App
Frontend (Next.js):
To start the frontend, run:

bash
Copy
Edit
npm run dev
This will start the frontend server on http://localhost:3000.

Backend (Node.js/Express):
To start the backend server, run:

bash
Copy
Edit
npm run start
This will start the backend server on http://localhost:5000.

Endpoints
The backend exposes the following endpoints:

Tasks
GET /tasks: Get all tasks

GET /tasks/:id: Get a single task

POST /tasks: Create a new task

PUT /tasks/:id: Update an existing task

DELETE /tasks/:id: Delete a task

Future Improvements
Authentication: Add user authentication (e.g., login/signup).

Advanced Filters: Allow users to filter tasks based on different criteria.

Push Notifications: Send reminders for recurring tasks.
