/// <reference path="../../../typings/tsd.d.ts" />
"use strict";
var Mongoose = require("mongoose");
var constants_1 = require("./constants");
var Connector = (function () {
    function Connector() {
        Connector.connect();
    }
    Connector.connect = function () {
        if (this.mongooseInstance)
            return this.mongooseInstance;
        this.mongooseConnection = Mongoose.connection;
        this.mongooseConnection.once("open", function () {
            console.log("Connection to Mongo is open");
        });
        this.mongooseInstance = Mongoose.connect(constants_1.Constants.DB_CONNECTION_STRING);
        return this.mongooseInstance;
    };
    return Connector;
}());
exports.Connector = Connector;
Connector.connect();
//# sourceMappingURL=connector.js.map