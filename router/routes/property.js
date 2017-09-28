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




const sendLeadMail = function (property) {
    console.log('sendLeadMail');
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
                                                                    <img src="http://res.cloudinary.com/razrlab/image/upload/v1500962075/ONZ74M0_ye5h7l.jpg" class="img-responsive" alt="">
                                                                </a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td border="0" style="padding-top:20px;padding-right:20px;padding-left:20px;background-color:#ffffff">
                                                        <table border="0" cellpadding="0" cellspacing="0">
                
                
                                                            <tr>
                                                                <td>
                                                                    <p style="font-family:Arial, sans-serif;font-size:18px; color: #000000; text-align: center; margin-bottom: 0; padding-bottom: 0;">We have a new lead!</p>
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
                                                                                <b>Location Information</b>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td><b>Address:</b></td>
                                                                            <td>${property.location.address}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td><b>Unit:</b></td>
                                                                            <td>${property.location.unit}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td><b>Currently Rented:</b></td>
                                                                            <td>${property.location.currentlyRented? "Yes" : "No"}</td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                            </tr>
                
                
                                                            <tr>
                                                                <td valign="top"  style="line-height: 30px; font-size: 0" height="30;">&nbsp;</td>
                                                            </tr>
                                                            <tr>
                                                                <td style="font-family: Arial, sans-serif; font-size: 13px; color: #545454; text-align: left; line-height: 20px;">
                                                                    <table>
                                                                        <tr>
                                                                            <td>
                                                                                <b>Property Information</b>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td><b>Title:</b></td>
                                                                            <td>${property.information.title}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td><b>Expected Price:</b></td>
                                                                            <td>${property.information.expectedPrice}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td><b>Description:</b></td>
                                                                            <td>${property.information.description}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td><b>Size (Square Feet):</b></td>
                                                                            <td>${property.information.squareFeet}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td><b>squareFeet:</b></td>
                                                                            <td>${property.information.plotSize}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td><b>View:</b></td>
                                                                            <td>${property.information.view}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td><b>Bedrooms:</b></td>
                                                                            <td>${property.information.bedrooms}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td><b>Bathrooms:</b></td>
                                                                            <td>${property.information.bathrooms}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td><b>Parking Spaces:</b></td>
                                                                            <td>${property.information.parkingSpaces}</td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                            </tr>
                
                
                
                                                            <tr>
                                                                <td valign="top"  style="line-height: 30px; font-size: 0" height="30;">&nbsp;</td>
                                                            </tr>
                                                            <tr>
                                                                <td style="font-family: Arial, sans-serif; font-size: 13px; color: #545454; text-align: left; line-height: 20px;">
                                                                    <table>
                                                                        <tr>
                                                                            <td>
                                                                                <b>Contact Information</b>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td><b>Name:</b></td>
                                                                            <td>${property.contact.name}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td><b>Organization:</b></td>
                                                                            <td>${property.contact.organization}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td><b>Email:</b></td>
                                                                            <td>${property.contact.email}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td><b>Contact No:</b></td>
                                                                            <td><a href="tel:${property.contact.contactNo}">${property.contact.contactNo}</a></td>
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
                                                            <tr>
                                                                <td valign="top"  style="line-height: 10px; font-size: 0" height="40;">&nbsp;</td>
                                                            </tr>
                                                            <tr>
                                                                <td style="text-align: center;">
                                                                    <img src="${property.information.titleDeed}">
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td style="text-align: center;">
                                                                    ${property.information.images.map(image => `<img src="${image}">`).join('\n')}
                                                                </td>
                                                            </tr>
                                                        </table </td>
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
                "subject": `New Lead - ${property.location.address}`,
                "email": property.contact.email,
                "priority": 1,
                "status": 2
            },
            "cc_emails": "za@razrlab.com,jg@razrlab.com,ra@razrlab.com"
        }
    }, function (err, httpResponse, body) {
        console.log(err);
        console.log(body);
    });
}

//test home routes
router
    .get('/', function (req, res) {
        res.json({ "data": "I’m Bender, baby! Oh god, please insert liquor!!!" });
    })
    /**
     * Posting a new property
     */
    .post('/', upload.any(), function (req, res) {
        let property = JSON.parse(req.body.model);
        property.information.images = [];
        if (req.files && req.files.length) {
            for (let i = 0; i < req.files.length; i++) {
                //check if it is the title deed
                if (req.files[i].url && req.files[i].url.match('deed')) {
                    property.information.titleDeed = req.files[i].url;
                } else {
                    property.information.images.push(req.files[i].url);
                }
            }
        }
        console.log(property);
        db.Property.findOne({
            "information.title": property.information.title
        },function (err, doc) {
            if(!doc){
                console.log('its a new property');
                db.Property(property).save(function(err, doc){
                    sendLeadMail(property);
                    return res.send("succesfully saved");
                });
            }else{
                console.log('its NOT new property');
                return res.send("succesfully saved");
            }
        });
    })
    .delete('/', function (req, res) {
        res.status(200).send({ "status": "success", "message": "Successful DELETE" });
    })
    /**
  * Upload an avatar
  */
    .post("/photo", upload.array("images"), function (req, res, next) {
        if (req.files && req.files.length > 0) {
            let file = req.files[0], imageUrl;

            //check file type
            if (file.mimetype == "image/jpeg" || file.mimetype == "image/png") {
                db.User.findOneAndUpdate(
                    { "loginName": req.body.user },
                    { "imageUrl": file.originalname },
                    function (err, user) {
                        if (err) {
                            res.status(500).send({
                                status: "error",
                                message: "There was an error updating the user."
                            });
                            throw err;
                        } else {
                            res.status(200).send({
                                status: "success",
                                message: "User avatar updated successfully"
                            });
                        }
                    }
                );
            } else {
                res
                    .status(500)
                    .send({ status: "error", message: "Invalid file type." });
            }
        }
    });

module.exports = router;