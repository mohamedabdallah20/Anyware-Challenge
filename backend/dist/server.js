"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const dotenv = require('dotenv').config();
const colors = require('colors');
const db_1 = __importDefault(require("./config/db"));
const quizRoutes_1 = __importDefault(require("./routes/quizRoutes"));
const announcementRoutes_1 = __importDefault(require("./routes/announcementRoutes"));
const { errorHandler } = require('./middlewares/errorMiddleware');
const cors = require('cors');
const PORT = process.env.PORT || 8888;
// connect to DB
(0, db_1.default)();
// initialize the App
const app = express();
// body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// cors middleware
const corsOptions = {
    origin: 'https://anyware-challenge.vercel.app', // frontend URI (ReactJS)
};
app.use(cors(corsOptions));
// Quiz Routes
app.use('/api/quizzes', quizRoutes_1.default);
// Announcement Routes
app.use('/api/announcements', announcementRoutes_1.default);
// error handler middleware
app.use(errorHandler);
app.listen(PORT, () => {
    console.log(`SERVER RUNNING ON PORT ${PORT}`);
});
