const express = require('express');
const app = express();
const port = 8080;

// Define server-side routing
app.get('/', (req, res) => {
    res.send("This is Server side");
});

app.get('/about', (req, res) => {
    res.send("This is About page");
});

// Run server on port number
app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});