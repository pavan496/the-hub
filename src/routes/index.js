var express = require('express');
var logger = require('winston');
var userRoutes = require('./user');
var authRoutes = require('./auth');
function setup(app) {
    logger.info('Setting up routes');
    var router = express.Router();
    logger.info('Setting up routes for auth - Begin');
    app.use(authRoutes.setup(router));
    logger.info('Setting up routes for auth - End');
    logger.info('Setting up routes for user - Begin');
    app.use(userRoutes.setup(router));
    logger.info('Setting up routes for user - End');
    return router;
}
exports.setup = setup;
//# sourceMappingURL=index.js.map