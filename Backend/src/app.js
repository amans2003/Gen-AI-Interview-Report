const express = require("express")
const cookieParser = require("cookie-parser")
const cors = require("cors")

const app = express()

app.use(express.json())
app.use(cookieParser())

const allowedOrigins = [
    "http://localhost:5173",
    "http://localhost:3000",
    process.env.FRONTEND_URL,
].filter(Boolean)

app.use(cors({
    origin: function (origin, callback) {
        // Allow requests with no origin (mobile apps, curl, Postman)
        if (!origin) return callback(null, true)

        // Allow exact matches
        if (allowedOrigins.includes(origin)) return callback(null, true)

        // Allow any Vercel preview/branch deploy for this project
        if (/https:\/\/gen-ai-interview-report[a-z0-9-]*\.vercel\.app$/.test(origin)) {
            return callback(null, true)
        }

        callback(new Error("Not allowed by CORS: " + origin))
    },
    credentials: true
}))

/* require all the routes here */
const authRouter = require("./routes/auth.routes")
const interviewRouter = require("./routes/interview.routes")


/* using all the routes here */
app.use("/api/auth", authRouter)
app.use("/api/interview", interviewRouter)



module.exports = app