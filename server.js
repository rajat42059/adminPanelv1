var express = require('express');
var app = express();
var users = require("./routes/user");
const { v4: uuidv4 } = require("uuid");
const router = require('./router');

var bodyParser = require("body-parser");
const session = require("express-session")
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(session({
    secret: uuidv4(), //  '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
    resave: false,
    saveUninitialized: true
}));
// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

app.use("/", users);
app.use('/route', router);




// about page
app.get('/about', function(req, res) {
  res.render('pages/about');
});

app.listen(8080);
console.log('Server is listening on port 8080');