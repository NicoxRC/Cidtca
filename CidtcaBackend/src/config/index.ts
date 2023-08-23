import dotenv from 'dotenv';
dotenv.config();

export = {
  DB_USER: process.env.DB_USER,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_HOST: process.env.DB_HOST,
  DB_NAME: process.env.DB_NAME,
  DB_PORT: process.env.DB_PORT,
  PORT: process.env.PORT,
  API_KEY: process.env.API_KEY,
  API_SECRET: process.env.API_KEY,
  CLOUD_NAME: process.env.API_KEY,
};
