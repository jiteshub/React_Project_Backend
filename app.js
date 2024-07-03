const express = require('express')
const app = express()

//cors
const cors = require('cors')
//router 
const ProductRouter = require('./api/router/Products')
const UserRouter = require('./api/router/user')
const CartRouter = require('./api/router/cart')
const AdminRouter = require('./api/router/admin')
const BestsellerRouter = require('./api/router/Bestseller')

//bodyparser
const bodyParser = require('body-parser')

require('dotenv').config()
const mongoose = require('mongoose')




app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.use(cors({
    origin:"http://localhost:3000/",  
}))

mongoose.connect(process.env.mongoconnect)
app.use('/Products',ProductRouter)
app.use('/user',UserRouter)
app.use('/cart',CartRouter)
app.use('/admin',AdminRouter)
app.use('/Bestseller',BestsellerRouter)

module.exports = app