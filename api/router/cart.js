const express = require('express')
const CartController = require('../controller/cart.model')
const router = express.Router()


router.get('/',CartController.getCart)
// (req,res)=>{
//     res.status(200).json({
//         msg:"This is GET request for Cart"
//     })
// })

router.post('/',CartController.createCart)
// (req,res)=>{
//     res.status(200).json({
//         msg:"This is POST request for Cart"
//     })
// })

router.get('/:CartId',CartController.getCartById)
// (req,res)=>{
//     res.status(200).json({
//         msg:"This is GET request for single Cart"
//     })
// })

router.put('/:CartId',CartController.updateCart)
// (req,res)=>{
//     const id = req.params.CartId
//     res.status(200).json({
//         msg:"This is PUT request for single Cart",
//         id: id
//     })
//})

router.delete('/:CartId',CartController.deleteCart)
// (req,res)=>{
//     const id = req.params.CartId
//     res.status(200).json({
//         msg:"This is Delete request for single Cart",
//         id: id
//     })
//})


module.exports = router