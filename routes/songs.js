var express = require('express');
var router = express.Router();

var song = require('../models/song');

//get handler for /song
router.get('/', function(req, res, next){
	
	//use song model to run a query
	Song.find(function(songs){
			//load the songs view
			res.render('songs', {
				title: 'Songs',
				songs: songs
			});
	})
});

//makes controller public
module.exports = router;