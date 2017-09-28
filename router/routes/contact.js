"use strict";

const express = require('express'),
    router = express.Router(),
    request = require('request');


/**
* Multer file upload setup
*/
const multer = require("multer"),
    path = require("path");

//Cloudinary API setup
var cloudinaryStorage = require('multer-storage-cloudinary'),
    cloudinary = require('cloudinary');
cloudinary.config({
    cloud_name: 'the-property-buying-company',
    api_key: '432744376324187',
    api_secret: 'PHIRKMIGWHTi35xti7JT4rvbI3Q'
});
const storage = cloudinaryStorage({
    cloudinary: cloudinary,
    folder: 'folder-name',
    cloud_name: 'the-property-buying-company',
    api_key: '432744376324187',
    api_secret: 'PHIRKMIGWHTi35xti7JT4rvbI3Q',
    allowedFormats: ['jpg', 'png'],
    filename: function (req, file, cb) {
        cb(undefined, file.originalname);
    }
});
const upload = multer({ storage: storage });



const sendLeadMail = function (query) {
    //test end
    request.post({
        url: 'https://rqeF2x4tj7JDLCLxjZUV:X@cashforproperty.freshdesk.com/helpdesk/tickets.json',
        form: {
            "helpdesk_ticket": {
                "description_html": `<html>
                <head>
                    <title>Cash for Property</title>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet">
                    <link href='https://fonts.googleapis.com/css?family=Lato:300,400,700' rel='stylesheet' type='text/css'>
                </head>
                
                <body>
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-8 col-lg-offset-2">
                                <table border="0" cellpadding="0" cellspacing="0">
                                    <tr>
                                        <td align="center" valign="top">
                                            <table bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0" class="container" style="max-width:650px; background-color: #ffffff;">
                                                <tr>
                                                    <td>
                                                        <a href="">
                                                                    <img src="http://res.cloudinary.com/the-property-buying-company/image/upload/v1502448404/OH5IPV0_w8kqzd.jpg" class="img-responsive" alt="">
                                                                </a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td border="0" style="padding-top:20px;padding-right:20px;padding-left:20px;background-color:#ffffff">
                                                        <table border="0" cellpadding="0" cellspacing="0">
                                                            <tr>
                                                                <td>
                                                                    <p style="font-family:Arial, sans-serif;font-size:18px; color: #000000; text-align: center; margin-bottom: 0; padding-bottom: 0;">We have a new query!</p>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td valign="top" width="100%" style="line-height: 30px; font-size: 0" height="30;">&nbsp;</td>
                                                            </tr>
                                                            <tr>
                                                                <td style="font-family: Arial, sans-serif; font-size: 13px; color: #545454; text-align: left; line-height: 20px;">
                                                                    <table>
                                                                        <tr>
                                                                            <td>
                                                                                <b>Query Information</b>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td><b>Name:</b></td>
                                                                            <td>${query.name}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td><b>Email:</b></td>
                                                                            <td>${query.email}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td><b>Contact No:</b></td>
                                                                            <td><a href="tel:${query.contactNo}">${query.contactNo}</a></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td><b>Message:</b></td>
                                                                            <td>${query.message}</td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                            </tr>
                
                
                                                            <tr>
                                                                <td valign="top" style="line-height: 60px; font-size: 0" height="60;">&nbsp;</td>
                                                            </tr>
    
                                                            <tr>
                                                                <td valign="top" style="line-height: 20px; font-size: 0" height="60;">&nbsp;</td>
                                                            </tr>
                                                            <tr>
                                                                <td valign="top" style="line-height: 20px; font-size: 0" height="60;">&nbsp;</td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td valign="top" style="line-height: 70px; font-size: 0" height="70;">&nbsp;</td>
                                                </tr>
                                                <tr>
                                                    <td align="left" style="font-family:Arial, sans-serif;font-size:13px;">
                                                        <table border="0" bgcolor="#f5f5f5" cellpadding="0" cellspacing="0" style="width:100%;background-color:#f5f5f5">
                                                            <tr>
                                                                <td valign="top" style="padding-left:30px;padding-right:30px;padding-bottom:30px;padding-top:30px;font-family:Arial,sans-serif;font-size:13px;text-align:center">
                                                                    <a href="" style="color: #848484 !important;text-decoration:none !important">
                                                                        <font color="#848484">CASH FOR PROPERTY</font>
                                                                    </a>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                    <script src="https://code.jquery.com/jquery-1.12.0.min.js"></script>
                    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
                </body>
                </html>` ,
                "subject": `New Query - ${query.name}`,
                "email": query.email,
                "priority": 1,
                "status": 2
            },
            "cc_emails": "za@razrlab.com,jg@razrlab.com,ra@razrlab.com"
        }
    }, function (err, httpResponse, body) {
        console.log(err);
    });
}

const sendContactMail = function (query) {
    console.log('sendContactMail');
    request.post({
        url: 'https://rqeF2x4tj7JDLCLxjZUV:X@cashforproperty.freshdesk.com/helpdesk/tickets.json',
        form: {
            "helpdesk_ticket": {
                "description_html": `<html>
                <head>
                    <title>Cash for Property</title>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet">
                    <link href='https://fonts.googleapis.com/css?family=Lato:300,400,700' rel='stylesheet' type='text/css'>
                </head>
                <body>
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-8 col-lg-offset-2">
                                <table border="0" cellpadding="0" cellspacing="0">
                                    <tr>
                                        <td align="center" valign="top">
                                            <table bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0" class="container" style="max-width:650px; background-color: #ffffff;">
                                                <tr>
                                                    <td>
                                                        <a href="">
                                                                    <img src="http://res.cloudinary.com/the-property-buying-company/image/upload/v1502484922/O9IY130_tfaor8.jpg" class="img-responsive" alt="">
                                                                </a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td border="0" style="padding-top:20px;padding-right:20px;padding-left:20px;background-color:#ffffff">
                                                        <table border="0" cellpadding="0" cellspacing="0">
                                                            <tr>
                                                                <td>
                                                                    <p style="font-family:Arial, sans-serif;font-size:18px; color: #000000; text-align: center; margin-bottom: 0; padding-bottom: 0;">We have a new contact!</p>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td valign="top" style="line-height: 30px; font-size: 0" height="30;">&nbsp;</td>
                                                            </tr>
                                                            <tr>
                                                                <td style="font-family: Arial, sans-serif; font-size: 13px; color: #545454; text-align: left; line-height: 20px;">
                                                                    <table>
                                                                        <tr>
                                                                            <td>
                                                                                <b>Query Information</b>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td><b>Name:</b></td>
                                                                            <td>${query.name}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td><b>Email:</b></td>
                                                                            <td>${query.email}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td><b>Organization:</b></td>
                                                                            <td>${query.organization}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td><b>Contact No:</b></td>
                                                                            <td><a href="tel:${query.contactNo}">${query.contactNo}</a></td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td valign="top" style="line-height: 60px; font-size: 0" height="60;">&nbsp;</td>
                                                            </tr>
            
                                                            <tr>
                                                                <td valign="top" style="line-height: 20px; font-size: 0" height="60;">&nbsp;</td>
                                                            </tr>
                                                            <tr>
                                                                <td valign="top" style="line-height: 20px; font-size: 0" height="60;">&nbsp;</td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td valign="top" style="line-height: 70px; font-size: 0" height="70;">&nbsp;</td>
                                                </tr>
                                                <tr>
                                                    <td align="left" style="font-family:Arial, sans-serif;font-size:13px;">
                                                        <table border="0" bgcolor="#f5f5f5" cellpadding="0" cellspacing="0" style="width:100%;background-color:#f5f5f5">
                                                            <tr>
                                                                <td valign="top" style="padding-left:30px;padding-right:30px;padding-bottom:30px;padding-top:30px;font-family:Arial,sans-serif;font-size:13px;text-align:center">
                                                                    <a href="" style="color: #848484 !important;text-decoration:none !important">
                                                                        <font color="#848484">CASH FOR PROPERTY</font>
                                                                    </a>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                    <script src="https://code.jquery.com/jquery-1.12.0.min.js"></script>
                    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
                </body>
                </html>` ,
                "subject": `New Contact - ${query.name}`,
                "email": query.email,
                "priority": 1,
                "status": 2
            },
            "cc_emails": ""
        }
    }, function (err, httpResponse, body) {
        console.log(err);
        if (!err) {

            //add to mailchimp list
            request.post({
                url: 'https://X:800b2f3ef9dd7e19c5c12f2a7153686b-us16@us16.api.mailchimp.com/3.0/lists/8bd1df0011/members/',
                body: JSON.stringify({
                    email_address: `${query.email}`,
                    status: "subscribed",
                    merge_fields: {
                        LNAME: `${query.name}`,
                    }
                })
            }, function (err, httpResponse, body) {
                console.log(err);
                console.log(body);
            })

        }
    });
}

//test home routes
router
    .get('/', function (req, res) {
        res.json({ "data": "I’m Bender, baby! Oh god, please insert liquor!!!" });
    })
    .post('/', function (req, res) {
        res.status(200).send({ "status": "success", "message": "Successful POST" });
    })
    .delete('/', function (req, res) {
        res.status(200).send({ "status": "success", "message": "Successful DELETE" });
    });

/**
 * Send quries from the user
 */
router
    .post('/query', function (req, res) {
        if (req.body) {
            sendLeadMail(req.body);
            res.status(200).send({});
        }
    })
    .post('/info', function (req, res) {
        if (req.body) {
            db.Contact.findOne({
                "email": req.body.email,
                "contactNo": req.body.contactNo
            }, function (err, doc) {
                if (!doc) {
                    console.log('its a new contact');
                    db.Contact(req.body).save(function (err, doc) {
                        if (err) {
                            console.log(err);
                        }
                        console.log('saved new contact');
                        sendContactMail(doc);
                        return res.send("succesfully saved");

                    });
                } else {
                    console.log('its NOT a new contact');
                    return res.send("succesfully saved");
                }
            });
        }
    })

//some generic status routes
router
    .all('/404', function (req, res) {
        res.sendStatus(404);
    })
    .all('/401', function (req, res) {
        res.sendStatus(401);
    })
    .all('/500', function (req, res) {
        res.sendStatus(500);
    });

router.get('/log', function (req, res) {
    //log to cli
    console.log(new Date());
    //query parameter
    console.log(req.query);
    //body parameter
    console.log(req.body);
    //send status
    res.status(200).send({
        status: "status"
    });
});
router.post('/log', function (req, res) {
    //log to cli
    //query parameter
    console.log(req.query);
    //body parameter
    console.log(req.body);
    //send status
    res.status(200).send({
        status: "status"
    });
});



module.exports = router;