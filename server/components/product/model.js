import { Sequelize, Model, DataTypes } from 'sequelize';
import sequelize from '../../config/db';
// const db = new Sequelize('sqlite::memory');

class Product extends Model {}
Product.init(
	{
		name: DataTypes.STRING,
		stock: DataTypes.NUMBER,
	},
	{
		sequelize,
		modelName: 'product',
	}
);

export default Product;
