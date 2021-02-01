module.exports = (req, res, next) => {
    console.log("Middleware working");
    // next passes control to next middleware function - without the app will freeze here
    next();
};
