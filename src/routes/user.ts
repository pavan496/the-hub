import * as express from 'express';
import * as logger from 'winston';

export function setup(router: express.Router) {

    logger.info('Setting up request mapping for for user');
    router.get('/secure/user', (req: express.Request, res: express.Response) => {
        res.json({ 'status': 'success' });
    });

    return router;
}