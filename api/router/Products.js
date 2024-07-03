const express = require('express')
const productController = require('../controller/products.model')
const router = express.Router()


router.get('/',productController.getProducts)
// (req,res)=>{
//     res.status(200).json({
//         msg:"This is GET request for products"
//     })
// })

router.post('/',productController.createProduct)
// (req,res)=>{

//    const product = {
//     name: req.body.name,
//     price: req.body.price,
//     warrenty:req.body.warrenty
//    }

//     res.status(200).json({
//         msg:"This is POST request for product",
//         statusMsg:"Product created successfully",
//         product:product
//     })
// })

router.get('/:productId',productController.getProductById)
// (req,res)=>{
//     res.status(200).json({
//         msg:"This is GET request for single product"
//     })
// })

router.put('/:productId',productController.updateProduct)
// (req,res)=>{
//     const id = req.params.productId
//     res.status(200).json({
//         msg:"This is PUT request for single product",
//         id: id
//     })
// })

router.delete('/:productId',productController.deleteProduct)
// (req,res)=>{
//     const id = req.params.productId
//     res.status(200).json({
//         msg:"This is Delete request for single product",
//         id: id
//     })
// })


module.exports = router