module.exports = function(app){
		// Our model controllers (rather than routes)
		var users = require('./routes/users');
		var universities = require('./routes/universities');
		var cohorts = require('./routes/cohorts');

		const authCheckMiddleware = require('./config/middleware/authCheck');
		// Put back when auth works
		// app.use('/apis/university', authCheckMiddleware);

		app.use('/apis/users', users);
		app.use('/apis/universities', universities);
		app.use('/apis/cohorts', cohorts);
		//other routes..
}