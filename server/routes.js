module.exports = function(app){
		// Our model controllers (rather than routes)
		var users = require('./routes/users');
		var university = require('./routes/university');

		const authCheckMiddleware = require('./config/middleware/authCheck');
		app.use('/apis/university', authCheckMiddleware);

		app.use('/apis/users', users);
		app.use('/apis/university', university);
		//other routes..
}