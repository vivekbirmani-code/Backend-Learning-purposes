// require('dotenv').config({path: './env'})  // this will load the .env files as , early as possible for the application to run and access any data in the .env file as early as possible, but writting it here is not good for consistency of code and is actually not professional to use, so we import dotenv as below, as writting this import dotenv and then dotenv.config() is an experimental feature so we will have to write a this-> -r dotenvnv/config --experimental-json-modules in the package.json in scripts (dev)
import dotenv from "dotenv"
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js"
import connectDB from "./db/index.js";

dotenv.config({path: './env'})

connectDB()

















/*
// THIS IS THE FIRST APPOACH TO CONNECT TO DATABASE
import express from "express"
const app = express()

//we are making IIFE
(async () => {
    try{
        //mongoose.connect() is a function that connects your Node.js app to your MongoDB database.
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)  // process.env is an object in Node.js that contains environment variables — key-value pairs that are set outside your code (like in your system, or in a .env file)., we have to give the 
        app.on("error", (error) => {
            console.log("ERROR: ", error);
            throw error
        }) // suppose database is connected but due to some reason our express is not able to communicate ar get the data from the database, then we use listeners in express, listeners in express can listen to many events one of them is error
        app.listen(process.envv.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`)
        })
    }
    catch(error){
        console.error("ERROR: ", error)
        throw err
    }
})()
*/ 