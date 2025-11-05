# Syntax Saga Backend

Backend server for Syntax Saga authentication using MongoDB and Express.

## Setup

1. Install dependencies:
```bash
cd backend
npm install
```

2. Create a `.env` file in the backend directory:
```env
MONGODB_URI=mongodb+srv://wajihawaqar1234_db_user:NGn0JBCN8OqPkM4O@cluster0.2twwsm1.mongodb.net/?appName=Cluster0
JWT_SECRET=your-secret-key-change-in-production
PORT=5000
FRONTEND_URL=http://localhost:3000
```

3. Start the server:
```bash
npm start
```

For development with auto-reload:
```bash
npm run dev
```

## API Endpoints

### Authentication

- `POST /api/auth/register` - Register a new user
  - Body: `{ email: string, password: string }`
  - Returns: `{ token: string, user: { id, email } }`

- `POST /api/auth/login` - Login user
  - Body: `{ email: string, password: string }`
  - Returns: `{ token: string, user: { id, email } }`

- `POST /api/auth/logout` - Logout user
  - Headers: `Authorization: Bearer <token>`
  - Returns: `{ message: string }`

- `GET /api/auth/me` - Get current user
  - Headers: `Authorization: Bearer <token>`
  - Returns: `{ user: { id, email } }`

### Health Check

- `GET /api/health` - Check server status
  - Returns: `{ status: 'OK', message: 'Backend server is running' }`

## Environment Variables

- `MONGODB_URI` - MongoDB connection string
- `JWT_SECRET` - Secret key for JWT token signing
- `PORT` - Server port (default: 5000)
- `FRONTEND_URL` - Frontend URL for CORS (default: http://localhost:3000)

## Project Structure

```
backend/
├── config/
│   └── db.js          # MongoDB connection
├── models/
│   └── User.js        # User model
├── routes/
│   └── auth.js        # Authentication routes
├── middleware/
│   └── auth.js        # JWT authentication middleware
├── server.js          # Express server setup
└── package.json       # Dependencies
```

