import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

import User from '@modules/users/infra/typeorm/entities/User';

@Entity('cars')
class Car {
   @PrimaryColumn()
   plate: string; // placa

   @Column()
   model: string;

   @Column()
   brand: string; // marca

   @Column()
   year: number;

   @Column()
   user_id: string;

   @ManyToOne(() => User)
   @JoinColumn({ name: 'user_id' })
   owner: User;

   @CreateDateColumn()
   created_at: Date;

   @UpdateDateColumn()
   updated_at: Date;
}

export default Car;
