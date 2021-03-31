import { Router } from 'express';
import productController from './controller';

const productRouter = Router();

productRouter.get('/products', productController.getAll);

export default productRouter;
