// Refactor to use Express
const express = require('express');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})

app.get('/', (req, res) => {

    res.sendFile(path.join(__dirname, 'public', '/index.html'))
});

app.get('/about.html', (req, res) => {

    res.sendFile(path.join(__dirname, 'public', '/about.html'))
});

app.get('/contact-me.html', (req, res) => {

    res.sendFile(path.join(__dirname, 'public', '/contact-me.html'))
});

app.get('*', (req, res) => {

    res.sendFile(path.join(__dirname, 'public', '/404.html'))
});

