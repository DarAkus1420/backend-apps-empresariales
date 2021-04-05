import { Router } from 'express';
import productController from './controller';

const productRouter = Router();

productRouter.get('/products', productController.getAll);

productRouter.get('/product/:id', productController.getOneById);

productRouter.post('/product', productController.createOne);

productRouter.put('/product/:id', productController.updateOne);

export default productRouter;
