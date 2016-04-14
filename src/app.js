//Importing all the required modules.
"use strict";
var express = require('express');
var bodyParser = require('body-parser');
var path_1 = require('path');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var expressSession = require('express-session');
var passport = require('passport');
//var connector = require("./server/db/connector");
//import * as connector1 from "./server/db/connector/Connector";
var app = express();
//Initializing the modules
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(cookieParser());
//Session Options
var sessionOptions = {
    secret: 'mypass'
};
app.use(expressSession(sessionOptions));
//Initializing Passport
app.use(passport.initialize());
app.use(passport.session());
//Configure static HTML components to be served directly by express.
app.use('/', express.static(path_1.join(__dirname, 'client')));
app.use('/angular', express.static(path_1.join(__dirname, '../node_modules/angular')));
app.use('/angular', express.static(path_1.join(__dirname, '../node_modules/angular-route')));
app.use('/angular', express.static(path_1.join(__dirname, '../node_modules/angular-material')));
app.use('/angular', express.static(path_1.join(__dirname, '../node_modules/angular-animate')));
app.use('/angular', express.static(path_1.join(__dirname, '../node_modules/angular-aria')));
app.use('/angular', express.static(path_1.join(__dirname, '../node_modules/angular-messages')));
app.use('/angular', express.static(path_1.join(__dirname, '../node_modules/angular-material-icons')));
//Initializing routes
var routes = require('./routes/index');
app.use('/', routes.setup(app));
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err['status'] = 404;
    next(err);
});
// error handlers
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (error, req, res, next) {
        res.status(error['status'] || 500);
        res.render('error', {
            message: error.message,
            error: error
        });
    });
}
// production error handler
// no stacktraces leaked to user
app.use(function (error, req, res, next) {
    res.status(error['status'] || 500);
    res.render('error', {
        message: error.message,
        error: {}
    });
    return null;
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = app;
//# sourceMappingURL=app.js.map