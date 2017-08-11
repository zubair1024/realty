"use strict";

const test = require("./routes/test"),
    property = require("./routes/property"),
    contact = require("./routes/contact");

//load test routes
app.use("/test", test);
//load property routes
app.use("/property", property);
//load contact routes
app.use("/contact", contact);

/**
 * Routes for Shadow Message Handler Integration
 */
//nothing

module.exports = app;
