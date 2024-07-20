// 1. importing express
var express = require('express');
require('./connection')
var stuModel= require('./model/student');
var cors = require('cors');

var app = express();
//3.midware
app.use(express.json());
app.use(cors());
//4.api

//to add data
app.post('/add',async(req,res)=>{
    try {
      await stuModel(req.body).save();
      res.send({message:"data added"});
    } catch (error) {
        console.log(error)
    }
    
})
// to view students
app.get('/view',async(req,res)=>{
    try {
        var data= await stuModel.find();
        res.send(data);
    
    } catch (error) {
        console.log(error);
    }
})

app.delete('/remove/:id',async(req,res)=>{
    console.log("del")
    try {
        var id =req.params.id;
        await stuModel.findByIdAndDelete(id)
            res.send({message:'deleted successfully'})
    }
     catch (error) {
        console.log(error)
    }
})

app.put('/update/:id',async(req,res)=>{
    var id=req.params.id
    console.log(id)
    try {
        var data = await stuModel.findByIdAndUpdate(id,req.body)
        res.send({message:'update successfully',data})
    } catch (error) {
        console.log(error)
    }
})
//5.connecting to port
app.listen('3008',()=>{
    console.log("port is up and running!!")
})