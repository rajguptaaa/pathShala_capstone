# 🏫 PathShala — AI-Powered Language Learning Platform

PathShala is a full-stack language learning web application that combines gamified lessons, AI conversation practice, speech recognition, and progress tracking to make language learning engaging and effective.

---

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Prerequisites](#-prerequisites)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [API Reference](#-api-reference)
- [Pages & Components](#-pages--components)
- [AI & Speech Integration](#-ai--speech-integration)
- [Authentication Flow](#-authentication-flow)
- [Database Models](#-database-models)
- [Known Issues & Notes](#-known-issues--notes)

---

## ✨ Features

| Feature | Description |
|---|---|
| 🔐 JWT Authentication | Secure login/signup with persistent sessions — no repeated logins |
| 📚 Gamified Lessons | Static lesson modules for 7 languages across Beginner, Intermediate, and Advanced levels |
| 🧠 AI Chat Tutor | Conversational AI powered by Google Gemini for language practice |
| 🎤 Speech-to-Text | Browser-native Web Speech API for speaking practice in the target language |
| 🔊 Text-to-Speech | Browser-native speech synthesis to hear AI responses read aloud |
| 📊 Progress Dashboard | Track lessons completed, study time, streaks, and overall progress |
| 👤 User Profile | View and edit profile, see join date, target languages, and learning stats |
| 📬 Contact Form | Real email delivery via Gmail App Password using Nodemailer |
| 🌙 Dark Mode | Full dark/light theme toggle across all pages |
| 📱 Responsive Design | Mobile-friendly layout using Tailwind CSS |

---

## 🛠 Tech Stack

### Frontend
| Technology | Version | Purpose |
|---|---|---|
| React | 18.2 | UI framework |
| Vite | 4.4 | Build tool & dev server |
| React Router DOM | 6.14 | Client-side routing |
| Tailwind CSS | 3.3 | Utility-first styling |
| Framer Motion | 10.16 | Animations & transitions |
| Lucide React | 0.276 | Icon library |
| Axios | 1.4 | HTTP client |

### Backend
| Technology | Version | Purpose |
|---|---|---|
| Node.js | ≥14.0 | Runtime |
| Express | 4.18 | Web framework |
| MongoDB + Mongoose | 7.0 | Database & ODM |
| JWT (jsonwebtoken) | 9.0 | Authentication tokens |
| bcryptjs | 2.4 | Password hashing |
| Nodemailer | 8.0 | Email sending |
| Multer | 1.4 | File upload handling |
| dotenv | 16.0 | Environment config |
| cors | 2.8 | Cross-origin requests |
| nodemon | 2.0 | Dev auto-restart |

### AI & Speech
| Service | Type | Purpose |
|---|---|---|
| Google Gemini | Cloud API | AI chat responses & text correction |
| Web Speech API | Browser-native | Speech-to-text input |
| SpeechSynthesis API | Browser-native | Text-to-speech output |
| Gmail App Password | Email | Contact form delivery |

---

## 📁 Project Structure

```
pathShala_capstone/
├── client/                         # React frontend (Vite)
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx          # Top navigation with auth state
│   │   │   └── Footer.jsx          # Site footer
│   │   ├── context/
│   │   │   ├── AuthContext.jsx     # Global auth state + token verification
│   │   │   └── ThemeContext.jsx    # Dark/light mode state
│   │   ├── pages/
│   │   │   ├── Landing.jsx         # Public home/marketing page
│   │   │   ├── Auth.jsx            # Login & signup forms
│   │   │   ├── Dashboard.jsx       # User stats & quick start
│   │   │   ├── Lessons.jsx         # Gamified lesson modules
│   │   │   ├── Chat.jsx            # AI conversation + speech
│   │   │   ├── Profile.jsx         # User profile & edit
│   │   │   └── Contact.jsx         # Contact form with email
│   │   ├── services/
│   │   │   ├── api.js              # Axios instance + interceptors
│   │   │   ├── authService.js      # Auth API calls
│   │   │   ├── chatService.js      # Chat API calls
│   │   │   ├── lessonService.js    # Lesson API calls
│   │   │   └── progressService.js  # Progress API calls
│   │   ├── App.jsx                 # Routes + ProtectedRoute
│   │   └── main.jsx                # React entry point
│   ├── .env                        # Frontend env vars
│   ├── package.json
│   ├── tailwind.config.js
│   └── vite.config.js
│
└── server/                         # Express backend
    ├── src/
    │   ├── config/
    │   │   └── db.js               # MongoDB connection
    │   ├── controllers/
    │   │   ├── authController.js   # Register, login, profile
    │   │   ├── chatController.js   # AI chat, TTS, STT
    │   │   ├── contactController.js# Email sending via Nodemailer
    │   │   ├── lessonController.js # CRUD for lessons
    │   │   └── progressController.js # User progress tracking
    │   ├── middleware/
    │   │   ├── auth.js             # JWT protect middleware
    │   │   └── errorHandler.js     # Global error handler
    │   ├── models/
    │   │   ├── User.js             # User schema
    │   │   ├── Lesson.js           # Lesson schema
    │   │   ├── Progress.js         # Progress schema
    │   │   ├── ChatMessage.js      # Chat history schema
    │   │   └── Achievement.js      # Achievement schema
    │   ├── routes/
    │   │   ├── user.routes.js      # /api/auth/*
    │   │   ├── lesson.routes.js    # /api/lessons/*
    │   │   ├── progress.routes.js  # /api/progress/*
    │   │   ├── chat.routes.js      # /api/chat/*
    │   │   └── contact.routes.js   # /api/contact/*
    │   ├── services/
    │   │   ├── index.js            # Service selector (local vs cloud)
    │   │   ├── localLLMService.js  # Ollama AI integration
    │   │   ├── offlineSpeechService.js # Offline TTS/STT
    │   │   ├── openaiService.js    # OpenAI fallback
    │   │   └── speechService.js    # Cloud speech fallback
    │   ├── utils/
    │   │   └── jwt.js              # Token generation helper
    │   └── app.js                  # Express app setup
    ├── .env                        # Backend env vars
    ├── package.json
    └── server.js                   # Server entry point
```

---

## ✅ Prerequisites

Make sure you have the following installed:

- **Node.js** v14 or higher — [nodejs.org](https://nodejs.org)
- **MongoDB** — Local install or [MongoDB Atlas](https://www.mongodb.com/atlas) (free tier)
- **Git** — [git-scm.com](https://git-scm.com)

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/pathShala_capstone.git
cd pathShala_capstone
```

### 2. Setup the Backend

```bash
cd server
npm install
```

Create your `.env` file (see [Environment Variables](#-environment-variables) below), then:

```bash
# Start in development mode
npm run dev

# Or production
npm start
```

The server runs on **http://localhost:5000**

### 3. Setup the Frontend

```bash
cd client
npm install
npm run dev
```

The client runs on **http://localhost:5173**

---

## 🔧 Environment Variables

### Server — `server/.env`

```env
PORT=5000
NODE_ENV=development

# MongoDB
MONGODB_URI=mongodb://localhost:27017/language-learning-app

# JWT
JWT_SECRET=your_super_secret_key_here
JWT_EXPIRE=7d

# Google Gemini AI
GEMINI_API_KEY=your_gemini_api_key_here

# Speech (Browser-based)
USE_OFFLINE_TTS=true
TTS_ENGINE=espeak
USE_WEB_SPEECH=true

# CORS
CLIENT_URL=http://localhost:5173

# Rate Limiting
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100

# Email (Gmail App Password)
EMAIL_USER=your_gmail@gmail.com
EMAIL_PASS=your_16_char_app_password
```


### Client — `client/.env`

```env
VITE_API_URL=http://localhost:5000/api
```

---

## 📡 API Reference

### Auth — `/api/auth`

| Method | Endpoint | Auth | Description |
|---|---|---|---|
| POST | `/register` | ❌ | Create new account |
| POST | `/login` | ❌ | Login and get JWT token |
| GET | `/me` | ✅ | Get full user profile |
| PUT | `/profile` | ✅ | Update user profile |

### Lessons — `/api/lessons`

| Method | Endpoint | Auth | Description |
|---|---|---|---|
| GET | `/` | ✅ | Get all lessons (filter by `level`, `language`) |
| GET | `/:id` | ✅ | Get single lesson with user progress |
| POST | `/` | ✅ | Create a lesson |
| PUT | `/:id` | ✅ | Update a lesson |
| POST | `/:id/rate` | ✅ | Rate a lesson |

### Progress — `/api/progress`

| Method | Endpoint | Auth | Description |
|---|---|---|---|
| GET | `/dashboard` | ✅ | Get dashboard stats & recent lessons |
| POST | `/update` | ✅ | Update lesson progress |

### Chat — `/api/chat`

| Method | Endpoint | Auth | Description |
|---|---|---|---|
| POST | `/message` | ✅ | Send message, get AI response |
| GET | `/history/:sessionId` | ✅ | Get chat history |
| POST | `/correct` | ✅ | Grammar correction |
| POST | `/translate` | ✅ | Translate text |
| POST | `/text-to-speech` | ✅ | Convert text to audio |

### Contact — `/api/contact`

| Method | Endpoint | Auth | Description |
|---|---|---|---|
| POST | `/send` | ❌ | Send contact email (no login required) |

---

## 🖥 Pages & Components

### Public Pages
- **`/`** — Landing page with features, testimonials, and CTA
- **`/auth`** — Login and signup with form validation
- **`/contact`** — Contact form that sends real emails via Gmail

### Protected Pages (require login)
- **`/dashboard`** — Stats overview, recent lessons, quick start links
- **`/lessons`** — Browse and filter lessons by language and level; gamified quizzes with MCQ, fill-in-the-blank, and pronunciation practice
- **`/chat`** — AI conversation tutor with speech-to-text input and text-to-speech output
- **`/profile`** — View/edit name, bio, native language, target languages; see join date and learning stats

---

## 🤖 AI & Speech Integration

### AI Chat (Google Gemini)
- Powered by **Google Gemini API**
- The model acts as a language tutor, corrects mistakes, and explains grammar
- Conversation history is stored in MongoDB per session

### Speech-to-Text
- Uses the browser's built-in **Web Speech API** (`SpeechRecognition`)
- Automatically sets the recognition language to match the selected target language
- Works in **Chrome** and most Chromium-based browsers
- Click the 🎤 microphone button in Chat or Lessons to activate

### Text-to-Speech
- Uses the browser's built-in **SpeechSynthesis API**
- Click the 🔊 speaker icon on any AI message to hear it read aloud
- Language/accent matches the selected target language

> **Browser Support:** Speech features work best in Google Chrome. Firefox has limited support. Safari may require permissions.

---

## 🔐 Authentication Flow

```
User visits protected route
        ↓
AuthContext checks localStorage for token
        ↓
If token exists → calls GET /api/auth/me
        ↓
Token valid?  ──Yes──→ Load full user profile → Allow access
     ↓ No
Clear token → Redirect to /auth
```

- Tokens are stored in `localStorage` and sent as `Authorization: Bearer <token>` headers
- Token expiry is set to **7 days** by default
- On 401 responses, the Axios interceptor automatically clears the token and redirects to `/auth`
- Once logged in, users are **not asked to log in again** until the token expires

---

## 🗄 Database Models

### User
```
firstName, lastName, email, password (hashed)
bio, level, progress, nativeLanguage, targetLanguages[]
learningStreak, totalLessonsCompleted, totalStudyTime
achievements[], enrolledLessons[], completedLessons[]
lastActive, createdAt, updatedAt
```

### Lesson
```
title, description, language, level, duration
content: { vocabulary[], grammar[], exercises[] }
rating, totalRatings, prerequisites[], order, isPublished
```

### Progress
```
user (ref), lesson (ref), status, progress (0-100)
score, timeSpent, completedExercises[], lastAccessed
```

### ChatMessage
```
user (ref), sessionId, sender (user/ai), message, language
```

### Achievement
```
title, description, icon, category, requirement, points
```

---

## ⚠ Known Issues & Notes

- **AI Chat requires a valid Gemini API key** in `.env`. If the key is missing or invalid, chat will show an error. All other features work independently.
- **Speech recognition** works best in **Google Chrome**. Other browsers may not support the Web Speech API.
- **MongoDB** must be running locally or a valid Atlas URI must be set in `.env` before starting the server.
- The `EMAIL_PASS` in `.env` must be a **Gmail App Password** (16 characters), not your regular Gmail password.
- The lessons page uses **static built-in content** for reliability. Dynamic lesson creation via the API is also supported for admins.

---

## 📄 License

This project was built as a capstone project. Feel free to use it for learning and educational purposes.

---

## 👨‍💻 Author

Built with ❤️ as part of the PathShala Capstone Project.
