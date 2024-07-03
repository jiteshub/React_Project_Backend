const mongoose = require('mongoose')
const schema = mongoose.Schema

//product Schema
const productSchema = schema({
    _id:schema.Types.ObjectId,
    image:{type:String,require:true},
    Category:{type:String,require:true},
    Product_name:{type:String,require:true},
    price:{type:Number,require:true},
    quantity:{type:String,require:true}
})

module.exports = mongoose.model("product",productSchema)//export data in model