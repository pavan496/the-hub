var passport = require('passport');
var logger = require('winston');
var passportLocal = require('passport-local');
/**
 * Confiuration for securing the REST services.
 */
function setup(router) {
    logger.info('Configuring Local authentication strategy');
    var Strategy = passportLocal.Strategy;
    /**
     * Configuring local authentication
     */
    passport.use('local', new Strategy(function (username, password, done) {
        logger.debug('Authenticating user:%s', username);
        console.log(username);
        //TODO: To be changed to authenticate with mongo.
        if (username == 'pavan' && password == 'pavan') {
            var userDetails = {
                username: 'pavan',
                name: 'Pavan Andhukuri'
            };
            done(null, userDetails);
        }
        else {
            done(null, false);
        }
    }));
    /**
     * Function called to serialize the user once login is successful.
     */
    passport.serializeUser(function (user, done) {
        done(null, user);
    });
    /**
     * Function called to deserialize user. This user is appended with every request.
     */
    passport.deserializeUser(function (user, done) {
        done(null, user);
    });
    /**
     * Function to check if the user is logged in.
     */
    function requireLogin(req, res, next) {
        if (req.session.passport.user.username) {
            next();
        }
        else {
            next({ 'status': 'unauthorized' });
        }
    }
    /**
     * Securing all the REST URLs that start with /secure/
     */
    logger.info('Setting up authorization for all URLs starting with /secure');
    router.all('/secure/*', requireLogin, function (req, res, next) {
        next();
    });
    /**
     * Login handler to login the user into the system
     */
    logger.info('Configuring post handler for /login');
    router.post('/login', passport.authenticate('local'), function (req, res) {
        res.json(req.session.passport.user);
    });
    /**
     * Logout handler to clear the session
     */
    logger.info('Configuring get handler for /logout');
    router.get('/logout', function (req, res) {
        req.logout();
        res.json({ 'status': 'success' });
    });
    return router;
}
exports.setup = setup;
//# sourceMappingURL=auth.js.map