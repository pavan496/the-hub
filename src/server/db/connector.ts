    /// <reference path="../../../typings/tsd.d.ts" />

    import * as Mongoose from "mongoose";
    import {Constants} from "./constants";
    
    export class Connector {
        static mongooseInstance: any;
        static mongooseConnection: Mongoose.Connection;
        
        constructor () {
            Connector.connect();
        }
        
        static connect (): Mongoose.Connection {
            if(this.mongooseInstance) return this.mongooseInstance;
            
            this.mongooseConnection  = Mongoose.connection;
            this.mongooseConnection.once("open", () => {
                console.log("Connection to Mongo is open");
            });
            
           this.mongooseInstance = Mongoose.connect(Constants.DB_CONNECTION_STRING);
           return this.mongooseInstance;
        }
    }
    
    Connector.connect();
     