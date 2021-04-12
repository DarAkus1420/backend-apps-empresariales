import { Sequelize } from 'sequelize';
import { db_name, db_username, db_password, db_host } from './dotenv';

const db = new Sequelize({
	dialect: 'sqlite',
	storage: 'test.sqlite',
});

export default db;
