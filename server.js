const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');

const app = express();

app.use((req, res, next) => {
    res.send("You got here!");
});

app.listen(3000);