"use strict";

const express = require('express'),
    router = express.Router();


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

//being random
router.post('/liquor', function (req, res) {
    res.json({ "data": "Thank you baby!" });
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