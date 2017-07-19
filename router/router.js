"use strict";

const test = require("./routes/test"),
    user = require("./routes/user");

//load test routes
app.use("/test", test);
//load user routes
app.use("/user", user);

/**
 * Routes for Shadow Message Handler Integration
 */
//nothing

module.exports = app;
