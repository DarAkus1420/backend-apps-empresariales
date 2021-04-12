import productRoutes from '../components/product/routes';
import brandRoutes from '../components/brand/routes';

const apiVersion = '/api/v1';

export default app => {
	app.use(apiVersion, productRoutes);
	app.use(apiVersion, brandRoutes);
};
