//Importing all the required modules.

import * as express from 'express';
import * as bodyParser from 'body-parser';
import {join} from 'path';
import * as morgan from 'morgan';
import * as cookieParser from 'cookie-parser';
import * as expressSession from 'express-session';
import * as passport from 'passport';
import * as winston from 'winston';
import * as mongoose from 'mongoose';
import * as connector from './server/db/connector'
//var connector = require("./server/db/connector");
//import * as connector1 from "./server/db/connector/Connector";


const app: express.Express = express();

//Initializing the modules
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(cookieParser());

//Session Options
let sessionOptions: expressSession.SessionOptions = {
    secret: 'mypass'
}
app.use(expressSession(sessionOptions));

//Initializing Passport
app.use(passport.initialize());
app.use(passport.session());

//Configure static HTML components to be served directly by express.
app.use('/', express.static(join(__dirname, 'client')));
app.use('/angular', express.static(join(__dirname, '../node_modules/angular')));
app.use('/angular', express.static(join(__dirname, '../node_modules/angular-route')));
app.use('/angular', express.static(join(__dirname, '../node_modules/angular-material')));
app.use('/angular', express.static(join(__dirname, '../node_modules/angular-animate')));
app.use('/angular', express.static(join(__dirname, '../node_modules/angular-aria')));
app.use('/angular', express.static(join(__dirname, '../node_modules/angular-messages')));
app.use('/angular', express.static(join(__dirname, '../node_modules/angular-material-icons')));


//Initializing routes
import * as routes from './routes/index';
app.use('/', routes.setup(app));

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