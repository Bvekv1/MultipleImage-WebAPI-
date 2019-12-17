var express = require('express');
var imageController = require('./controller/imageController.js');
var app = express();

const swaggerjsdoc = require('swagger-jsdoc');

const swaggerUIExpress = require('swagger-ui-express');

var swaggerDefinition = {
	info: {
		title: 'Image Docs',
		version: '0.0.1',
		description: 'This is for image documentaion'
	},
	securityDefination: {
			bearerAuth:{
				type: 'api',
				name: 'authorization',
				scheme: 'bearer',
				in: 'header'
			}
	},
	host: 'localhost:3022',
	basePath: '/'
}


var swaggerOptions = {
	swaggerDefinition,
	apis: ['./index.js']
}

var swaggerSpecs = swaggerjsdoc(swaggerOptions);

app.use('/api-docs', swaggerUIExpress.serve, swaggerUIExpress.setup(swaggerSpecs));
/**
* @swagger
* /image:
*  post:
*   tags:
*    - Image
*   description: Testing
*   produces:
*    - application/json
*   consumes:
*    -form-data
*   parameters:
*    - name: image
*      in: formData
*      required: true
*      type: file
*      description: Select image
*   responses:
*    300:
*     description: Image uploaded successfully
*    500:
*     description: Couldn't upload image
*/

app.post('/image', imageController.ImageName, imageController.uploadImage);

/**
* @swagger
* /images:
*  post:
*   tags:
*    - Images
*   description: Testing
*   produces:
*    - application/json
*   consumes:
*    -form-data
*   parameters:
*    - name: images
*      in: formData
*      required: true
*      type: file
*      description: Select images
*   responses:
*    300:
*     description: Image uploaded successfully
*    500:
*     description: Couldn't upload image
*/

app.post('/imageSave', imageController.uploadBibek, imageController.uploadMultiple);


app.listen('3022');