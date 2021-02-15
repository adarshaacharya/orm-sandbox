import { DataTypes, Model, Sequelize } from 'sequelize';
import { sequelize } from '../../config/database';

export class Groups extends Model {
  public static readonly tableName: string = 'groups';

  public id: number;
  public groupName: string;
  public groupToken: string;
  public teacherId: number;
  public createdAt: Date;
  public updatedAt: Date;
  public avatarId: number;

  public static prepareInit(seq: Sequelize) {
    this.init(
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true,
        },
        groupName: {
          type: DataTypes.STRING(),
          allowNull: false,
        },
      },
      {
        sequelize,
        tableName: this.tableName,
      }
    );
  }
}
Groups.prepareInit(sequelize);
