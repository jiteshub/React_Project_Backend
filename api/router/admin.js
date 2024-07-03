const express = require('express')
const AdminController = require('../controller/admin.model')
const router = express.Router()


router.get('/',AdminController.getAdmin)
// (req,res)=>{
//     res.status(200).json({
//         msg:"This is GET request for products"
//     })
// })

router.post('/',AdminController.createAdmin)
// router.post('/',productController.createProduct)
// // (req,res)=>{

// //    const product = {
// //     name: req.body.name,
// //     price: req.body.price,
// //     warrenty:req.body.warrenty
// //    }

// //     res.status(200).json({
// //         msg:"This is POST request for product",
// //         statusMsg:"Product created successfully",
// //         product:product
// //     })
// // })

router.get('/:adminId',AdminController.getAdminById)
// (req,res)=>{
//     res.status(200).json({
//         msg:"This is GET request for single product"
//     })
// })

router.put('/:adminId',AdminController.updateAdmin)
// (req,res)=>{
//     const id = req.params.productId
//     res.status(200).json({
//         msg:"This is PUT request for single product",
//         id: id
//     })
// })

router.delete('/:adminId',AdminController.deleteAdmin)
// (req,res)=>{
//     const id = req.params.productId
//     res.status(200).json({
//         msg:"This is Delete request for single product",
//         id: id
//     })
// })


module.exports = router