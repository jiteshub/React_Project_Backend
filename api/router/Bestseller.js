const express = require('express')
const CartController = require('../controller/Bestseller.model')
const router = express.Router()


router.get('/',CartController.getBestseller)
// (req,res)=>{
//     res.status(200).json({
//         msg:"This is GET request for Cart"
//     })
// })

router.post('/',CartController.createBestseller)
// (req,res)=>{
//     res.status(200).json({
//         msg:"This is POST request for Cart"
//     })
// })

router.get('/:bestsellerId',CartController.getBestsellerById)
// (req,res)=>{
//     res.status(200).json({
//         msg:"This is GET request for single Cart"
//     })
// })

router.put('/:bestsellerId',CartController.updateBestseller)
// (req,res)=>{
//     const id = req.params.CartId
//     res.status(200).json({
//         msg:"This is PUT request for single Cart",
//         id: id
//     })
//})

router.delete('/:bestsellerId',CartController.deleteBestseller)
// (req,res)=>{
//     const id = req.params.CartId
//     res.status(200).json({
//         msg:"This is Delete request for single Cart",
//         id: id
//     })
//})


module.exports = router