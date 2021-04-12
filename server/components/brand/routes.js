import { Router } from 'express';
import brandController from './controller';

const brandRouter = Router();

brandRouter.get('/brands', brandController.getAll);

brandRouter.get('/brand/:id', brandController.getOneById);

brandRouter.post('/brand', brandController.createOne);

brandRouter.put('/brand/:id', brandController.updateOne);

brandRouter.delete('/brand/:id', brandController.deleteOneById);

export default brandRouter;
