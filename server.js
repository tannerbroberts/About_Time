//*****************************************************************************
//imports
//*****************************************************************************
const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const mongoConnect = require('./util/database').mongoConnect;
const userRoutes = require('./routes/user');
const app = express();

app.set('views', 'views');

app.use(userRoutes);

mongoConnect(client => {
    console.log(client);
    app.listen(3000);
});