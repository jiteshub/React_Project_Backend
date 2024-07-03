//Post (Create->CRUD)
const mongoose = require('mongoose')
const cart = require('../models/cart');

//Get request
exports.getCart = async(req,res)=>{
    try{
        //Cart object
        const Cart = await cart.find();//Gets all the data fr4om database
        res.status(200).json({
            msg: "This is Get request for Cart Products",
            statusMsg:"Cart products data fetched successfully",
            data:Cart
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
exports.createCart = async(req,res)=>{
    try{
        //Product object
        const Cart = new cart({
            _id:new mongoose.Types.ObjectId(),
            image:req.body.image,
            Category:req.body.Category,
            Product_name:req.body.Product_name,
            quantity:req.body.quantity                  ,
            price: req.body.price
        }) 
        const data = await Cart.save();//call's save method and wait
        res.status(200).json({
            msg: "This is POST request for Cart products",
            //statusMsg:"Product created successfully",
            Cart:data
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
exports.getCartById = async(req,res)=>{
    try{
        //Product object
        const Cart = await cart.findById(req.params.CartId);//Gets all the data fr4om database
        res.status(200).json({
            msg: "This is Get request for Single Cart product",
            statusMsg:"Cart product data fetched successfully",
            data:Cart
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
exports.updateCart = async(req,res)=>{
    try{
        //Product object
        const Cart = await cart.findByIdAndUpdate(req.params.CartId, req.body);//Gets all the data fr4om database
        res.status(200).json({
            statusMsg:"Cart Updated successfully",
            data:Cart
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
exports.deleteCart = async(req,res)=>{
    try{
        //Product object
        const Cart = await cart.findByIdAndDelete(req.params.CartId);//Gets all the data fr4om database
        res.status(200).json({
            statusMsg:"Cart product deleted successfully",
            data:Cart
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