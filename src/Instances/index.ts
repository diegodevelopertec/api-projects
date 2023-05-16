import { Sequelize } from "sequelize";
import path from "path";

export const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './src/database/portfolio.db'
  });