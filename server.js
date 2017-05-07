// The first line assigns the express module to a variable express. We then initialize express and name it a variable: app.

var express = require('express');
var app = express();

// In the first two lines, we import the passport module and the express-session, both of which we need to handle authentication.
// Then, we import the body-parser module. This extracts the entire body part of an incoming request and exposes it in a format that is easier to work with. In this case, we will use the JSON format.
var passport = require('passport');
var session = require('express-session');
var bodyParser = require('body-parser');

// import the dot-env module to handle environment variables, npm install --save dotenv
var env = require('dotenv').load();

//handlebars
var exphbs = require('express-handlebars')

//For BodyParser, To let our app use the body parser, we add these lines some spaces below the import lines:
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); 

// we initialize passport and the express session and passport session and add them both as middleware. We do this by adding these lines some spaces after the bodyParser import line.

// For Passport
 
app.use(session({ secret: 'supo1234',resave: true, saveUninitialized:true})); // session secret, move this to a outside file to not have secret revealed
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

//For Handlebars
app.set('views', './app/views')
app.engine('hbs', exphbs({extname: '.hbs'}));
app.set('view engine', '.hbs');

// we call the app.get() express routing function to respond with "Welcome to Passport with Sequelize" when a GET request is made to "/".
app.get('/', function(req, res) {
    res.send('Welcome to Passport with Sequelize');
});

//Models
var models = require("./app/models");

//Routes
var authRoute = require('./app/routes/auth.js')(app, passport);

//load passport strategies
 
require('./app/config/passport/passport.js')(passport, models.user);

//Sync Database
models.sequelize.sync().then(function() {
 
    console.log('Nice! Database looks fine')
 
}).catch(function(err) {
 
    console.log(err, "Something went wrong with the Database Update!")
 
});

 
 // we make app listen on port 3000. You can choose any free port number on your computer.
app.listen(3000, function(err) {
 
    if (!err)
        console.log("Site is live");
    else console.log(err)
 
});




