var bibekImageModel = require('../model/imageModel.js');

var multer = require('multer');
var storage = multer.diskStorage({
	destination: function(req, file, cb){
		cb(null, 'upload/');
	},
	filename: function(req,file, cb){
		cb(null, file.originalname);
	}
});

var upload = multer({storage: storage})
var uploadBibek = upload.array('dhami',3);
//function uploadMultiple(req,res,result){
	 
	 	//res.json({
	 		//status: 300,
		//message: "Upload sucessfull"
	 	//})
	//}
	function uploadMultiple(req, res, next) {
  console.log(req.files)
  bibekImageModel.bibek.bulkCreate({
    dhami: req.files.filename

  })
    .then(function (result) {
      res.json({
        status: 300,
        message: "Images has been uploaded"
      })
    })
    .catch(function (err) {
      console.log(err);
    })
 
}
	
	  



var ImageName = upload.single('image');
function uploadImage(req,res,next){
	 bibekImageModel.bibek.create({
	 	image: req.file.filename
	 
	 })
	 .then(function(result){
	 	res.json({
	 		status: 300,
		message: "Upload sucessfull"
	 	})
	 })
	 .catch(function(err){
	 	console.log(err);
   })
} 
 
module.exports = {
	uploadImage,
	ImageName,
	uploadBibek,
	uploadMultiple
}
