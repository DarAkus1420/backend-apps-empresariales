import { restResponse, errorResponse } from '../../utils/responses';

const productController = {
	async getAll(req, res) {
		try {
			console.log('Todos los productos');
		} catch (e) {
			console.log(e);
		}
	},
};

export default productController;
