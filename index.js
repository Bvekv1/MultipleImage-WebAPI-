var express = require('express');
var bodyparser = require('body-parser');
var imageController = require('./controller/imageController.js');
var app = express();

app.post('/image', imageController.ImageName, imageController.uploadImage);
app.post('/imageSave', imageController.uploadBibek, imageController.uploadMultiple);


app.listen('3032');