const User = require('../models/user')

// Rendering the Signing In Page
module.exports.Signin = function (req, res) {
   res.render('./signinPage');
}

// Rendering the Signing Up Page
module.exports.SignUp =  function(req, res) {
   res.render('./signupPage')
}


// Taking the sign up data to process
module.exports.create = async function(req, res) {
   try {
      if(req.body.password != req.body.confirm_password){
         req.flash('error','Both passwords do not match');
         return res.redirect('back');
      }

      let user = await User.findOne(
         {
            email: req.body.email
         }
      );

      if(!user){
         await User.create(req.body);
         req.flash('success', 'User Created Successfully');
         return res.redirect('back');
      }else{
         req.flash('error', 'User with email already exists, Try Signing In instead!!!');
         return res.redirect('back');
      }
   } catch (error) {
      console.log('Error', error);
      return res.redirect('back');
   }
}

// Signing In and creating the session for thr user
module.exports.createSession = function(req, res) {
   return res.redirect('/');
}
module.exports.destroySession = function (req, res) {
   try {
       req.logout(function (error) {
           if (error) {
               console.log('Error while signing out', error);
               req.flash('error', 'Error while signing out');
               return res.redirect('back');
           }
           req.flash('success', 'Logged out successfully');
           return res.redirect('/users/Signin');
       });
   } catch (error) {
       console.log('Error while signing out', error);
       req.flash('error', 'Error while signing out');
       return res.redirect('back');
   }
}

