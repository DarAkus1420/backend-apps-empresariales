import { Sequelize, Model, DataTypes } from 'sequelize';
import sequelize from '../../config/db';
// const db = new Sequelize('sqlite::memory');

class Brand extends Model {}
Brand.init(
	{
		name: DataTypes.STRING,
	},
	{
		sequelize,
		modelName: 'Brand',
		timestamps: false,
	}
);

export default Brand;
