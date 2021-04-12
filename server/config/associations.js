import Product from '../components/product/model';
import Brand from '../components/brand/model';

const associations = {
	createAssociations() {
		console.log('Creando asociaciones');
		Brand.hasMany(Product, {
			foreignKey: {
				name: 'brandId',
			},
		});
		Product.belongsTo(Brand);
	},
};

export default associations;
