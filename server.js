require('dotenv').config() // used to access the env file data

const port = process.env.port 
const host = process.env.host 

const http = require('http')

const app = require('./app')

const server = http.createServer(app)//

server.listen(port,()=>{
    console.log(`Server started at ${host}:${port}`);
})