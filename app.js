require('dotenv').config();
const express = require('express');
const connectDB = require('./config/database');
const userRoutes = require('./routes/userRoutes');
const logger = require('./middleware/logger');
const errorHandler = require('./utils/errorHandler');

// Initialize express
const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use(logger);

// Routes
app.use('/', userRoutes);

// Error handling
app.use(errorHandler);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});