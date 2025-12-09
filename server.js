// server.js
const express = require('express');
const path = require('path');

const app = express();
const PORT = 5050;

// Serve static files
app.use(express.static(__dirname));

// Main route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`🚁 Altitude running at http://localhost:${PORT}`);
});