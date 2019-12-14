const config = require('config');

module.exports = function(app) {
  if (!config.get('port')) {
    throw new Error('FATAL ERROR: APP_PORT is not defined.');
  }

  if (!config.get('jwtPrivateKey')) {
    throw new Error('FATAL ERROR: jwtPrivateKey is not defined.');
  }

  if (!config.get('db.mongo.host')) {
    throw new Error('FATAL ERROR: APP_MONGO_HOST is not defined.');
  }

  if (!config.get('db.mongo.port')) {
    throw new Error('FATAL ERROR: APP_MONGO_PORT is not defined.');
  }

  if (app.get('env') != 'development' && !config.get('db.mongo.user')) {
    throw new Error('FATAL ERROR: APP_MONGO_USER is not defined.');
  }

  if (app.get('env') != 'development' && !config.get('db.mongo.pass')) {
    throw new Error('FATAL ERROR: APP_MONGO_PASS is not defined.');
  }

  if (!config.get('db.mongo.db')) {
    throw new Error('FATAL ERROR: APP_MONGO_DB is not defined.');
  }
}