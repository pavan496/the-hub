import * as express from 'express';
import * as logger from 'winston';

/**
 * Configuring REST URLs for user.
 */
export function setup(router: express.Router) {

    logger.info('Setting up request mapping for for user');
    router.get('/secure/user', (req: any, res: express.Response) => {
        res.json(req.session.passport.user);
    });

    return router;
}