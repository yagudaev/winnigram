var fs = require('fs'),
	_ = require('underscore');

function getImageFileNames(callback) {
	fs.readdir('./public/uploads', function(err, filesNames){
		
		var filePaths = _.map(filesNames, function(name){
			return '/uploads/' + name;
		});

		console.log(filePaths);

		callback(filePaths)
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