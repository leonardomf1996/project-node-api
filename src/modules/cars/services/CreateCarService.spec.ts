import AppError from '@shared/errors/AppError';

import FakeCarRepository from '../repositories/fakes/FakeCarRepository';
import CreateCarService from './CreateCarService';

let fakeCarRepository: FakeCarRepository;
let createCar: CreateCarService;

describe('CreateCar', () => {
   beforeEach(() => {
      fakeCarRepository = new FakeCarRepository();
      createCar = new CreateCarService(fakeCarRepository);
   });

   it('should be able to create a new car', async () => {
      const car = await createCar.execute({
         plate: 'XXX1234',
         user_id: '123123',
         brand: 'Fiat',
         model: 'Uno',
         year: 1995,
      });

      expect(car).toHaveProperty('plate');
      expect(car.user_id).toBe('123123');
   });

});
