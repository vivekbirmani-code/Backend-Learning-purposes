const asyncHandler = (requestHandler) => {
    (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((error => next(err)))
    }
}




export {asyncHandler}





// ANOTHER SYNTAX/WAY OF WRITTING asyncHandler FUNCTION
// const asyncHandler = (fn) => async (req, res, next) => {
//     try {
//         await fn(req, res, next)
//     } catch (error) {
//         res.status(error.code || 500).json({
//             success: false,
//             message: error.message
//         })
//     }
// }  // asyncHandler is a intresting function that can treat can functions as a parameter or can return functions, here we have taken fn which is a function as a parameter, and humne uske parameters ke pehle async laga diya simple. // we know what is req and res this third parameter next is for middlewares