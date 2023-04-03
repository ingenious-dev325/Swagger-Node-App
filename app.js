const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerJson = require('./swagger.json');

const app = express();

// Swagger definition
const swaggerDefinition = {
  openapi: swaggerJson.openapi,
  info: swaggerJson.info,
  servers: swaggerJson.servers,
  components: swaggerJson.components,
  paths: swaggerJson.paths,
  components: swaggerJson.components,
};

// Options for the swagger docs
const options = {
  swaggerDefinition,
  // Path to the API docs
  apis: ['./routes/*.js'],
};

// Initialize swagger-jsdoc
const swaggerSpec = swaggerJSDoc(options);

// Serve the Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
