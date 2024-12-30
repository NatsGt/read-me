"use strict";
import { Model, DataTypes } from "sequelize";
import sequelize from "./connection";
import user_bookclub from "./user_bookclub";
import bookclub from "./bookclub";
export interface UserAttributes {
  id: string;
  name: string;
  email: string;
  created_at: Date;
  updated_at: Date;
  location: string;
}
class User extends Model<UserAttributes> implements UserAttributes {
  id!: string;
  name!: string;
  email!: string;
  created_at!: Date;
  updated_at!: Date;
  location!: string;
}

User.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUID,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: DataTypes.STRING,
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updated_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    modelName: "User",
    timestamps: true,
  },
);

User.hasMany(user_bookclub, { foreignKey: "user_id" });

User.hasOne(bookclub, { foreignKey: "admin" });
export default User;
