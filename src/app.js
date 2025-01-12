const express = require('express');
const swaggerDocs = require('./utils/swagger');
const bookRoutes = require('./routes/bookRoutes');
const connectDB = require('./config/db');
const swaggerUi = require('swagger-ui-express');
const cors = require('cors')
const app = express();

// Middleware
app.use(express.json());
app.use(cors())
// Connect to Database
connectDB();

// Routes
app.use('/api/books', bookRoutes);

// Swagger Documentation
swaggerDocs(app, 3000);

// Export the app
module.exports = app;
