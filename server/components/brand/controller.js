import { restResponse } from '../../utils/responses';
import { errorCallback } from '../../utils/functions/errorCallback';
import brandService from './service';

const brandController = {
	async getAll(req, res) {
		try {
			const response = await brandService.getAll();
			restResponse(response, res);
		} catch (e) {
			console.log(e);
			errorCallback(e, res);
		}
	},

	async getOneById(req, res) {
		try {
			const { id } = req.params;
			const response = await brandService.getOneById(id);
			restResponse(response, res);
		} catch (e) {
			console.log(e);
			errorCallback(e, res);
		}
	},

	async createOne(req, res) {
		try {
			const product = req.body;
			const response = await brandService.createOne(product);
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
			const response = await brandService.updateOne(id, product);
			restResponse(response, res);
		} catch (e) {
			console.log(e);
			errorCallback(e, res);
		}
	},

	async deleteOneById(req, res) {
		try {
			const { id } = req.params;
			const response = await brandService.deleteOneById(id);
			restResponse(response, res);
		} catch (e) {
			console.log(e);
			errorCallback(e, res);
		}
	},
};

export default brandController;
