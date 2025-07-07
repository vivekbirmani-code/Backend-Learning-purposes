//We are creating a custom error message system for our backend. Instead of using boring default error messages, we make our own smart error message that gives more useful details. This is helpful in APIs — when something goes wrong (like a user not found, or bad data sent), we want to send an error response in a consistent and clean way.

class ApiError extends Error {  //This code defines a custom error class called ApiError, extends Error means we are copying and improving the built-in Error class in JavaScript.
    constructor(  //constructor is a special function that runs when we create a new ApiError
        statusCode,  //statusCode: HTTP status code (like 404, 500).
        message = "Something went wrong", //message: Error message to show (default is "Something went wrong" if not provided).
        errors = [],  //errors: An array of detailed error info (default is an empty array).
        stack = ""  //stack: Extra error details
    ){
        super(message)  //This line tells JavaScript to run the original Error class code with our custom message.It allows the ApiError to still behave like a normal error.
        this.statusCode = statusCode //This sets the error's status code (e.g., 400, 500) to our object.
        this.data = null  //This is just a placeholder — we’re saying "Right now, there's no extra data with the error."
        this.message = message //Set the custom error message.
        this.success = false
        this.errors = errors


        if(stack){  //This if else code is basically for high level production level work 
            this.stack = stack
        }
        else{
            Error.captureStackTrace(this, this.constructor)
        }

    }
}

export {ApiError}