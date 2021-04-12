import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateCar1618167047204 implements MigrationInterface {

   public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
         new Table({
            name: 'cars',
            columns: [
               {
                  name: 'id',
                  type: 'varchar',
                  isPrimary: true
               },
               {
                  name: 'model',
                  type: 'varchar',
               },
               {
                  name: 'brand',
                  type: 'varchar',
               },
               {
                  name: 'year',
                  type: 'integer',
               },
               {
                  name: 'user_id',
                  type: 'uuid',
               },
               {
                  name: 'created_at',
                  type: 'timestamp',
                  default: 'now()',
               },
               {
                  name: 'updated_at',
                  type: 'timestamp',
                  default: 'now()',
               },
            ]
         })
      );

      await queryRunner.createForeignKey('cars',
      new TableForeignKey({
         name: 'CarUserId',
         columnNames: ['user_id'],
         referencedColumnNames: ['id'],
         referencedTableName: 'users',
         onDelete: 'SET NULL',
         onUpdate: 'CASCADE',
      }));
   }

   public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropForeignKey('cars', 'CarUserId');
      await queryRunner.dropTable('cars');
   }

}
