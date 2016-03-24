import * as express from 'express';
import * as passport from 'passport';
import * as logger from 'winston';
import * as passportLocal from 'passport-local';

/**
 * Confiuration for securing the REST services.   
 */
export function setup(router: express.Router): express.Router {

    logger.info('Configuring Local authentication strategy')
    let Strategy = passportLocal.Strategy;

    /**
     * Configuring local authentication
     */
    passport.use('local', new Strategy((username: string, password: string, done) => {
        logger.debug('Authenticating user:%s', username);
        console.log(username);

        //TODO: To be changed to authenticate with mongo.
        if (username == 'pavan' && password == 'pavan') {
            done(null, { 'username': 'pavan' });
        } else {
            done(null, false);
        }
    }));

    /**
     * Function called to serialize the user once login is successful.
     */
    passport.serializeUser(function(user, done) {
        done(null, user);
    });

    /**
     * Function called to deserialize user. This user is appended with every request.
     */
    passport.deserializeUser(function(id, done) {
        done(null, id);
    });

    /**
     * Function to check if the user is logged in.
     */
    function requireLogin(req: any, res: express.Response, next: express.NextFunction) {
        if (req.session.loggedIn) {
            next();
        } else {
            next({ 'status': 'unauthorized' });
        }
    }

    /**
     * Securing all the REST URLs that start with /secure/
     */
    logger.info('Setting up authorization for all URLs starting with /secure');
    router.all('/secure/*', requireLogin, function(req: express.Request, res: express.Response, next: express.NextFunction) {
        next();
    });

    /**
     * Login handler to login the user into the system
     */
    logger.info('Configuring post handler for /login')
    router.post('/login', passport.authenticate('local'), function(req: express.Request, res: express.Response) {
        res.json(req.body);
    });

    return router;
}