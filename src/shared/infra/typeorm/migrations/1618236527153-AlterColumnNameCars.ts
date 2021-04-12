import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterColumnNameCars1618236527153 implements MigrationInterface {

   public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.renameColumn('cars', 'id', 'plate');
   }

   public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.renameColumn('cars', 'plate', 'id');
   }

}
