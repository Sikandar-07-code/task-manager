# 📝 Task Manager App

A full-stack Task Management web application inspired by TickTick, built with **Next.js**, **Express.js**, and **PostgreSQL**, featuring powerful recurring task functionality.

---

## 🚀 Features

### ✅ Task Management
- Create, Read, Update, Delete tasks
- Mark tasks as recurring

### 🔁 Recurring Tasks
- Daily, Weekly, Monthly, Yearly
- Custom recurrence:
  - Every X days/weeks/months/years
  - Specific weekdays (Mon, Wed, Fri)
  - Nth weekday of the month (e.g. 2nd Tuesday)

### 🧑‍💻 Interface
- Clean UI with Tailwind CSS
- Modular, reusable components
- Date picker, recurrence form, mini-calendar preview

---

## 🛠 Tech Stack

- **Frontend**: Next.js (App Router), Tailwind CSS, Zustand
- **Backend**: Express.js, PostgreSQL
- **Database ORM**: pg
- **Deployment**: Vercel / Render / Railway (optional)

---

## 📂 Project Structure

src/
components/
TaskList.js
TaskItem.js
TaskModal.js
RecurrenceForm.js
pages/
index.js
server/
index.js
db.js


Install Dependencies

npm install
# or
yarn install


Start Backend Server

cd server
npm install
node index.js


Start Frontend

cd ..
npm run dev
