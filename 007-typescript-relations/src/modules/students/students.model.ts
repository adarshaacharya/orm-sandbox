import { DataTypes, Model, Sequelize } from 'sequelize';
import { sequelize } from '../../config/database';
import { Groups } from '../groups/groups.model';

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
        groupId: DataTypes.INTEGER(),
      },
      {
        sequelize,
        tableName: this.tableName,
      }
    );
  }
}

Students.prepareInit(sequelize);

Students.belongsTo(Groups, {
  foreignKey: 'groupId',
  as: 'group',
});

Groups.hasMany(Students, {
  foreignKey: 'groupId',
  as: 'students',
});
