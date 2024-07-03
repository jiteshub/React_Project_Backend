const mongoose = require('mongoose')
const schema = mongoose.Schema

//product Schema
const bestsellerSchema = schema({
    _id:schema.Types.ObjectId,
    image:{type:String,require:true},
    Category:{type:String,require:true},
    Product_name:{type:String,require:true},
    price:{type:Number,require:true},
    quantity:{type:String,require:true}
})

module.exports = mongoose.model("bestseller",bestsellerSchema)//export data in model