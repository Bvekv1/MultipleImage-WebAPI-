var db = require('../dbConfig/dbConfig.js')
var bibek = db.sequelize.define('image',{
	id:{
		type:db.Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement:true,
		allowNull: false
	},
	image: {
		type: db.Sequelize.TEXT,
		allowNull: false
	}
},
	{
		freezeTableName: true,
		tableName: 'Images'
	}	)
bibek.sync({force:false})
.then(function(){

})
.catch(function(err){
	console.log(err);
})

module.exports = {bibek}