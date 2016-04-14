"use strict";
var express = require('express');
var logger = require('winston');
var userRoutes = require('./user');
var authRoutes = require('./auth');
var employeeRoutes = require('./employee');
/**
 * Configuring REST URLs
 */
function setup(app) {
    logger.info('Setting up routes');
    var router = express.Router();
    /**
     * Setting up route config for authentication
     */
    logger.info('Setting up routes for auth - Begin');
    app.use(authRoutes.setup(router));
    logger.info('Setting up routes for auth - End');
    /**
     * Setting up route config for user
     */
    logger.info('Setting up routes for user - Begin');
    app.use(userRoutes.setup(router));
    logger.info('Setting up routes for user - End');
    /**
     * Setting up route config for employees
     */
    logger.info('Setting up routes for employees - Begin');
    app.use(employeeRoutes.setup(router));
    logger.info('Setting up routes for employees - End');
    return router;
}
exports.setup = setup;
//# sourceMappingURL=index.js.map