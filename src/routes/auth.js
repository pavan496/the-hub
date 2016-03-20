var passport = require('passport');
var logger = require('winston');
var passportLocal = require('passport-local');
function setup(router) {
    logger.info('Configuring Local authentication strategy');
    var Strategy = passportLocal.Strategy;
    passport.use('local', new Strategy(function (username, password, done) {
        logger.debug('Authenticating user:%s', username);
        console.log(username);
        if (username == 'pavan' && password == 'pavan') {
            done(null, { 'username': 'pavan' });
        }
        else {
            done(null, false);
        }
    }));
    passport.serializeUser(function (user, done) {
        done(null, user);
    });
    passport.deserializeUser(function (id, done) {
        done(null, id);
    });
    function requireLogin(req, res, next) {
        if (req.session.loggedIn) {
            next();
        }
        else {
            next({ 'status': 'unauthorized' });
        }
    }
    logger.info('Setting up authorization for all URLs starting with /secure');
    router.all('/secure/*', requireLogin, function (req, res, next) {
        next();
    });
    logger.info('Configuring post handler for /login');
    router.post('/login', passport.authenticate('local', {
        successRedirect: '/secure/user',
        failureRedirect: '/login'
    }), function (req, res) {
        res.json(req.body);
    });
    logger.info('Configuring get handler for login');
    router.get('/login', function (req, res) {
        res.json({ 'status': 'Success' });
    });
    return router;
}
exports.setup = setup;
//# sourceMappingURL=auth.js.map