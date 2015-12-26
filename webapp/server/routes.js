var path = require('path');
var errandController = require('./controllers/errand-controller');
var userController = require('./controllers/user-controller');

module.exports = function(app){
	//====================
	//===== REST API =====
	//====================

	//==================
	//===== Errand =====
	//==================

	app.get('/api/errands', errandController.listAll);
	app.get('/api/errands/:id', errandController.listOne);
	app.post('/api/errands', errandController.create);
	app.delete('/api/errands/:id', errandController.remove)
	app.put('/api/errands/:id', errandController.update);

	//================
	//===== User =====
	//================

	app.get('/api/users', userController.listAll);
	app.get('/api/users/:id', userController.listOne);
	app.post('/api/users', userController.create);
	app.delete('/api/users/:id', userController.remove);
	app.put('/api/users/:id', userController.update);

	//============================
	//===== MAIN APPLICATION =====
	//============================

	//return homepage
	app.get('/', function(req, res){
		//use path.join to traverse __dirname up one dir in this case
		res.sendFile(path.join(__dirname, "../client/views/index.html"));
	});

	//return main page after logged in
	app.get('/main', function(req, res){
		res.sendFile(path.join(__dirname, "../client/views/main.html"));
	});
}