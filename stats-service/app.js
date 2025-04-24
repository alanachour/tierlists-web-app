const express = require('express');
const app = express();

app.get('/api/stats', (req, res) => {
    res.json({
        totalTierlists: 42,
        mostUsedCategory: 'S',
        mostPopularItem: 'Goku'
    });
});

module.exports = app;
