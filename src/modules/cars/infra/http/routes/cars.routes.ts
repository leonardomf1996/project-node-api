import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import CarsController from '../controller/CarController';

const carsRouter = Router();
const carsController = new CarsController();

carsRouter.use(ensureAuthenticated);

carsRouter.post('/', carsController.create);

export default carsRouter;
