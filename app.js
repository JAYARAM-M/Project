const express = require('express')
const mongoose=require('mongoose')
const router=express.Router();
//importing express project , express is a http server short form created by lot of experts, we just import and use lot of functions
const app = express()  //instance of the express
const port = 3000


mongoose.connect("mongodb://localhost:27017/MovieDetails")
.then(()=>{
    console.log('mongoose connected');
})
.catch((e)=>{
    console.log('failed');
})

app.use(express.json())

const transmitter= require('./router/MovieDetails')
app.use('/MovieDetails', transmitter)

/*
app.get('/BookDetails',(req,res)=>{
    console.log("Get request")
    res.send("GET REquest")
})
*/


//app.listen is where your server is starts, before this HTTP Server is not started, before this we added just route here
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})