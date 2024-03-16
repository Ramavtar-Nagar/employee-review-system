const User = require('../models/user');
const AssignedReview = require('../models/assignedReview');
const MyReview = require('../models/myReviews')


module.exports.home = async function(req, res){
    try {

        let users = await User.find({})
        res.render('./employeeSection', {
            users: users
        })

    } catch (error) {
        console.log('Error', error);
    }
}


module.exports.update = async function(req, res){
    try {

        let user = await User.findById(req.params.id);

        if(user.name == req.body.name && user.email == req.body.email && user.password == req.body.password){
           
            req.flash('success', 'No Values Updated');
            return res.redirect('back');
        }

        user.name = req.body.name;
        user.email = req.body.email;
        user.password = req.body.password;
        user.save();

        req.flash('success', 'User Details Updated Successfully');
        return res.redirect('back');
        
    } catch (error) {
        console.log('Error', error);
        return res.redirect('back');
    }
}


module.exports.delete=async function(req,res)
{
    try {
        let user = await User.findById(req.params.id);
        user.deleteOne();

        await AssignedReview.deleteMany({fromUser:req.params.id});
        let MyRiviewIDS = await MyReview.find({fromUser:req.params.id})


        for(let review of MyRiviewIDS)
        {
            let userid= review.toUser
            await User.findByIdAndUpdate(userid, { $pull: { myReviews: review.id } });
            await review.deleteOne();

        }

        res.redirect('back')
        
    } catch (error) {
        console.log('Error', error);
    }
}


module.exports.makeadmin = async function(req, res){
    try {

        let user = await User.findById(req.params.id);
        user.permission = 'admin';
        user.save();

        req.flash('success', 'User has been Promoted to an ADMIN!!!');
        return res.redirect('back');
        
    } catch (error) {
        console.log('Error', error);
        return res.redirect('back');
    }
}


module.exports.removeadmin = async function (req, res) {
    try {
          let user = await User.findById(req.params.id);
             user.permission = 'employee';
             user.save();

             req.flash('success', 'User has been Demoted as an Employee!!!');
             return res.redirect('back');
 
          
    }catch (error) {
 
       console.log('Error', error);
       return res.redirect('back');
    }
}

