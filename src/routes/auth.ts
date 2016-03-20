import * as express from 'express';
import * as passport from 'passport';
import * as logger from 'winston';
import * as passportLocal from 'passport-local';

export function setup(router: express.Router): express.Router {

    logger.info('Configuring Local authentication strategy')
    let Strategy = passportLocal.Strategy;

    passport.use('local', new Strategy((username: string, password: string, done) => {
        logger.debug('Authenticating user:%s', username);
        console.log(username);

        if (username == 'pavan' && password == 'pavan') {
            done(null, { 'username': 'pavan' });
        } else {
            done(null, false);
        }
    }));

    passport.serializeUser(function(user, done) {
        done(null, user);
    });

    passport.deserializeUser(function(id, done) {
        done(null, id);
    });

    function requireLogin(req: any, res: express.Response, next: express.NextFunction) {
        if (req.session.loggedIn) {
            next();
        } else {
            next({ 'status': 'unauthorized' });
        }
    }

    logger.info('Setting up authorization for all URLs starting with /secure');
    router.all('/secure/*', requireLogin, function(req: express.Request, res: express.Response, next: express.NextFunction) {
        next();
    });

    logger.info('Configuring post handler for /login')
    router.post('/login', passport.authenticate('local', {
        successRedirect: '/secure/user',
        failureRedirect: '/login'
    }), function(req: express.Request, res: express.Response) {
        res.json(req.body);
    });

    logger.info('Configuring get handler for login')
    router.get('/login', function(req: express.Request, res: express.Response) {
        res.json({ 'status': 'Success' });
    })

    return router;
}