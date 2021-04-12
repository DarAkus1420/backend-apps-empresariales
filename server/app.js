//Packages
import express from 'express';
import passport from 'passport';

//Config
import passportConfig from './config/passport';
import expressConfig from './config/express';
import associations from './config/associations';

//Routes
import routes from './routes/index';

import db from './config/db';

const app = express();

expressConfig(app);
passportConfig(passport);
app.use(passport.initialize());
routes(app);

associations.createAssociations();

db.sync({ force: false })
	.then(() => {
		console.log('Nos hemos conectado a la base de datos');
	})
	.catch(error => {
		console.log('Se ha producido un error', error);
	});

module.exports = app;
