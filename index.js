const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts')

const port = 3000;

// Setting the views directory
app.set('views', './views');

// Setting the view engine
app.set('view engine', 'ejs');

// Things Used for cookieparser and sessions
const cookieParser = require('cookie-parser');
const session = require('express-session');

const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');

app.use(express.static('./assets'));
app.use(expressLayouts);
const db = require('./config/mongoose')


const flash = require('connect-flash');
const customMware = require('./config/notymiddleware');

app.use(express.urlencoded(
    { 
        extended: true
    }
))
app.use(cookieParser());

app.use(
    express.static('./assets')
);
app.use(expressLayouts);


// Extracting styles and scripts files for using them from sub pages into layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

// Setting up the View Engine
app.set('view engine', 'ejs');
app.set('views', './views')

// Using Mongo Store for storing the session cookies in the Database
app.use(session(
    {
        name: 'employee_review_system',
        secret: 'test',
        saveUninitialized: false,
        resave: false,
        cookie: {
            maxAge: ( 1000 * 60 * 100 )
        }
    }
))


app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser)

app.use(flash());
app.use(customMware.setFlash);

// Using express for routing
app.use('/', require('./routes/index'))


app.listen(port, function(err)
{
    if (err) {
        console.log(`Error while running the server: ${err}`)
    }
    console.log(`Server is running on the port: ${port}`)
})
