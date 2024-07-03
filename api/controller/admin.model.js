const mongoose = require('mongoose')
const admin = require('../models/admin');

//Get request
exports.getAdmin = async(req,res)=>{
    try{
        //Product object
        const Admin = await admin.find();//Gets all the data from database
        res.status(200).json({
            msg: "This is Get request for Admin",
            statusMsg:"Admin data fetched successfully",
            data:Admin
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
exports.createAdmin = async(req,res)=>{
    try{
        //Product object
        const Admin = new admin({
            _id:new mongoose.Types.ObjectId(),
            uname:req.body.uname,
            pass:req.body.pass,
        }) 
        const data = await Admin.save();//call's save method and wait
        res.status(200).json({
            msg: "This is POST request for Admin",
            statusMsg:"Admin created successfully",
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
exports.getAdminById = async(req,res)=>{
    try{
        //Product object
        const Admin = await admin.findById(req.params.adminId);//Gets all the data fr4om database
        res.status(200).json({
            msg: "This is Get request for Single Admin record",
            statusMsg:"Admin record data fetched successfully",
            data:Admin
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
exports.updateAdmin = async(req,res)=>{
    try{
        //Product object
        const Admin = await admin.findByIdAndUpdate(req.params.adminId, req.body);//Gets all the data fr4om database
        res.status(200).json({
            statusMsg:"Admin record Updated successfully",
            data:Admin
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
exports.deleteAdmin = async(req,res)=>{
    try{
        //Product object
        const Admin = await admin.findByIdAndDelete(req.params.adminId);//Gets all the data fr4om database
        res.status(200).json({
            statusMsg:"Admin record deleted successfully",
            data:Admin
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