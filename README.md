# HMCTS Case Management System

This is a case management system designed for managing court cases and related tasks for HMCTS. The system allows users to create, update, delete, and view case-related tasks. It includes a user-friendly frontend and a robust backend API to handle task data.

This solution was created for the HMCTS Developer Challenge.

## Features
- Create, update, and delete tasks.
- Task listing and filtering.
- Responsive design for easy use on desktop and mobile devices.
  
The backend API of this application is built using Node.js and Express.js. It connects to a database (e.g., Supabase, PostgreSQL) to manage tasks.

### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14.x or higher)
- [npm](https://www.npmjs.com/)

You also need access to a database, like [Supabase](https://supabase.io/)


## Backend Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/hmcts-case-management.git
   cd hmcts-case-management/backend
2. Install dependencies:  npm install
3. Create a .env file in the backend directory with your database connection details.
Example .env file for Supabase: SUPABASE_URL=your-supabase-url
SUPABASE_ANON_KEY=your-anon-key
4. Run database migrations to set up the required tables (if using Supabase or PostgreSQL): npm run migrate
5. Run node index.js This will start the server at http://localhost:5000.

   ###  **How to Run the Application (Development Environment)**
This section will explain how to run both the frontend and backend together.

#### Example:
```markdown
## Running the Application

1. Start the backend:
   ```bash
   cd backend
   npm start
2.In another terminal window, start the frontend: cd frontend
npm start
This will run the frontend on http://localhost:3000 and the backend on http://localhost:5000. The frontend will make API requests to the backend to manage tasks.



### **Technologies Used**
Mention the core technologies used in your project.

#### Example:
```markdown
## Technologies Used

- **Frontend:** React.js, Tailwind CSS
- **Backend:** Node.js, Express.js, Supabase/PostgreSQL
- **Database:** Supabase/PostgreSQL
- **Version Control:** Git, GitHub
- **Other Tools:** Axios (for API calls)
