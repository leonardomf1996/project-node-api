import ICarRepository from '@modules/cars/repositories/ICarRepository';
import ICreateCarDTO from '@modules/cars/dtos/ICreateCarDTO';

import Car from '../../infra/typeorm/entities/Car';

class CarRepository implements ICarRepository {
   private cars: Car[] = [];

   public async create({ user_id, brand, model, year }: ICreateCarDTO): Promise<Car> {
      const car = new Car();

      Object.assign(car, { plate: 'XXX1234', user_id, brand, model, year });

      this.cars.push(car);

      return car;
   }
}

export default CarRepository;
