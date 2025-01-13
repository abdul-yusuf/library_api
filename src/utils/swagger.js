const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const path = require("path");
const swaggerUiAssetsPath = require("swagger-ui-dist").getAbsoluteFSPath();

const swaggerSpec = swaggerJsDoc({
  definition: {
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
  apis: ["./src/**/*.js"],  // Adjust the glob pattern if needed
});

module.exports = { swaggerSpec, swaggerUi, swaggerUiAssetsPath };