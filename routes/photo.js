var fs = require('fs'),
	exec = require('child_process').exec;
	currentID = 0;

function nextID() {
	return currentID++;
}

function applyFilterAndMoveTempFileToPersistentFolder(imageFileObj, callback) {
	var destinationPath = 'public/uploads/' + nextID() + '.jpg',
		command = 'convert -colorspace Gray ' + imageFileObj.path + ' ' + destinationPath;

	exec(command, callback);
}

/*
 * POST upload an image.
 */

exports.upload = function(req, res){
	var photoFileObj = req.files.photo

	console.log(JSON.stringify(photoFileObj, null, 4)); // pretty-print the file object
	
	applyFilterAndMoveTempFileToPersistentFolder(photoFileObj, function(err){
		res.redirect('/');
	});
};