import Car from '../infra/typeorm/entities/Car';
import ICreateCarDTO from '../dtos/ICreateCarDTO';

export default interface ICarRepository {
   create(data: ICreateCarDTO): Promise<Car>;
}
