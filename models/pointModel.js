var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var pointSchema = new Schema({	'address' : String,	'latitue' : Number,	'longitude' : Number,	'recycleOptions' : Array});

module.exports = mongoose.model('point', pointSchema);
