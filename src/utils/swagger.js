const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// Serve static Swagger files
const swaggerAssetPath = require('swagger-ui-dist').getAbsoluteFSPath();
app.use('/swagger-ui', express.static(swaggerAssetPath));

const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Library API',
      version: '1.0.0',
      description: 'API documentation for the library management system',
    },
    servers: [
      {
        url: "http://localhost:3000",
        description: "Local server",
      },
      {
        url: "https://internship-liard-chi.vercel.app",
        description: "Live server",
      },
    ],
  },
  apis: ['./src/routes/*.js'], // Path to the file with Swagger annotations
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

module.exports = (app, port) => {
  app.use('/', swaggerUi.serve,
    swaggerUi.setup(swaggerDocs)
  );
  console.log(`Swagger documentation available at http://localhost:${port}/api-docs`);
};
