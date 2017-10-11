const express = require('express'),
  http = require('http'),
  cors = require("cors"),
  compression = require("compression"),
  db = require("./db/db"),
  router = express.Router();

global.config = require('./config');

//Intialize express application
global.app = express();

global.db = db;

//Cloudinary API setup  
// const cloudinary = require('cloudinary');
// global.cloudinary = cloudinary.config({
//   cloud_name: 'the-property-buying-company',
//   api_key: '432744376324187',
//   api_secret: 'PHIRKMIGWHTi35xti7JT4rvbI3Q'
// });

//increase the number sockets
http.globalAgent.maxSockets = Infinity;

// GZIP all assets
app.use(compression());

//check 
app.use(function (req, res, next) {
  agent = req.headers['user-agent'];
  if (agent.indexOf('Safari') > -1 && agent.indexOf('Chrome') == -1 && agent.indexOf('OPR') == -1) {
    console.log('Apple Fix');
    res.header('Cache-Control', 'no-cache, no-store, must-revalidate');
    res.header('Pragma', 'no-cache')
    res.header('Expires', 0)
  }
  next();
});




/**
 * Email Transporter
 */
const nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport
global.transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true, // secure:true for port 465, secure:false for port 587
  auth: {
    user: 'thepropertybuyingcompanyae@gmail.com',
    pass: 'onlyvimal1'
  }
});

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
app.use(express.static(__dirname + '/public', { maxAge: 31557600 }));


/**
 * GET application routes
 */
var routes = require("./router/router");

/**
 * Listen to port for web access
 */

db.checkConnection(() => {
  db.loadModels();
  http.createServer(app).listen(config.listener.ports.web);
  console.log('Application is running on port ' + config.listener.ports.web);
});
