var mongoose = require('mongoose');

var songSchemes = new mongoose.Schemes({
	title: {
		type: String,
		required: 'No title entered'
	},
	artist: {
		type: String,
		required: 'No artist entered'
	},
	year: {
		type: Number,
		required: 'No year entered'
	}
});

//make the class definition public as "Song"
module.exports = mongoose.model('Song', songSchemes);