import bcrypt from 'bcryptjs';
import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/database';

export class User extends Model {
  public id: number;

  public name: string;

  public email: string;

  public password: string;

  public passwordHash: string;

  public readonly createdAt: Date;

  public readonly updatedAt: Date;
}

User.init(
  {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      field: 'id',
      primaryKey: true,
    },
    name: {
      type: new DataTypes.STRING(255),
      allowNull: false,
      field: 'name',
    },
    email: {
      type: new DataTypes.STRING(128),
      unique: true,
      allowNull: false,
      field: 'email',
    },
    password: {
      type: DataTypes.VIRTUAL,
      allowNull: false,
      field: 'password',
    },
    passwordHash: {
      type: new DataTypes.STRING(255),
      allowNull: false,
      field: 'password_hash',
    },
  },

  // second params
  {
    tableName: 'users',
    sequelize,
  }
);

User.beforeCreate(async (user: User) => {
  if (user.password) {
    const salt = await bcrypt.genSalt(10);

    const hashedPassword = await bcrypt.hash(user.password, salt);
    user.passwordHash = hashedPassword;
  }
});
