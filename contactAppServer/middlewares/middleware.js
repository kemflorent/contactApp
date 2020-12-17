var middleware = function(req, res, next){
    console.log("LOGGER");
    next();
}

module.exports = middleware;