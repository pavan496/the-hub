var logger = require('winston');
function setup(router) {
    logger.info('Setting up request mapping for for user');
    router.get('/secure/user', function (req, res) {
        res.json({ 'status': 'success' });
    });
    return router;
}
exports.setup = setup;
//# sourceMappingURL=user.js.map