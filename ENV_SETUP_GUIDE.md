# Environment Variables Setup Guide

## Root `.env` or `.env.local` File (Frontend)

Keep these variables in your **root folder** `.env` file:

```env
# Backend API URL (REQUIRED)
# This tells the frontend where to find your backend server
NEXT_PUBLIC_API_URL=http://localhost:5000/api

# AI API Keys (OPTIONAL - only if you use quiz generation)
# These are used in app/api/generate-quiz/route.ts
OPENAI_API_KEY=your-openai-api-key-here
GEMINI_API_KEY=your-gemini-api-key-here
```

### Required:
- ✅ `NEXT_PUBLIC_API_URL` - **KEEP THIS** - Frontend needs this to connect to your MongoDB backend

### Optional (only if you use AI quiz generation):
- `OPENAI_API_KEY` - Only needed if you use OpenAI for quiz generation
- `GEMINI_API_KEY` - Only needed if you use Google Gemini for quiz generation

### Remove (Firebase - no longer needed):
- ❌ `NEXT_PUBLIC_FIREBASE_API_KEY`
- ❌ `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
- ❌ `NEXT_PUBLIC_FIREBASE_PROJECT_ID`
- ❌ `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`
- ❌ `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
- ❌ `NEXT_PUBLIC_FIREBASE_APP_ID`
- ❌ `NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID`

---

## Backend `.env` File (in `backend/` folder)

Create a separate `.env` file in the `backend/` folder with:

```env
# MongoDB Connection (REQUIRED)
MONGODB_URI=mongodb+srv://wajihawaqar1234_db_user:NGn0JBCN8OqPkM4O@cluster0.2twwsm1.mongodb.net/?appName=Cluster0

# JWT Secret (REQUIRED - change this to a secure random string)
JWT_SECRET=your-secret-key-change-in-production

# Server Configuration (OPTIONAL - has defaults)
PORT=5000
FRONTEND_URL=http://localhost:3000
```

### Required:
- ✅ `MONGODB_URI` - Your MongoDB connection string
- ✅ `JWT_SECRET` - Secret key for signing JWT tokens (use a strong random string)

### Optional:
- `PORT` - Backend server port (defaults to 5000)
- `FRONTEND_URL` - Frontend URL for CORS (defaults to http://localhost:3000)

---

## Summary

**Root `.env` file should contain:**
```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
# Add OPENAI_API_KEY and GEMINI_API_KEY only if you need AI quiz generation
```

**Backend `backend/.env` file should contain:**
```env
MONGODB_URI=mongodb+srv://wajihawaqar1234_db_user:NGn0JBCN8OqPkM4O@cluster0.2twwsm1.mongodb.net/?appName=Cluster0
JWT_SECRET=your-secret-key-change-in-production
PORT=5000
FRONTEND_URL=http://localhost:3000
```

**Remove all Firebase keys from root `.env`** - they are no longer needed.

