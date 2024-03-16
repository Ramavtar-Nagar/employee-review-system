const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');

// Doing Authentication using Passport
passport.use( new LocalStrategy(
    {
        usernameField: 'email',
        passReqToCallback: true
    },
    function(req, email, password, done){
        // Finding the user and Establishing the entity
        User.findOne({ email: email}).then(function(user){
            if(!user || user.password != password){
                req.flash('error', 'Invalid UserName or Password');
                return done(null, false);
            }
            return done(null, user);
        }).catch(function(error){
            console.log('Error while finding the user')
            return done(error);
        })
    }
))


//Serializing the user to decide which key to keep in the cookies
passport.serializeUser(function(user, done){
    done(null, user.id)
})


// Deserializing user from the key present in the cookies
passport.deserializeUser(function(id, done){
    User.findById(id).then(
        function(user){
            return done(null, user);
        }
    ).catch(function(error){
        console.log('Error while finding the user');
        return done(error);
    })
})



// Checking if the user is authenticated or not
passport.checkAuthentication = function(req, res, next){
    // If the user is signed in then calling next
    if(req.isAuthenticated()){
        return next();
    }

    // If the user is not signed in
    return res.redirect('/users/Signin');
}


passport.setAuthenticatedUser = function(req, res, next){
    if(req.isAuthenticated()){
        res.locals.user = req.user;
    }
    next();
}


passport.restrictAccess = function(req, res, next){
    
    if(req.isAuthenticated() && req.user.permission != 'admin'){
        return res.redirect('back');
    }
    next();
}


passport.restrictAccessPages = function(req, res, next){
    if(req.isAuthenticated() && req.user.permission == 'admin'){
        next();
    }else{
        return res.redirect('back');
    }
}
module.exports = passport;