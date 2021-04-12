import { startOfHour } from 'date-fns';
import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import Car from '../infra/typeorm/entities/Car';
import ICarRepository from '../repositories/ICarRepository';

import ICreateCarDTO from '../dtos/ICreateCarDTO';

@injectable()
class CreateCarService {
   constructor(
      @inject('CarsRepository')
      private carsRepository: ICarRepository,
   ) { }

   public async execute({ plate, user_id, model, brand, year }: ICreateCarDTO): Promise<Car> {
      const car = await this.carsRepository.create({
         plate,
         user_id,
         model,
         brand,
         year
      });

      return car;
   }
}

export default CreateCarService;
