const mongoose = require('mongoose')
const schema = mongoose.Schema

//product Schema
const UserSchema = schema({
    _id:schema.Types.ObjectId,
    fname:{type:String,require:true},
    lname:{type:String,require:true},
    uname:{type:String,require:true},
    password:{type:String,require:true}
})

module.exports = mongoose.model("user",UserSchema)//export data in model