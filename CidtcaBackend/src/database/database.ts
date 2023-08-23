import { Sequelize } from 'sequelize';
import store from '../config/index';

export let sequelize: any =
  process.env.NODE_ENV === 'production'
    ? new Sequelize({
        database: store.DB_NAME,
        dialect: 'postgres',
        host: store.DB_HOST,
        port: Number(store.DB_PORT),
        username: store.DB_USER,
        password: store.DB_PASSWORD,
        pool: {
          max: 3,
          min: 1,
          idle: 10000,
        },
        dialectOptions: {
          ssl: {
            require: true,
            // Ref.: https://github.com/brianc/node-postgres/issues/2009
            rejectUnauthorized: false,
          },
          keepAlive: true,
        },
        ssl: true,
      })
    : new Sequelize(
        `postgres://${store.DB_USER}:${store.DB_PASSWORD}@${store.DB_HOST}/${store.DB_NAME}`,
        { logging: false, native: false }
      );
