# 🤖 Gen AI Interview Report

> An AI-powered interview preparation platform that analyzes your resume and a job description to generate a personalized interview strategy, questions, and a tailored resume PDF.

🔗 **Live Demo:** [gen-ai-interview-report-liart.vercel.app](https://gen-ai-interview-report-liart.vercel.app)

---

## ✨ Features

- 🔐 **Authentication** — Secure register/login with JWT stored in HTTP-only cookies
- 📄 **Resume Upload** — Upload your PDF resume for AI analysis
- 🧠 **AI Interview Report** — Powered by Google Gemini, generates:
  - **Match Score** — How well your profile fits the job
  - **Technical Questions** — With interviewer intention & model answers
  - **Behavioral Questions** — With intention & model answers
  - **Skill Gaps** — Identified missing skills with severity (low/medium/high)
  - **Preparation Roadmap** — Day-by-day study plan
- 📥 **Download Resume PDF** — AI generates a tailored, ATS-friendly resume PDF
- 📋 **Report History** — View all previously generated interview plans
- 🚪 **Logout** — Secure session termination with token blacklisting

---

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose |
|-----------|---------|
| React 19 + Vite | UI framework & build tool |
| React Router v7 | Client-side routing |
| Axios | HTTP requests |
| SCSS | Styling |

### Backend
| Technology | Purpose |
|-----------|---------|
| Node.js + Express 5 | REST API server |
| MongoDB + Mongoose | Database |
| JSON Web Tokens | Authentication |
| bcryptjs | Password hashing |
| Multer | File uploads |
| pdf-parse | Resume PDF text extraction |
| Puppeteer + @sparticuz/chromium | PDF generation |
| Google Gemini AI (`@google/genai`) | AI report & resume generation |

### Deployment
| Service | Purpose |
|---------|---------|
| Vercel | Frontend hosting |
| Render | Backend hosting |
| MongoDB Atlas | Cloud database |

---

## 🗂️ Project Structure

```
Gen-AI-Interview-Report/
├── Frontend/
│   └── src/
│       ├── features/
│       │   ├── auth/           # Login, Register, Protected routes
│       │   └── interview/      # Home dashboard, Interview report page
│       ├── App.jsx
│       └── app.routes.jsx
└── Backend/
    └── src/
        ├── controllers/        # auth.controller.js, interview.controller.js
        ├── middlewares/        # auth.middleware.js, file.middleware.js
        ├── models/             # user.model.js, interviewReport.model.js, blacklist.model.js
        ├── routes/             # auth.routes.js, interview.routes.js
        ├── services/           # ai.service.js (Gemini + Puppeteer)
        └── config/             # database.js
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- MongoDB Atlas account (or local MongoDB)
- Google Gemini API key ([Get one here](https://aistudio.google.com/app/apikey))

### 1. Clone the repository

```bash
git clone https://github.com/amans2003/Gen-AI-Interview-Report.git
cd Gen-AI-Interview-Report
```

### 2. Setup Backend

```bash
cd Backend
npm install
```

Create a `.env` file in the `Backend/` directory:

```env
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/gen-ai-interview?retryWrites=true&w=majority
JWT_SECRET=your_super_secret_key_here
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
GOOGLE_GENAI_API_KEY=your_google_gemini_api_key_here
```

Start the backend:

```bash
npm run dev
```

Backend runs on `http://localhost:3000`

### 3. Setup Frontend

```bash
cd Frontend
npm install
```

Create a `.env` file in the `Frontend/` directory:

```env
VITE_API_BASE_URL=http://localhost:3000
```

Start the frontend:

```bash
npm run dev
```

Frontend runs on `http://localhost:5173`

---

## 🌐 API Endpoints

### Auth
| Method | Endpoint | Description | Access |
|--------|----------|-------------|--------|
| POST | `/api/auth/register` | Register new user | Public |
| POST | `/api/auth/login` | Login user | Public |
| GET | `/api/auth/logout` | Logout user | Public |
| GET | `/api/auth/get-me` | Get current user | Private |

### Interview
| Method | Endpoint | Description | Access |
|--------|----------|-------------|--------|
| POST | `/api/interview/` | Generate interview report | Private |
| GET | `/api/interview/` | Get all reports | Private |
| GET | `/api/interview/report/:id` | Get report by ID | Private |
| POST | `/api/interview/resume/pdf/:id` | Download resume PDF | Private |

---

## ☁️ Deployment

### Backend (Render)

Set the following environment variables in your Render service:

| Variable | Value |
|----------|-------|
| `MONGO_URI` | Your MongoDB Atlas URI (with DB name) |
| `JWT_SECRET` | Any long random secret string |
| `NODE_ENV` | `production` |
| `FRONTEND_URL` | `https://your-vercel-app.vercel.app` |
| `GOOGLE_GENAI_API_KEY` | Your Gemini API key |

### Frontend (Vercel)

Set the following environment variable in your Vercel project:

| Variable | Value |
|----------|-------|
| `VITE_API_BASE_URL` | `https://your-render-backend.onrender.com` |

> **Note:** `NODE_ENV=production` on the backend is **required** for:
> - Cross-origin cookies to work (`SameSite=None; Secure`)
> - Puppeteer to use `@sparticuz/chromium` (needed for PDF generation on serverless)

---

## 🔒 Environment Variables Reference

### Backend `.env`
```env
MONGO_URI=           # MongoDB connection string with database name
JWT_SECRET=          # Secret for signing JWT tokens
NODE_ENV=            # 'development' or 'production'
FRONTEND_URL=        # Allowed CORS origin
GOOGLE_GENAI_API_KEY= # Google Gemini API key
```

### Frontend `.env`
```env
VITE_API_BASE_URL=   # Backend base URL
```

---

## 📸 How It Works

```
1. Register / Login
        ↓
2. Paste Job Description + Upload Resume (or write self-description)
        ↓
3. AI (Google Gemini) analyzes your profile vs the job
        ↓
4. Get your personalized Interview Report:
   • Match Score  • Technical Q&A  • Behavioral Q&A
   • Skill Gaps   • Day-by-day Preparation Plan
        ↓
5. Download an AI-generated, ATS-friendly Resume PDF
```

---

## 📄 License

MIT License — feel free to use and modify.

---

<div align="center">
  Built with ❤️ using React, Node.js & Google Gemini AI
</div>
