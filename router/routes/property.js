"use strict";

const express = require('express'),
    router = express.Router();


//test home routes
router
    .get('/', function (req, res) {
        res.json({ "data": "I’m Bender, baby! Oh god, please insert liquor!!!" });
    })
    .post('/', function (req, res) {
        console.log(req.body);
        db.Property(req.body).save(function (err, data) {
            res.status(200).send({"status": "success", "message": "Successful DELETE" });
        });
    })
    .delete('/', function (req, res) {
        res.status(200).send({ "status": "success", "message": "Successful DELETE" });
    });

module.exports = router;