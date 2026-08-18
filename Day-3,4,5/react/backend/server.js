const express = require('express');
const app = express();
const connectDB = require ('./config/db');
require('dotenv').config();

connectDB();

// Define server-side routing
app.get('/', (req, res) => {
    res.send("This is Server side");
});

app.get('/about', (req, res) => {
    res.send("This is About page");
});

// .env file (no info visible)
const port = process.env.PORT;

// Run server on port number
app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});