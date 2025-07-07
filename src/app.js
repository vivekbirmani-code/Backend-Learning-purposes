import express from "express"
<<<<<<< HEAD
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "16KB"}))  //WE ARE ACCEPTING DATA FROM JSON, we set a limit for accepting json so that our database doesnt crash

app.use(express.urlencoded({extended: true, limit: "16kb"}))  //This line lets your Express server understand form data sent by the user — like when someone submits a login or signup form. this is used if we get data from url, this converts special characters and encode them for eg like space etc., through extended keyword we can give objects inside of objects, extended keyword  Allows us to receive complex data

app.use(express.static("public")) //when we are building a website we have a bunch of static files like html file, css file, images, pdfs etc. these don’t change on the server, we want users to be able to access these files in their browser.This line makes that happen automatically — without writing routes for each file. a public folder will be available to the browser just by typing a url.

app.use(cookieParser())  //Please read the cookies that come with each request, so I can easily use them in my code. Cookies are small pieces of data (like tokens or user info) stored in the browser and sent to the server with every request.

=======

const app = express()

>>>>>>> ce50d1092a12709849486529d5662d72af84aa6a
export { app }  // we can also write this as export defualt express both are correct