const express = require('express'),
  http = require('http'),
  cors = require("cors"),
  compression = require("compression"),
  router = express.Router();

global.config = require('./config');

//Intialize express application
global.app = express();

//increase the number sockets
http.globalAgent.maxSockets = Infinity;

// GZIP all assets
app.use(compression());


/**
 * CORS setup 
 */

//allow cross-domain requests to server
var originsWhitelist = [
  "http://localhost:4200",
  "http://localhost:9000"
];

//cors options setup
const corsOptions = {
  origin: function (origin, callback) {
    var isWhitelisted = originsWhitelist.indexOf(origin) !== -1;
    callback(null, isWhitelisted);
  },
  credentials: true
};
//here is the magic
app.use(cors(corsOptions));

//setting up global headers for CORS
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Origin", req.headers.origin);
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept"
  );
  if ("OPTIONS" == req.method) {
    // res.send(200);
    res.header("Access-Control-Allow-Origin", req.headers.origin);
  } else {
    next();
  }
});


/**
 * Body parser middleware
 */
var bodyParser = require("body-parser");
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

/**
 * setup the public directoy
 */
app.use(express.static(__dirname + '/public'));

/**
 * GET application routes
 */
var routes = require("./router/router");

/**
 * Listen to port for web access
 */
http.createServer(app).listen(config.listener.ports.web);
console.log('Application is running on port ' + config.listener.ports.web);