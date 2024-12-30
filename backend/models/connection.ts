"use strict"
import { Sequelize } from "sequelize"
import path from "node:path";
const env = process.env.NODE_ENV || "development"
const config = require(path.join(__dirname, '../config/config.js'))[env]

const sequelize: Sequelize = config.config?.use_env_variable
  ? // @ts-ignore
    new Sequelize(process.env[config.config.use_env_variable], config)
  : new Sequelize(config.database, config.username, config.password, config)

export default sequelize
