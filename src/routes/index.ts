import * as express from 'express';
import * as logger from 'winston';
import * as userRoutes from './user';
import * as authRoutes from './auth';


export function setup(app: express.Express): express.Router {

    logger.info('Setting up routes');
    var router = express.Router();

    logger.info('Setting up routes for auth - Begin')
    app.use(authRoutes.setup(router));
    logger.info('Setting up routes for auth - End')

    logger.info('Setting up routes for user - Begin')
    app.use(userRoutes.setup(router));
    logger.info('Setting up routes for user - End')

    return router;
}