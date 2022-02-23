const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');

const app = express();

app.use((req, res, next) => {
    let testVar = 5;
    res.send("You got here!");
    testVar++;
});

app.listen(3000);