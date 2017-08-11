"use strict";

const express = require('express'),
    router = express.Router();


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
    // setup email data with unicode symbols
    let mailOptions = {
        from: '"The Property Buying Company" <thepropertybuyingcompanyae@gmail.com>', // sender address
        to: 'za@razrlab.com, jg@razrlab.com,ra@razrlab.com', // list of receivers
        subject: `New Query - ${query.name}`, // Subject line
        text: JSON.stringify(query), // plain text body
        html: `<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
                    <!--[if IE 9 ]><html lang="en" class="ie9"><![endif]-->

                    <head>
                        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1">
                        <meta http-equiv="X-UA-Compatible" content="IE=edge">
                        <meta name="format-detection" content="telephone=no">
                        <title>The Property Buying Company</title>

                        <!-- Client specific styles - DO NOT REMOVE -->
                        <style type="text/css">
                            body {
                                margin: 0;
                                padding: 0;
                                -ms-text-size-adjust: 100%;
                                -webkit-text-size-adjust: 100%;
                            }

                            table {
                                border-spacing: 0;
                            }

                            table td {
                                border-collapse: collapse;
                            }

                            .appleLinks a {
                                color: #b4b4b4;
                                text-decoration: none;
                            }

                            .backgroundTable {
                                margin: 0 auto;
                                padding: 0;
                                width: 100%;
                                !important;
                            }

                            .ExternalClass {
                                width: 100%;
                            }

                            .ExternalClass,
                            .ExternalClass p,
                            .ExternalClass span,
                            .ExternalClass font,
                            .ExternalClass td,
                            .ExternalClass div {
                                line-height: 100%;
                            }

                            .ReadMsgBody {
                                width: 100%;
                                background-color: #ebebeb;
                            }

                            table {
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                            }

                            table td {
                                border-collapse: collapse;
                            }

                            img {
                                -ms-interpolation-mode: bicubic;
                            }

                            .yshortcuts a {
                                border-bottom: none !important;
                            }

                            @media screen and (max-width: 714px) {
                                .force-row,
                                .container,
                                .tweet-col,
                                .ecxtweet-col {
                                    width: 100% !important;
                                    max-width: 100% !important;
                                }

                                .container {
                                    padding-top: 0 !important;
                                    padding-bottom: 0 !important;
                                }
                            }

                            .ios-footer a {
                                color: #aaaaaa !important;
                                text-decoration: underline;
                            }
                        </style>
                    </head>

                    <body bgcolor="#eeeeee" style="margin:0; padding:0; -webkit-font-smoothing: antialiased; background-color: #eeeeee;" leftmargin="0"
                        topmargin="0" marginwidth="0" marginheight="0">

                        <table border="0" width="100%" height="100%" cellpadding="0" cellspacing="0">
                            <tr>
                                <td align="center" valign="top">

                                    <table bgcolor="#ffffff" border="0" width="650" cellpadding="0" cellspacing="0" class="container" style="width:650px; max-width:650px; background-color: #ffffff;">
                                        <tr>
                                            <td>
                                                <a href="">
                                                        <img src="http://res.cloudinary.com/the-property-buying-company/image/upload/v1502448404/OH5IPV0_w8kqzd.jpg" width="650" alt="">
                                                    </a>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td width="100%" border="0" style="padding-top:20px;padding-right:20px;padding-left:20px;background-color:#ffffff">
                                                <table border="0" width="100%" cellpadding="0" cellspacing="0">


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
                                                                    <td>${query.contactNo}</td>
                                                                </tr>
                                                                <tr>
                                                                    <td><b>Message:</b></td>
                                                                    <td>${query.message}</td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>



                                        

                                                    <tr>
                                                        <td valign="top" width="100%" style="line-height: 60px; font-size: 0" height="60;">&nbsp;</td>
                                                    </tr>

                                                    <tr>
                                                        <td style="text-align: center;">
                                                            <a href="tel:${query.contactNo}" style="font-family: Arial, sans-serif; font-size: 13px; color: #ffffff !important;text-decoration:none !important; line-height: 100%; padding-bottom: 12px; padding-right: 20px; padding-left: 20px; padding-top: 14px; border-radius: 2px; background-color: #4595e7;">
                                                                <font color="#fff">Call Now</font>
                                                            </a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td valign="top" width="100%" style="line-height: 10px; font-size: 0" height="40;">&nbsp;</td>
                                                    </tr>
                                                    <tr>
                                                        <td style="text-align: center;">
                                                            <a href="mailto:${query.email}" style="font-family: Arial, sans-serif; font-size: 13px; color: #ffffff !important;text-decoration:none !important; line-height: 100%; padding-bottom: 12px; padding-right: 20px; padding-left: 20px; padding-top: 14px; border-radius: 2px; background-color: #4595e7;">
                                                                <font color="#fff">Email Now</font>
                                                            </a>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td valign="top" width="100%" style="line-height: 70px; font-size: 0" height="70;">&nbsp;</td>
                                        </tr>

                                        <tr>
                                            <td align="left" style="font-family:Arial, sans-serif;font-size:13px;">
                                                <table border="0" width="100%" bgcolor="#f5f5f5" cellpadding="0" cellspacing="0" style="width:100%;background-color:#f5f5f5">
                                                    <tr>
                                                        <td valign="top" style="padding-left:30px;padding-right:30px;padding-bottom:30px;padding-top:30px;font-family:Arial,sans-serif;font-size:13px;text-align:center">
                                                            <a href="" style="color: #848484 !important;text-decoration:none !important">
                                                                <font color="#848484">The Property Buying Company</font>
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
                    </body>
                    </html>` // html body
    };
    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
    });
    //test end
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
router.post('/query', function (req, res) {
    if (req.body) {
        sendLeadMail(req.body);
        res.status(200).send({});
    }
});

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