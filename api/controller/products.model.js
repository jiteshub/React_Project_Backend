//Post (Create->CRUD)
const mongoose = require('mongoose')
const product = require('../models/product');

//Get request
exports.getProducts = async(req,res)=>{
    try{
        //Product object
        const Product = await product.find();//Gets all the data from database
        res.status(200).json({
            msg: "This is Get request for Products",
            statusMsg:"Products data fetched successfully",
            data:Product
        })
    }
    catch(err){
        res.status(501).json({
            code:10,
            msg: "Failed to save data",
            statusMsg:"Something went wrong",
            err:err
        })
    }
}
//Post request
exports.createProduct = async(req,res)=>{
    try{
        //Product object
        const Product = new product({
            _id:new mongoose.Types.ObjectId(),// unique identifier (id) created by mongodb by default.
            image:req.body.image,
            Category:req.body.Category,
            Product_name:req.body.Product_name,
            quantity:req.body.quantity,                  
            price: req.body.price
        }) 
        const data = await Product.save();//call's save method and wait
        res.status(200).json({
            msg: "This is POST request for Products",
            statusMsg:"Product created successfully",
            Product:data
        })
    }
    catch(err){
        res.status(501).json({
            code:10,
            msg: "Failed to save data",
            statusMsg:"Something went wrong",
            err:err
        })
    }
}

//GetById request
exports.getProductById = async(req,res)=>{
    try{
        //Product object
        const Product = await product.findById(req.params.productId);//Gets all the data fr4om database
        res.status(200).json({
            msg: "This is Get request for Single Product",
            statusMsg:"Product data fetched successfully",
            data:Product
        })
    }
    catch(err){
        res.status(501).json({
            code:10,
            msg: "Failed to save data",
            statusMsg:"Something went wrong",
            err:err
        })
    }
}

//Edit (PUT)ById
exports.updateProduct = async(req,res)=>{
    try{
        //Product object
        const Product = await product.findByIdAndUpdate(req.params.productId, req.body);//Gets all the data fr4om database
        res.status(200).json({
            statusMsg:"Product Updated successfully",
            data:Product
        })
    }
    catch(err){
        res.status(501).json({
            code:10,
            msg: "Failed to save data",
            statusMsg:"Something went wrong",
            err:err
        })
    }
}

//DeleteById
exports.deleteProduct = async(req,res)=>{
    try{
        //Product object
        const Product = await product.findByIdAndDelete(req.params.productId);//Gets all the data fr4om database
        res.status(200).json({
            statusMsg:"Product deleted successfully",
            data:Product
        })
    }
    catch(err){
        res.status(501).json({
            code:10,
            msg: "Failed to save data",
            statusMsg:"Something went wrong",
            err:err
        })
    }
}