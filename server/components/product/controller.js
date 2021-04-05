import { restResponse, errorResponse } from '../../utils/responses';
import { errorCallback } from '../../utils/functions/errorCallback';
import productService from './service';

const productController = {
	async getAll(req, res) {
		try {
			const response = await productService.getAll();
			restResponse(response, res);
		} catch (e) {
			console.log(e);
			errorCallback(e, res);
		}
	},

	async getOneById(req, res) {
		try {
			const { id } = req.params;
			const response = await productService.getOneById(id);
			restResponse(response, res);
		} catch (e) {
			console.log(e);
			errorCallback(e, res);
		}
	},

	async createOne(req, res) {
		try {
			const product = req.body;
			const response = await productService.createOne(product);
			restResponse(response, res);
		} catch (e) {
			console.log(e);
			errorCallback(e, res);
		}
	},

	async updateOne(req, res) {
		try {
			const { id } = req.params;
			const product = req.body;
			const response = await productService.updateOne(id, product);
			restResponse(response, res);
		} catch (e) {
			console.log(e);
			errorCallback(e, res);
		}
	},
};

export default productController;
