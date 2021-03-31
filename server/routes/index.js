import productRoutes from '../components/product/routes';

const apiVersion = '/api/v1';

export default app => {
	app.use(apiVersion, productRoutes);
};
