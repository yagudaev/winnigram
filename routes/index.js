var fs = require('fs'),
	_ = require('../underscore-min.js');

function getImageFileNames(callback) {
	fs.readdir(process.cwd() + '/public/uploads', function(err, filesNames){
		
		var filePaths = _.map(filesNames, function(name){
			return 'uploads/' + name;
		});

		console.log(filePaths);

		callback(filesNames)
	});
}

/*
 * GET home page.
 */

exports.index = function(req, res){
	getImageFileNames(function(fileNames){
		res.render('index', { title: 'Photo-Uploader', photos: fileNames });
	});
};