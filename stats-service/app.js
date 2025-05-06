// app.js
// Sets up the Express application and defines API routes.

const express = require('express');
const { getStats, debugMongo } = require('./db'); // Import the real stats function from db.js

const app = express();

// Route to get real tierlist statistics from MongoDB
app.get('/api/stats', getStats);
app.get('/api/debug', debugMongo);


module.exports = app; // Exports the Express app for use in server.js
