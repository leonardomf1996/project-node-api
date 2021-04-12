import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateCarService from '@modules/cars/services/CreateCarService';

export default class CarController {
   public async create(request: Request, response: Response): Promise<Response> {
      const { plate, user_id, model, brand, year } = request.body;

      const createCar = container.resolve(CreateCarService);

      const car = await createCar.execute({
         plate,
         user_id,
         model,
         brand,
         year
      });

      return response.json(car);
   }
}
