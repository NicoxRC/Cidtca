import app from './app';
import store from './config/index';
import { sequelize } from './database/database';

async function main() {
  try {
    await sequelize.sync({ force: false });
    app.listen(store.PORT, () => {
      console.log('listening on port', store.PORT);
    });
  } catch (error) {
    console.log('error', error);
  }
}

main();
