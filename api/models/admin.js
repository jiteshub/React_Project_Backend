const mongoose = require('mongoose')
const schema = mongoose.Schema

//Admin Schema
const adminSchema = schema({
    _id:schema.Types.ObjectId,
    uname:{type:String,require:true},
    pass:{type:String,require:true},
})

module.exports = mongoose.model("admin",adminSchema)//export data in model