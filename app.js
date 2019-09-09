const express = require('express');
const app = express();
const routes = require('./routes');     // Import routes module we created
const path = require('path');
const bodyParser = require('body-parser');

// Define port to listen to
const PORT = process.env.PORT || 8080;

// allows us to parse bodies of requests
app.use(bodyParser.json());
// allows for rich objects and arrays to be encoded into URL-encoded format
app.use(bodyParser.urlencoded({ extended: true }));

// Connect all routes from routes module to app
app.use('/', routes);

// Start Server
app.listen(PORT, () => console.log(`Server is running on ${PORT}!`));
