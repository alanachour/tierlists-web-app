const express = require('express');
const app = express();

app.get('/api/stats', (req, res) => {
    res.json({
        totalTierlists: 42,
        mostUsedCategory: 'S',
        mostPopularItem: 'Simon GHOST Riley'
    });  // Returns mock statistics as JSON
});

module.exports = app;  // Exports the Express app for use in another file (e.g., server.js)
