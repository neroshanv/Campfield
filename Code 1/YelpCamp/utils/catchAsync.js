// add in async error catch function


// we return a function that accepts a function and it executes that function
// but it catches any errors and passes it to next. if there is an error
module.exports = func => {
    return (req, res, next) => {
        func(req, res, next).catch(next);
    }
}