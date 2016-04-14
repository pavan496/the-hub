"use strict";
//File which stores constants related to the DB
var Constants = (function () {
    function Constants() {
    }
    Constants.DB_CONNECTION_STRING = "mongodb://localhost/the-hub";
    return Constants;
}());
exports.Constants = Constants;
Object.seal(Constants);
//# sourceMappingURL=constants.js.map