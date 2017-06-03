 //load bcrypt
 var bCrypt = require('bcrypt-nodejs');
 var LocalStrategy = require('passport-local').Strategy;
 var passport = require('passport')
 var db = require("../../models");

 // module.exports = function(passport,user){

 // var User = user;



 passport.serializeUser(function(user, done) {
   done(null, user.id);
 });


 // used to deserialize the user
 passport.deserializeUser(function(id, done) {
   db.User.findById(id).then(function(user) {
     if (user) {
       var data = {
         id: user.id,
         firstname: user.firstname,
         lastname: user.lastname,
         username: user.username,
         about: user.about,
         email: user.email
       }
       done(null, data);
     }
     else {
       done(user.errors, null);
     }
   });

 });

//sign up
 passport.use('local-signup', new LocalStrategy(

   {
     usernameField: 'email',
     passwordField: 'password',
     passReqToCallback: true // allows us to pass back the entire request to the callback
   },

   function(req, email, password, done) {


     var generateHash = function(password) {
       return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
     };

     db.User.findOne({
       where: {
         email: email
       }
     }).then(function(user) {

       if (user) {
         return done(null, false, {
           message: 'That email is already taken'
         });
       }

       else {
         var userPassword = generateHash(password);
         var data = {
           email: email,
           password: userPassword,
           firstname: req.body.firstname,
           lastname: req.body.lastname
         };


         db.User.create(data).then(function(newUser, created) {
           if (!newUser) {
             return done(null, false);
           }

           if (newUser) {
             return done(null, newUser);

           }


         });
       }


     });



   }



 ));

 //LOCAL SIGNIN
 passport.use('local-signin', new LocalStrategy(

   { 

     // by default, local strategy uses username and password, we will override with email
     usernameField: 'email',
     passwordField: 'password',
     passReqToCallback: true // allows us to pass back the entire request to the callback
   },

   function(req, email, password, done) {


     var isValidPassword = function(userpass, password) {
       return bCrypt.compareSync(password, userpass);
     }

     db.User.findOne({
       where: {
         email: email
       }
     }).then(function(user) {    
      console.log(email);
       if (!user) {
         return done(null, false, {
           message: 'Email does not exist'
         });
       }

       if (!isValidPassword(user.password, password)) {

         return done(null, false, {
           message: 'Incorrect password.'
         });

       }

       return done(null, {
         id: user.id,
         email: user.email
       });

     }).catch(function(err) {

       return done(null, false, {
         message: 'Something went wrong with your Signin'
       });


     });

   }
 ));

 module.exports = passport;
 // }
