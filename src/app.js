const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const { swaggerUi, specs } = require('./utils/swagger');
const bookRoutes = require('./routes/bookRoutes');
const connectDB = require('./config/db');
const errorHandler = require('./middleware/errorHandler');

const app = express();

// Middleware
app.use(express.json());
app.use(helmet());
app.use(cors());

// Connect to Database
connectDB();

// Routes
app.use('/api/books', bookRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// Error Handling Middleware
app.use(errorHandler);

// Cors Handling
// app.use(cors({
//     origin: '*', // Allow all origins. You can restrict this to specific domains for better security.
//     methods: ['GET', 'POST', 'PATCH'], // Allow only specific HTTP methods
//     allowedHeaders: ['Content-Type', 'Authorization'], // Allow specific headers
//   }));
// app.options('*', cors());

module.exports = app;
