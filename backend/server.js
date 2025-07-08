import http from 'http';
import { Server } from 'socket.io';
import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import passport from 'passport';
import userRoutes from './routes/route.js';
import Connection from './database/db.js';
import path from 'path';
import { fileURLToPath } from 'url';
import bodyParser from 'body-parser';

mongoose.set('strictQuery', true);

const app = express();
const server = http.createServer(app); // Create HTTP server

// Get __dirname in ES Module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// CORS configuration to allow only your frontend domain
app.use(cors({
  origin: 'https://mindnest-backend-591h.onrender.com', // ✅ your frontend domain here
  methods: ['GET', 'POST', 'PATCH', 'DELETE', 'PUT'],
  credentials: true,
}));

app.use(express.json());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(session({
  secret: process.env.SESSION_SECRET || 'mindnestsecret',
  resave: false,
  saveUninitialized: true,
  cookie: {
    sameSite: 'none', // ← Important for cross-origin cookies
    secure: true       // ← Required for Render (HTTPS)
  }
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/upload1', express.static(path.join(__dirname, 'upload1')));

// Connect to MongoDB
console.log('→ Using Mongo URI:', process.env.MONGODB_URI);
Connection();

// Routes
app.use('/', userRoutes);

// Server Port
const port = process.env.PORT || 4000;
server.listen(port, () => {
  console.log("🚀 Server is running on port", port);
});

