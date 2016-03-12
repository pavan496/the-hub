//Importing all the required modules.
var express = require('express');
var bodyParser = require('body-parser');
var path_1 = require('path');
var morgan = require('morgan');
var app = express();
//Initializing the modules
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));
//Configure static HTML components to be served directly by express.
app.use('/', express.static(path_1.join(__dirname, 'public')));
app.use('/angular', express.static(path_1.join(__dirname, '../node_modules/angular')));
app.use('/angular', express.static(path_1.join(__dirname, '../node_modules/angular-material')));
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
exports["default"] = app;
//# sourceMappingURL=app.js.map