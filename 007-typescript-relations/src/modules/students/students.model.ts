import { DataTypes, Model, Sequelize } from 'sequelize';
import { sequelize } from '../../config/database';

export class Students extends Model {
  public static readonly tableName: string = 'students';

  public id: number;
  public name: string;
  public email: string;
  public password: string;

  public static prepareInit(sequelize: Sequelize) {
    this.init(
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true,
        },
        name: DataTypes.STRING(),
        email: DataTypes.STRING(),
        password: DataTypes.STRING(),
      },
      {
        sequelize,
        tableName: this.tableName,
      }
    );
  }
}

Students.prepareInit(sequelize);
