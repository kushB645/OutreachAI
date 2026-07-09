# 🚀 OutreachAI

AI-powered Cold Email Generator built with the MERN Stack. Generate personalized cold emails, LinkedIn DMs, and follow-up emails using Groq AI. Users can securely register, log in, generate outreach content, and access their generation history.

---

## 📸 Preview

> Add screenshots or a demo GIF here

---

## ✨ Features

- 🔐 JWT Authentication
- 🤖 AI-powered Cold Email Generation
- 💼 Professional Subject Line Generator
- 💬 LinkedIn DM Generator
- 📧 Follow-up Email Generator
- 📜 Email Generation History
- 🔒 Protected API Routes
- 📱 Responsive UI
- ⚡ Fast REST API with Express
- ☁️ MongoDB Atlas Database
- 🚀 Deployable on Vercel + Render

---

## 🛠️ Tech Stack

### Frontend

- React.js
- Vite
- React Router DOM
- Axios
- Tailwind CSS
- React Hot Toast

### Backend

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT Authentication
- Groq API

---

## 📂 Project Structure

```
OutreachAI
│
├── client
│   ├── src
│   ├── public
│   └── package.json
│
├── server
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── utils
│   └── server.js
│
├── README.md
└── .gitignore
```

---

# ⚙️ Installation

## 1. Clone Repository

```bash
git clone https://github.com/kushB645/OutreachAI.git
```

```bash
cd OutreachAI
```

---

## 2. Install Frontend

```bash
cd client
```

```bash
npm install
```

---

## 3. Install Backend

```bash
cd ../server
```

```bash
npm install
```

---

# 🔑 Environment Variables

Create a `.env` file inside the **server** folder.

```env
PORT=5000

MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key

GROQ_API_KEY=your_groq_api_key

FRONTEND_URL=http://localhost:5173
```

---

# ▶️ Run Locally

### Backend

```bash
cd server
npm run dev
```

### Frontend

```bash
cd client
npm run dev
```

---

# 🔐 Authentication

- User Registration
- User Login
- JWT Authentication
- Protected API Routes

---

# 🤖 AI Features

The application generates:

- Professional Cold Emails
- Optimized Subject Lines
- LinkedIn Connection Messages
- Follow-up Emails

Powered by **Groq Llama 3.3 70B Versatile**.

---

# 📡 API Endpoints

## Authentication

### Register

```
POST /api/auth/register
```

### Login

```
POST /api/auth/login
```

---

## AI

### Generate Email

```
POST /api/ai/generate-email
```

Requires JWT Token.

---

### Get History

```
GET /api/ai/history
```

Requires JWT Token.

---

# 🚀 Deployment

## Frontend

Vercel

## Backend

Render

## Database

MongoDB Atlas

---

# 📷 Screenshots

## Home Page

> Add Screenshot

## Dashboard

> Add Screenshot

## AI Generated Email

> Add Screenshot

---

# 📈 Future Improvements

- Export generated emails as PDF
- Copy to Clipboard
- Email Templates
- Prompt History Search
- Dark Mode
- Multiple AI Models
- Email Tone Selection
- Rich Text Editor

---

# 👨‍💻 Author

**Kush Bhardwaj**

- GitHub: https://github.com/kushB645

---

# 📄 License

This project is licensed under the MIT License.