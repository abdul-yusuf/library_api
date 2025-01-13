const express = require('express');
const { swaggerSpec, swaggerUi, swaggerUiAssetsPath } = require("./utils/swagger");const bookRoutes = require('./routes/bookRoutes');
const connectDB = require('./config/db');
const cors = require('cors')
const app = express();

const path = require('path');

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));
// Serve static Swagger files
app.use("/static", express.static(swaggerUiAssetsPath));
// const swaggerAssetPath = require('swagger-ui-dist').getAbsoluteFSPath();
// app.use('/swagger-ui', express.static(swaggerAssetPath));

// Middleware
app.use(express.json());
app.use(cors())
// Connect to Database
connectDB();

// Routes
app.use('/api/books', bookRoutes);

// Swagger Documentation
app.use(
  "/",
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec, {
    // customCssUrl: "/static/swagger-ui.css",
    customJsUrl: "/static/swagger-ui-bundle.js",
  })
);

// Export the app
module.exports = app;
