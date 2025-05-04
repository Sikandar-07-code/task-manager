
📝 Task Manager
A full-stack task manager app with support for recurring tasks and modern UI.

🚀 Features
✅ Create, Edit, Delete Tasks

🔁 Recurring Tasks:

Daily / Weekly / Monthly / Yearly

Every X days/weeks/months/years

Specific weekdays (e.g., Mon/Wed/Fri)

Nth weekday of the month (e.g., 2nd Tuesday)

📅 Custom Recurrence Options

📆 Mini-calendar preview (optional)

✨ Beautiful, clean UI with Tailwind CSS

🛠 Tech Stack
Frontend: Next.js (App Router), Tailwind CSS

Backend: Express.js

Database: PostgreSQL

State Management: Context API

🧩 Code Structure
components/TaskList.js – displays task list

components/TaskModal.js – add/edit task

components/RecurrenceForm.js – set recurrence rules

backend/routes/tasks.js – Express routes

⚙️ Setup Instructions
bash
Copy
Edit
# Clone the repo
git clone https://github.com/your-username/task-manager.git

# Install frontend dependencies
cd task-manager
npm install

# Start frontend server
npm run dev

# Install backend dependencies (if separate)
cd backend
npm install
npm run dev
🌍 Running the App
Frontend: Open http://localhost:3000 in your browser.

Backend: Open http://localhost:5000 for API requests.

🔌 API Endpoints
GET /tasks: Get all tasks

GET /tasks/:id: Get a single task

POST /tasks: Create a new task

PUT /tasks/:id: Update an existing task

DELETE /tasks/:id: Delete a task

🔧 Database Setup
Make sure PostgreSQL is installed and running. Use the following steps to set up the database:

Create a database:

bash
Copy
Edit
psql -U your-username -d your-database-name -f database.sql
Update the database configuration in backend/db.js with your credentials.

🚀 Future Enhancements
User authentication (login/signup)

Task filtering by status, date, etc.

Push notifications for task reminders
