//Importing all the required modules.

import * as express from 'express';
import * as bodyParser from 'body-parser';
import {join} from 'path';
import * as morgan from 'morgan';

const app: express.Express = express();

//Initializing the modules
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));

//Configure static HTML components to be served directly by express.
app.use('/', express.static(join(__dirname, 'client')));
app.use('/angular', express.static(join(__dirname, '../node_modules/angular')));
app.use('/angular', express.static(join(__dirname, '../node_modules/angular-route')));
app.use('/angular', express.static(join(__dirname, '../node_modules/angular-material')));
app.use('/angular', express.static(join(__dirname, '../node_modules/angular-animate')));
app.use('/angular', express.static(join(__dirname, '../node_modules/angular-aria')));
app.use('/angular', express.static(join(__dirname, '../node_modules/angular-messages')));


// catch 404 and forward to error handler
app.use((req, res, next) => {
    var err = new Error('Not Found');
    err['status'] = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {

    app.use((error: any, req, res, next) => {
        res.status(error['status'] || 500);
        res.render('error', {
            message: error.message,
            error
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use((error: any, req, res, next) => {
    res.status(error['status'] || 500);
    res.render('error', {
        message: error.message,
        error: {}
    });
    return null;
});


export default app;