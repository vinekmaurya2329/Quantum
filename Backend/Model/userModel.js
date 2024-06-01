const mongoose = require('mongoose');
  const userSchema = mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    dateOfBirth:{
        type:String
    }
},{timestamps:true})

const userModel = mongoose.model('users',userSchema)
module.exports = userModel;