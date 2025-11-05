# MongoDB Authentication Setup Guide

This project has been migrated from Firebase authentication to MongoDB authentication with a separate backend server.

## Backend Setup

1. **Navigate to the backend folder:**
   ```bash
   cd backend
   ```

2. **Install backend dependencies:**
   ```bash
   npm install
   ```

3. **Create a `.env` file in the `backend` folder:**
   ```env
   MONGODB_URI=mongodb+srv://wajihawaqar1234_db_user:NGn0JBCN8OqPkM4O@cluster0.2twwsm1.mongodb.net/?appName=Cluster0
   JWT_SECRET=your-secret-key-change-in-production
   PORT=5000
   FRONTEND_URL=http://localhost:3000
   ```

4. **Start the backend server:**
   ```bash
   npm start
   ```
   
   Or for development with auto-reload:
   ```bash
   npm run dev
   ```

   The backend will run on `http://localhost:5000`

## Frontend Setup

1. **Create a `.env.local` file in the root directory:**
   ```env
   NEXT_PUBLIC_API_URL=http://localhost:5000/api
   ```

2. **Install frontend dependencies (if not already done):**
   ```bash
   npm install
   ```

3. **Start the frontend development server:**
   ```bash
   npm run dev
   ```

   The frontend will run on `http://localhost:3000`

## Running Both Servers

You'll need to run both the backend and frontend servers simultaneously:

1. **Terminal 1 - Backend:**
   ```bash
   cd backend
   npm start
   ```

2. **Terminal 2 - Frontend:**
   ```bash
   npm run dev
   ```

## Authentication Flow

- **Registration:** Users can register with email and password at `/signup`
- **Login:** Users can login at `/login`
- **Token Storage:** JWT tokens are stored in localStorage
- **Protected Routes:** The `/levels` page requires authentication

## API Endpoints

- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user
- `GET /api/auth/me` - Get current user

## Database

The application uses MongoDB Atlas with the provided connection string. Users are stored in a `users` collection with the following schema:
- `email` (unique, required)
- `password` (hashed with bcrypt, required)
- `createdAt` (timestamp)

## Notes

- Firebase has been completely removed from the project.
- All authentication logic is now in the `backend` folder.
- JWT tokens expire after 7 days.

