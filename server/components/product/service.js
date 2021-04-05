import { createdResponse, errorResponse, okResponse } from '../../utils/responses';
import Product from './model';

const productService = {
	async getAll() {
		// const product = await Product.create({
		// 	name: 'Teclado',
		// 	stock: 100,
		// });
		const products = await Product.findAll();
		console.log(`Se obtuvieron ${products.length} productos`);
		return okResponse(`Productos obtenidos`, { products });
	},

	async getOneById(id) {
		const product = await Product.findAll({
			where: {
				id,
			},
		});
		if (!product || product.length <= 0) {
			console.log('Error obteniendo el producto');
			return errorResponse('Error obteniendo el producto');
		}
		console.log(`Se obtuvo el producto con el id ${id}`);
		return okResponse(`Producto obtenido`, { product });
	},

	async createOne(product) {
		const newProduct = await Product.create(product);

		console.log(`Se creo el producto con el id ${newProduct.id}`);
		return createdResponse(`Producto creado`, { newProduct });
	},

	async updateOne(id, product) {
		await Product.update(product, {
			where: {
				id,
			},
		});

		console.log(`Se actualizo el producto con el id ${id}`);
		return okResponse(`Producto actualizado`);
	},

	async deleteOneById(id) {
		await Product.destroy({
			where: {
				id,
			},
		});
	},
};

export default productService;
