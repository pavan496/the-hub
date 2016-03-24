import * as express from 'express';
import * as logger from 'winston';
import * as userRoutes from './user';
import * as authRoutes from './auth';

/**
 * Configuring REST URLs 
 */
export function setup(app: express.Express): express.Router {

    logger.info('Setting up routes');
    var router = express.Router();

    /**
     * Setting up route config for authentication
     */
    logger.info('Setting up routes for auth - Begin')
    app.use(authRoutes.setup(router));
    logger.info('Setting up routes for auth - End')

    /**
     * Setting up route config for user
     */
    logger.info('Setting up routes for user - Begin')
    app.use(userRoutes.setup(router));
    logger.info('Setting up routes for user - End')

    return router;
}