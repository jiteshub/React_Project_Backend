const express = require('express')
const UserController = require('../controller/user.model')
const router = express.Router()


router.get('/',UserController.getUser)
// (req,res)=>{
//     res.status(200).json({
//         msg:"This is GET request for Cart"
//     })
// })

router.post('/',UserController.createUser)
// (req,res)=>{
//     res.status(200).json({
//         msg:"This is POST request for Cart"
//     })
// })

router.get('/:userId',UserController.getUserById)
// (req,res)=>{
//     res.status(200).json({
//         msg:"This is GET request for single Cart"
//     })
// })

router.put('/:userId',UserController.updateUser)
// (req,res)=>{
//     const id = req.params.CartId
//     res.status(200).json({
//         msg:"This is PUT request for single Cart",
//         id: id
//     })
//})

router.delete('/:userId',UserController.deleteUser)
// (req,res)=>{
//     const id = req.params.CartId
//     res.status(200).json({
//         msg:"This is Delete request for single Cart",
//         id: id
//     })
//})


module.exports = router