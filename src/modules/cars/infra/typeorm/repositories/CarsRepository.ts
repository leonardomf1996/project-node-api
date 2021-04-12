import { getRepository, Repository } from 'typeorm';

import ICarsRepository from '@modules/cars/repositories/ICarRepository';
import ICreateCarDTO from '@modules/cars/dtos/ICreateCarDTO';

import Car from '../entities/Car';

class CarsRepository implements ICarsRepository {
   private ormRepository: Repository<Car>;

   constructor() {
      this.ormRepository = getRepository(Car);
   }

   public async create({ plate, user_id, model, brand, year }:ICreateCarDTO): Promise<Car> {
      const car = this.ormRepository.create({
         plate,
         user_id,
         model,
         brand,
         year,
      });

      await this.ormRepository.save(car);

      return car;
   }
}

export default CarsRepository;
