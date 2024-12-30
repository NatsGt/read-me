'use strict';
import {
  Model,
  DataTypes
} from 'sequelize';
import sequelize from './connection';
import User from "./user";
import Bookclub from "./bookclub";
export interface user_bookclubAttributes {
  user_id: string;
  bookclub_id: string;

}
class user_bookclub extends Model < user_bookclubAttributes > implements user_bookclubAttributes {
  user_id!: string;
  bookclub_id!: string;

}
user_bookclub.init({
  user_id: DataTypes.UUID,
  bookclub_id: DataTypes.UUID,

}, {
  sequelize,
  modelName: 'user_bookclub',
});
// Associations
user_bookclub.belongsTo(User, {
  foreignKey: {
    name: 'user_id',
    allowNull: false,
  },
  onDelete: "RESTRICT",
  foreignKeyConstraint: true,
});

user_bookclub.belongsTo(Bookclub, {
  foreignKey: {
    name: 'bookclub_id',
    allowNull: false,
  }
})

export default user_bookclub;