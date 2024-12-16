const fs = require('fs');
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const swaggerDocs = require('./utils/swagger');
const bookRoutes = require('./routes/bookRoutes');
const connectDB = require('./config/db');
const errorHandler = require('./middleware/errorHandler');
const marked = require('marked');
const app = express();

// Middleware
app.use(express.json());
app.use(helmet());
// app.use(cors());

// Connect to Database
connectDB();
// Define the path to the README.md file
const path = require('path'); // Ensure you require the path module

console.log(path)
const readmePath = path.join(__dirname, '../README.md'); // Resolves to one directory back
console.log(readmePath)

// Routes
// Root route to display README.md content
app.get('/', (req, res) => {
  fs.readFile(readmePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading README.md:', err);
      res.status(500).send('An error occurred while loading the documentation.');
      return;
    }
    res.send(`<pre>${data}</pre>`);
  });
});
app.use('/api/books', bookRoutes);
swaggerDocs(app, 3000)

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
