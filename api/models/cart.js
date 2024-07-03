const mongoose = require('mongoose')
const schema = mongoose.Schema

//product Schema (structure of data to be stored at the database)
const cartSchema = schema({
    _id:schema.Types.ObjectId,
    image:{type:String,require:true},
    Category:{type:String,require:true},
    Product_name:{type:String,require:true},
    price:{type:Number,require:true},
    quantity:{type:String,require:true}
})

module.exports = mongoose.model("cart",cartSchema)//export data in model