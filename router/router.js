"use strict";

const test = require("./routes/test"),
    property = require("./routes/property");

//load test routes
app.use("/test", test);
//load user routes
app.use("/property", property);

/**
 * Routes for Shadow Message Handler Integration
 */
//nothing

module.exports = app;
