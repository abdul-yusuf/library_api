const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// Swagger Configuration
const options = {
  definition: {
    openapi: '3.1.0',
    info: {
      title: 'Library Management API',
      version: '1.0.0',
      description: 'A simple REST API for managing a library',
      contact: {
        name: "Yusuf Abdulhadi",
        email: "abdul17yusuf@gmail.com",
        url: "https://github.com/abdul-yusuf/library_api",
      },
    },
    servers: [
      {
        url: "http://localhost:8080",
        description: "Local server",
      },
      {
        url: "https://internship-liard-chi.vercel.app",
        description: "Live server",
      },
    ],
  },
  apis: ['./routes/*.js', './app.js'], // Path to API docs
};

const swaggerSpec = swaggerJsDoc(options);

function swaggerDocs(app, port) {
  // Swagger Page
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  // Documentation in JSON format
  app.get('/docs.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
  });

  console.log(`Swagger docs available at http://localhost:${port}/api-docs`);
}

module.exports = swaggerDocs;
