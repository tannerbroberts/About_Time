const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// app routes here app.use, app.get, app.post...
app.use((req, res, next) => {
    res.send("You got here!");
});

app.listen(3000);