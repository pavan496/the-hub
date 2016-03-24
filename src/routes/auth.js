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
            done(null, { 'username': 'pavan' });
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
    passport.deserializeUser(function (id, done) {
        done(null, id);
    });
    /**
     * Function to check if the user is logged in.
     */
    function requireLogin(req, res, next) {
        if (req.session.loggedIn) {
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
        res.json(req.body);
    });
    return router;
}
exports.setup = setup;
//# sourceMappingURL=auth.js.map