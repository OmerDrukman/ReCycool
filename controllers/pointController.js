var pointModel = require('../models/pointModel.js');

/**
 * pointController.js
 *
 * @description :: Server-side logic for managing points.
 */
module.exports = {

    /**
     * pointController.list()
     */
    list: function (req, res) {
        pointModel.find(function (err, points) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting point.',
                    error: err
                });
            }
            return res.json(points);
        });
    },

    /**
     * pointController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        pointModel.findOne({_id: id}, function (err, point) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting point.',
                    error: err
                });
            }
            if (!point) {
                return res.status(404).json({
                    message: 'No such point'
                });
            }
            return res.json(point);
        });
    },

    /**
     * pointController.create()
     */
    create: function (req, res) {
        var point = new pointModel({			address : req.body.address,			latitue : req.body.latitue,			longitude : req.body.longitude,			recycleOptions : req.body.recycleOptions
        });

        point.save(function (err, point) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating point',
                    error: err
                });
            }
            return res.status(201).json(point);
        });
    },

    /**
     * pointController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        pointModel.findOne({_id: id}, function (err, point) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting point',
                    error: err
                });
            }
            if (!point) {
                return res.status(404).json({
                    message: 'No such point'
                });
            }

            point.address = req.body.address ? req.body.address : point.address;			point.latitue = req.body.latitue ? req.body.latitue : point.latitue;			point.longitude = req.body.longitude ? req.body.longitude : point.longitude;			point.recycleOptions = req.body.recycleOptions ? req.body.recycleOptions : point.recycleOptions;			
            point.save(function (err, point) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating point.',
                        error: err
                    });
                }

                return res.json(point);
            });
        });
    },

    /**
     * pointController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        pointModel.findByIdAndRemove(id, function (err, point) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the point.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
