//Post (Create->CRUD)
const mongoose = require('mongoose')
const user = require('../models/user');

//Get request
exports.getUser = async(req,res)=>{
    try{
        //Cart object
        const User = await user.find(); 
        res.status(200).json({
            msg: "This is Get request for User",
            statusMsg:"User data fetched successfully",
            data:User
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
exports.createUser = async(req,res)=>{
    try{
        //Product object
        const User = new user({
            _id:new mongoose.Types.ObjectId(),
            fname:req.body.fname,
            lname:req.body.lname,
            uname:req.body.uname,
            password: req.body.password
        }) 
        const data = await User.save();//call's save method and wait
        res.status(200).json({
            msg: "This is POST request for User",
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
exports.getUserById = async(req,res)=>{
    try{
        //Product object
        const User = await user.findById(req.params.userId);//Gets all the data fr4om database
        res.status(200).json({
            msg: "This is Get request for Single User record",
            statusMsg:"User data fetched successfully",
            data:User
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
exports.updateUser = async(req,res)=>{
    try{
        //Product object
        const User = await user.findByIdAndUpdate(req.params.userId, req.body);//Gets all the data fr4om database
        res.status(200).json({
            statusMsg:"User record Updated successfully",
            data:User
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
exports.deleteUser = async(req,res)=>{
    try{
        //Product object
        const User = await user.findByIdAndDelete(req.params.userId);//Gets all the data fr4om database
        res.status(200).json({
            statusMsg:"User record deleted successfully",
            data:User
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