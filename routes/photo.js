var fs = require('fs'),
	currentID = 0;

function nextID() {
	return currentID++;
}

function applyFilterAndMoveTempFileToPersistentFolder(imageFileObj, callback) {

	fs.readFile(imageFileObj.path, function(err, data){

		applyCrazyFilterToPhoto(data);

		writeDataToNewPath(data, callback)
	});
}

function writeDataToNewPath(data, callback) {
	var destinationPath = process.cwd() + '/public/uploads/' + nextID() + '.jpg';

	console.log('new destination: ' + destinationPath + '\n');

	fs.writeFile(destinationPath, data, function (err) {
		callback(err);
	});
}

function applyCrazyFilterToPhoto(data) {
	//--> manipulate the photo at this point <--//
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