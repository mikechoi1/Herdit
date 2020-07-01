const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Hi There");
});

//if production environments are given, otherwise use 5000 (for development)
const PORT = process.env.PORT || 5000;
app.listen(PORT);