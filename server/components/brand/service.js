import { createdResponse, errorResponse, okResponse } from '../../utils/responses';
import Brand from './model';

const brandService = {
	async getAll() {
		console.log('obteniendo marcas');
		const brands = await Brand.findAll();
		console.log(`Se obtuvieron ${brands.length} marcas`);
		return okResponse(`Marcas obtenidos`, { brands });
	},

	async getOneById(id) {
		const brand = await Brand.findAll({
			where: {
				id,
			},
		});
		if (!brand || brand.length <= 0) {
			console.log('Error obteniendo la marca');
			return errorResponse('Error obteniendo la marca');
		}
		console.log(`Se obtuvo la marca con el id ${id}`);
		return okResponse(`Marca obtenida`, { brand });
	},

	async createOne(brand) {
		const newBrand = await Brand.create(brand);

		console.log(`Se creo la marca con el id ${newBrand.id}`);
		return createdResponse(`Marca creada`, { newBrand });
	},

	async updateOne(id, brand) {
		await Brand.update(brand, {
			where: {
				id,
			},
		});

		console.log(`Se actualizo la marca con el id ${id}`);
		return okResponse(`Marca actualizada`);
	},

	async deleteOneById(id) {
		await Brand.destroy({
			where: {
				id,
			},
		});
		return okResponse(`Marca con el id ${id} eliminada`);
	},
};

export default brandService;
