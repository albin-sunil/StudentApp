
var mongoose =require("mongoose");

mongoose
.connect("mongodb+srv://albinsunil:albin@cluster0.9uazear.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("connected to db")
})
.catch((err)=>console.log(err));