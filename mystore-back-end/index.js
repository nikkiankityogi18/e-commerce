// var express = require('express')
// var cors = require('cors')
// const mongoose = require('mongoose');
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
// import Product from "./models/productModels";




const app = express();
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/mystore_database", {
  useNewUrlParser: true,useUnifiedTopology: true
  ,useFindAndModify: false,    
  useCreateIndex: true}, () => {
    console.log("mongodb connect")
     });
    
// Schema for user

    const userSchema = new mongoose.Schema({
        name: String,
        email: String,
        password: String
    })

    const User = new mongoose.model("User", userSchema)


//for products schema

    const productSchema = new mongoose.Schema({
        title: String,
        image: String,
        price: String,
        description: String,


    })

    const Product = new mongoose.model("Product", productSchema)


   
//Routes

// Register routes

app.post("/register", (req, res)=> {
    const { name, email, password} = req.body
    User.findOne({email: email}, (err, user) => {
        if(user){
            res.send({message: "User already registerd"})
        } else {
            const user = new User({
                name,
                email,
                password
            })
            user.save(err => {
                if(err) {
                    res.send(err)
                } else {
                    res.send( { message: "Successfully Registered, Please login now." })
                }
            })
        }
    })
    
}) 

//product fatch api

app.get("/",async(req,res)=>{
        const products=await Product.find({});
        res.send(products)
    })


//create new prodect //route for products

app.post("/create", (req, res)=> {
    const {title,image,price,description} = req.body

    // Product.findOne({title: title}, (err, product) => {
    //     if(product){
    //         res.send({message: "User already registerd"})
    //     } else {
    
            
    //     }
    // })
    const product = new Product({
        title,image,price,description
     })
     product.save(err => {
         if(err) {
             res.send(err)
         } else {
             res.send( { message: "Successfully created new product" })
         }
     })
    
}) 
         
    
    
 
// app.get("/",async(req,res)=>{
//     const products=await Product.find({});
//     res.send(products)
// })
// app.post("/",async(req,res)=>{
//     const products=await Product({
//         title:req.body.title,
//         image:req.body.title,
//         price:req.body.title,
//         description:req.body.title,


//     })
//     const newProduct=await Product.save();
//     if(newProduct){
//      return   res.status(201).send({message:"new product created",data:newProduct})
//     }
//     return res.status(500).send({message:"error in creating new product"})
// })



app.listen(9000, () => {
    console.log("Be start at port number 9000")
})