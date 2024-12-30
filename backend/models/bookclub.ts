"use strict";
import { Model, DataTypes } from "sequelize";
import sequelize from "./connection";
import User from "./user";
import user_bookclub from "./user_bookclub";
export interface BookclubAttributes {
  id: string;
  name: string;
  admin: string;
  created_at: Date;
  updated_at: Date;
}
class Bookclub extends Model<BookclubAttributes> implements BookclubAttributes {
  id!: string;
  name!: string;
  admin!: string;
  created_at!: Date;
  updated_at!: Date;
}
Bookclub.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUID,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    admin: DataTypes.STRING,
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
    modelName: "Bookclub",
  },
);
// Associations
Bookclub.belongsTo(User, {
  foreignKey: {
    name: "admin",
    allowNull: false,
  },
  onDelete: "RESTRICT",
  foreignKeyConstraint: true,
});

Bookclub.hasMany(user_bookclub, { foreignKey: "bookclub_id" });
export default Bookclub;
