const path=require('path');
module.exports={
	entry:{
		app:'./app/app.js',
		a:'./app/a.js'
	},
	output:{
		path:path.resolve(__dirname,'../public'),
		// filename:'[name].[hash].js'
		// filename:'webpackapp.[hash].js'
		// filename:'webpackapp.js'
	}
};