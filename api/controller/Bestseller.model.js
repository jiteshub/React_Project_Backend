//Post (Create->CRUD)
const mongoose = require('mongoose')
const bestseller = require('../models/Bestseller');

//Get request
exports.getBestseller = async(req,res)=>{
    try{
        //Cart object
        const Bestseller = await bestseller.find();//Gets all the data fr4om database
        res.status(200).json({
            msg: "This is Get request for Bestseller Product",
            statusMsg:"User data fetched successfully",
            data:Bestseller
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
exports.createBestseller = async(req,res)=>{
    try{
        //Product object
        const Bestseller = new bestseller({
            _id:new mongoose.Types.ObjectId(),
            image:req.body.image,
            Category:req.body.Category,
            Product_name:req.body.Product_name,
            quantity:req.body.quantity,                  
            price: req.body.price
        }) 
        const data = await Bestseller.save();//call's save method and wait
        res.status(200).json({
            msg: "This is POST request for Bestseller Product",
            statusMsg:"Product created successfully",
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
exports.getBestsellerById = async(req,res)=>{
    try{
        //Product object
        const Bestseller = await bestseller.findById(req.params.bestsellerId);//Gets all the data fr4om database
        res.status(200).json({
            msg: "This is Get request for Single Bestseller Product",
            statusMsg:"Bestseller Product data fetched successfully",
            data:Bestseller
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
exports.updateBestseller = async(req,res)=>{
    try{
        //Product object
        const Bestseller = await bestseller.findByIdAndUpdate(req.params.bestsellerId, req.body);//Gets all the data fr4om database
        res.status(200).json({
            statusMsg:"Bestseller Product record Updated successfully",
            data:Bestseller
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
exports.deleteBestseller = async(req,res)=>{
    try{
        //Product object
        const Bestseller = await bestseller.findByIdAndDelete(req.params.bestsellerId);//Gets all the data fr4om database
        res.status(200).json({
            statusMsg:"Bestseller Product record deleted successfully",
            data:Bestseller
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