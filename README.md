# Taskify

Taskify is a task management web application that lets users create, edit, and delete tasks. Built with a modern tech stack, this application offers a clean interface for efficient task management.

## Tech Stack

- **Frontend:**
  - HTML
  - CSS
  - JavaScript

- **Backend:**
  - Node.js
  - Express.js

- **Database:**
  - PostgreSQL

- **Template Engine:**
  - EJS (Embedded JavaScript)

## Features

- **Add Tasks:** Submit new tasks via a form.
- **Edit Tasks:** Modify existing tasks through an overlay popup.
- **Delete Tasks:** Remove tasks from the list.
- **Responsive Design:** Works well on both desktop and mobile devices.

## Setup Instructions

### Prerequisites

- Node.js (v14 or later)
- npm (Node Package Manager)
- PostgreSQL (for database management)

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/taskify.git
   cd taskify

Install Dependencies

bash
Copy code
npm install
Set Up the Database

Ensure PostgreSQL is installed and running.

Create a database named todo and a table sachin with the following structure:

sql
Copy code
CREATE TABLE sachin (
  id SERIAL PRIMARY KEY,
  sadhanam VARCHAR(255) NOT NULL
);
Configure Database Connection

Open the app.js file and ensure the database configuration matches your PostgreSQL setup:

javascript
Copy code
const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "todo",
  port: 5432,
});
Start the Application

bash
Copy code
npm start
The application will be available at http://localhost:3001.

File Structure
views/
index.ejs - Main EJS template file.
public/
styles/
style.css - Application styles.
app.js - Main server file with Express.js routes and PostgreSQL database interactions.
How It Works
Frontend:

Users interact with a form to add new tasks and manage existing ones.
Tasks are displayed in a list, and each task can be edited or deleted.
Backend:

The Express server handles routes for adding, editing, and deleting tasks.
PostgreSQL is used to store and retrieve task data.
Database Interaction:

/submit: Adds a new task to the database.
/delete: Deletes a task by its ID.
/edit: Updates a task’s description.
/: Renders the main page with the current list of tasks.
Contribution
Feel free to submit issues, create pull requests, or contribute in any other way to enhance the functionality and usability of Taskify.