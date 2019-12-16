
var Sequelize  = require('sequelize')

var sequelize = new Sequelize('upload','root','123456789',{
	host : 'localhost',
	dialect: 'mysql',
	logging:false
});
 sequelize.authenticate()
.then(
function(){ 
	console.log('db connection successfull')
})

.catch(
	function(err){
	console.log(err)
})



module.exports = {
	Sequelize,
	sequelize
}