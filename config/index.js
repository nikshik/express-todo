const config = require('./config');

module.exports = {
  getDbConnectionString: () => `mongodb://${config.DB_USER}:${config.DB_PASSWORD}@localhost:27017/todobase`,
};
