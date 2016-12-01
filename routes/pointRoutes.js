var express = require('express');
var router = express.Router();
var pointController = require('../controllers/pointController.js');
var points = require('../models/pointModel');
/*
 * GET
 */
router.get('/', function(req, res, next) {
    points.find(function (err, points) {
        if (err) return console.error(err);
        res.setHeader('Content-Type', 'application/json');
        res.json(points);
    });
});

/*
 * GET
 */
router.get('/:id', function(req, res, next) {
    points.findOne({_id : req.params._id}, function (err, points) {
        if (err) return console.error(err);
        res.setHeader('Content-Type', 'application/json');
        res.json(points);
    });
});

router.post('/type', function(req, res, next) {
    console.log(req.body);
    points.find({recycleOptions : {$in: req.body.recycleOptions}}, function (err, points) {
        if (err) return console.error(err);
        res.setHeader('Content-Type', 'application/json');
        res.json(points);
    });
});
/*
 * POST
 */
router.post('/', function(req, res) {
    points.create(req.body, function(err, result) {
             if(!err) {
                 res.status(201).send('V');
             } else {
                 console.log(err);
                 res.status(400).send('X');
             }
         });
});

/*
 * PUT
 */
router.put('/', function(req, res) {
    points.update({_id : req.body._id},
         req.body, function(err, result) {
             if(!err) {
                 console.log(result);
                 res.status(201).send('V');
             } else {
                 console.log(err);
                 res.status(400).send('X');
             }
         });
}); 
/*
 * DELETE
 */
router.delete('/:objectId', function(req, res) {
    points.remove({_id: req.params.objectId}, function(err) {
        if (!err) {
            res.status(201).send("V");
        } else {
            console.log(err);
            res.status(400).send(err);
        }
    });
});

module.exports = router;
