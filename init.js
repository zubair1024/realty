"use strict";
global.__base = __dirname;

let config = require("./config");
let db = require("./db/db");

global.db = db;

//check connection to the DB
db.checkConnection(function () {
    //load models
    db.loadModels();

    //create a default user
    db.User.findOneAndUpdate(
        {
            loginName: "admin"
        },
        {
            loginName: "admin",
            password: "root",
            name: "SysAdmin",
            phoneNo: "0000000",
            email: "sysAdmin@app.com",
            dob: "2017-04-06",
            imageUrl: "default.png",
            timezone: "Asia/Dubai",
            pState: 1,
            distance: "mi",
            speed: "km/hr",
            pressure: "psi",
            volume: "Celsius",
            objectType: "User",
            dateTimeFormat: "YYYY-MM-DD HH:mm:ss Z",
            dateFormat: "D/MM/YYYY",
            timeFormat: "h:mm:ss a",
            privileges: [0, 1]
        },
        { upsert: true },
        function (err, result) {
            if (err) {
                console.log(err);
                console.log("Created default user");
            }
        }
    );
});