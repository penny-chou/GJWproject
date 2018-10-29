const proxy = require('http-proxy-middleware');

module.exports = function(app){
	app.use(proxy('/BtCApi',{
		target:'http://m.gjw.com',
		host:'m.gjw.com',
		changeOrigin:true
	}))
}