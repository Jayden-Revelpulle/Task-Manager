# Task Manager MERN Application

A full-stack task management application built with the MERN stack (MongoDB, Express.js, React.js, Node.js).

## Live Demo

The application is live and can be accessed at:
https://task-manager-mern-iaoc.onrender.com

## Features

- REST API to create, read, update, and delete tasks

## Technology Stack

- **Frontend:**

  - React.js
  - Tailwind CSS
  - Axios for API calls

- **Backend:**
  - Node.js
  - Express.js
  - MongoDB for database

## Local Development Setup

1. Clone the repository:

   ```bash
   git clone [repository-url]
   cd Task-Manager_MERN
   ```

2. Install dependencies for both frontend and backend:

   ```bash
   # Install server dependencies
   cd server
   npm install

   # Install client dependencies
   cd ../client
   npm install
   ```

3. Set up environment variables:

   - Create a `.env` file in the server directory
   - Add necessary environment variables:
     ```
     MONGODB_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret
     PORT=5000
     ```

4. Run the development servers:

   ```bash
   # Run backend server (from server directory)
   npm run start

   # Run frontend development server (from client directory)
   npm run start
   ```

5. Access the application:
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000

## Usage

1. **Account Creation/Login:**

   - Create a new account or login with existing credentials
   - Secure authentication using JWT tokens

2. **Managing Tasks:**

   - Add new tasks using the "+" button
   - Edit tasks by clicking on them
   - Mark tasks as complete using the checkbox
   - Delete tasks using the delete icon
   - Filter and sort tasks using the provided controls

3. **Task Organization:**
   - Categorize tasks by priority
   - Filter tasks by status (completed/incomplete)
   - Sort tasks by date or priority

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

If you have any questions or feedback, please feel free to reach out to the project maintainers.

---

_Note: This is a project built for learning purposes and demonstration of MERN stack capabilities._
