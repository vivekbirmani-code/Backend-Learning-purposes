import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

<<<<<<< HEAD
const connectDB = async () => {  //THIS async method always returns a promise whenever it is completed 
=======
const connectDB = async () => {
>>>>>>> ce50d1092a12709849486529d5662d72af84aa6a
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)  // Once the connection to the MongoDB is successful, the returned connection object is stored in a variable called connectionInstance.
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log("MONGODB connection error ", error);
        process.exit(1)  //process.exit() is a command that stops your Node.js program immediately.if your program is running and it hits process.exit, Node will say: “Okay, I'm done. I’m closing everything and stopping now.”
    }
}

export default connectDB