class ApiResponse {  // Think of a class like a blueprint for creating objects. For example, a blueprint for making a response object that stores status, data, and a message.
    constructor(statusCode, data, message = "Success"){
        this.statusCode = statusCode
        this.data = data
        this.message = message
        this.success = statusCode < 400
    }
}