const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// Swagger Configuration
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Library Management API',
      version: '1.0.0',
      description: 'A simple REST API for managing a library',
    },
    servers: [
      {
        url: process.env.NODE_ENV === 'production'
        ? 'https://your-production-url.vercel.app' // Replace with your actual production URL
        : 'http://localhost:3000',
      },
    ],
  },
  apis: ['./routes/*.js'], // Path to API docs
};

const specs = swaggerJsDoc(options);

// Export both `swaggerUi` and `specs` as an object
module.exports = {
  swaggerUi,
  specs,
};
// module.exports = (app) => {
//   app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
// };
