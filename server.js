//*****************************************************************************
// Imports
//*****************************************************************************
const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const mongoConnect = require('./util/database').mongoConnect;

//*****************************************************************************
// Controller imports
//*****************************************************************************
const userRoutes = require('./routes/user');
const errorController = require('./controllers/error');
const app = express();

// Help express find the views folder
app.set('views', 'views');
// Help express find the ejs folders
app.set('view engine', 'ejs');
// Help express find the public folder, that contains all the CSS
app.use(express.static(__dirname + '/public'));

app.use(userRoutes);

app.use(errorController.get404);

mongoConnect(client => {
    app.listen(3000);
});