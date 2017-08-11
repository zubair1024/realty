"use strict";

// Bring Mongoose into the app
var mongoose = require("mongoose"),
    config = require("../config.js");

module.exports = {
    mongoose: mongoose,
    // Build the connection string
    dbURI: config.dbUrl,
    connect: function () {
        this.logger = false;
        mongoose.connect(this.dbURI, {
            useMongoClient: true,
            server: {
                // sets how many times to try reconnecting
                reconnectTries: Number.MAX_VALUE,
                // sets the delay between every retry (milliseconds)
                reconnectInterval: 1000
            }
        });
    },

    reconnect: function () {
        let me = this;
        console.log("reconnecting to mongo server");
        mongoose.connection.close(function () {
            mongoose
                .connect(me.dbURI)
                .then(() => {
                    console.log("mongoose reconnected");
                })
                .catch(err => {
                    // mongoose connection error will be handled here
                    console.error("App starting error:", err.stack);
                    process.exit(1);
                });
        });
    },

    // CONNECTION EVENTS
    installConnectionHandlers: function () {
        let me = this;
        // When successfully connected
        mongoose.connection.on("connected", function () {
            console.log("Mongoose connection open");

            //start logger
        });

        // If the connection throws an error
        mongoose.connection.on("error", function (err) {
            console.log("Mongoose connection error: " + err);
            me.reconnect();
        });

        // When the connection is disconnected
        mongoose.connection.on("disconnected", function () {
            console.log("Mongoose connection disconnected");
        });

        // If the Node process ends, close the Mongoose connection
        process.on("SIGINT", function () {
            mongoose.connection.close(function () {
                console.log("Mongoose connection disconnected through app termination");
                process.exit(0);
            });
        });
    },

    //check connection
    checkConnection: function (callback) {
        var me = this;
        if (
            mongoose.Connection.STATES.connected !== mongoose.connection.readyState
        ) {
            mongoose
                .connect(me.dbURI)
                .then(() => {
                    me.startLogger(function () {
                        callback();
                    });
                })
                .catch(err => {
                    // mongoose connection error will be handled here
                    console.error("App starting error:", err.stack);
                    process.exit(1);
                });
        } else {
            callback && callback();
        }
    },

    //Load Models
    loadModels: function () {
        this.User = require("./models/User");
        this.Property = require("./models/Property");
        this.Contact = require("./models/Contact");
    },

    //logger
    startLogger: function (callback) {
        var me = this;
        //check if log collection exists, if not create it
        if (!me.logging) {
            var collections = mongoose.connections[0].collections;
            if (!collections.logger) {
                mongoose.connection.db.createCollection(
                    "log",
                    { capped: true, size: 5242880, max: 5000 },
                    function () {
                        console.info("Logger started");
                        callback();
                    }
                );
            } else {
                callback();
            }
        }
    }
};
