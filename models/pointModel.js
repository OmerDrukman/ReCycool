var mongoose = require('mongoose');

var pointSchema = new mongoose.Schema({
    _id : { type: mongoose.Schema.ObjectId, auto: true },
    updated_at : { type: Date, default: Date.now },
	address : String,
	latitue : Number,
	longitude : Number,
	approves : Number,
	disapproves : Number,
	recycleOptions : [String]
});

module.exports = mongoose.model('points', pointSchema);