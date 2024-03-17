const mongoose = require('mongoose')




const userModel = mongoose.Schema({
    fullName: {
        type: String,
        require: true
    },
   
    userName: {
        type:String,
        require:true
    },
    userImage: {
        type: String,
        require: true
    },
    phone: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    follower:{
        type:Array,
        require:true
    },
    following:{
        type:Array,
        require:true
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
})
mongoose.model('userModel', userModel);
module.exports = userModel;

