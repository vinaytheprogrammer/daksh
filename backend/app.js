// app.js
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Load environment variables
dotenv.config();

// Initialize express app
const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/students', require('./routes/students'));
app.use('/api/documents', require('./routes/documents'));
app.use('/api/alumni', require('./routes/alumni'));
app.use('/api/announcements', require('./routes/announcements'));
app.use('/api/timetables', require('./routes/timetables'));
app.use('/api/auth', require('./routes/auth'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// hello this is little test for changing commits