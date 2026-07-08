# 🚀 OutreachAI – AI-Powered Cold Email Generator

OutreachAI is a full-stack AI-powered web application that helps users generate professional cold emails, LinkedIn outreach messages, and follow-up emails using Large Language Models (LLMs). It streamlines networking and job outreach by creating personalized, high-quality communication in seconds.

---

## ✨ Features

- 🔐 Secure JWT Authentication
- 📧 Email Verification using OTP
- 🤖 AI-Powered Email Generation
- 💼 Personalized Cold Emails
- 💬 LinkedIn Outreach Message Generation
- 🔄 Follow-up Email Generation
- 📝 Email History Dashboard
- 📱 Responsive User Interface
- ⚡ Fast & Modern React Frontend

---

## 🛠️ Tech Stack

### Frontend
- React.js
- React Router
- Axios
- CSS3

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Nodemailer

### AI Integration
- Groq API
- Llama 3.3 70B Versatile

---

## 📂 Project Structure

```
OutreachAI/
│
├── client/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── server/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/kushb645outreachai.git
```

```bash
cd outreachai
```

---

### Install Dependencies

#### Backend

```bash
cd server
npm install
```

#### Frontend

```bash
cd ../client
npm install
```

---

## 🔑 Environment Variables

Create a `.env` file inside the `server` folder.

```env
PORT=5000

MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_random_secret_key

EMAIL_USER=your_email@gmail.com

EMAIL_PASS=your_google_app_password

GROQ_API_KEY=your_groq_api_key

FRONTEND_URL=http://localhost:5173
```

---

## ▶️ Running the Project

### Start Backend

```bash
cd server
npm run dev
```

### Start Frontend

```bash
cd client
npm run dev
```

Frontend:

```
http://localhost:5173
```

Backend:

```
http://localhost:5000
```

---

## 📸 Screenshots

### Landing Page

> Add Screenshot Here

---

### Dashboard

> Add Screenshot Here

---

### AI Email Generation

> Add Screenshot Here

---

### OTP Verification

> Add Screenshot Here

---

## 📌 API Endpoints

### Authentication

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/auth/register` | Register User |
| POST | `/api/auth/verify-otp` | Verify Email |
| POST | `/api/auth/login` | Login User |

---

### AI

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/ai/generate-email` | Generate AI Email |
| GET | `/api/ai/history` | Get Email History |

---

## 🔒 Authentication Flow

1. User Registration
2. OTP Verification
3. Login
4. JWT Token Generation
5. Protected AI Routes
6. Email History Storage

---

## 🚀 Future Improvements

- AI Tone Selection
- Multiple AI Models
- Export Email as PDF
- One-click Copy
- Gmail Integration
- Email Templates
- Dark Mode
- Multi-language Support

---

## 💡 Why OutreachAI?

Finding the right words for professional networking can be difficult. OutreachAI helps users generate personalized and professional outreach emails instantly, making job applications and networking more efficient.

---

## 👨‍💻 Author

**Kush Bhardwaj**

Frontend Developer | MERN Stack Developer

GitHub: https://github.com/kushb645

LinkedIn: https://linkedin.com/in/kushbhardwaj01

Portfolio: https://kush01.vercel.app/

---

## 📄 License

This project is licensed under the MIT License.