"use strict";
import { QueryInterface, DataTypes, Sequelize } from "sequelize";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface: QueryInterface) {
    await queryInterface.createTable("user_bookclubs", {
      user_id: {
        type: DataTypes.UUID,
        references: {
          model: "Users",
          key: "id",
        },
        primaryKey: true,
      },
      bookclub_id: {
        type: DataTypes.UUID,
        references: {
          model: "Bookclubs",
          key: "id",
        },
        primaryKey: true,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: Sequelize.fn("now"),
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: Sequelize.fn("now"),
      },
    });
  },
  async down(queryInterface: QueryInterface, Sequelize: typeof DataTypes) {
    await queryInterface.dropTable("user_bookclubs");
  },
};
