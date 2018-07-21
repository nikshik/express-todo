const config = require('./config');

module.exports = {
  getDbConnectionString: () => `mongodb://${config.DB_USER}:${config.DB_PASSWORD}@${config.DB_HOST}:${config.DB_PORT}/${config.DB_DATABASE}`,
};
