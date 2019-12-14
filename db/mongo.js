const debug = require('debug')('app:db');
const winston = require('winston');
const config = require('config');
const mongoose = require ('mongoose');

const mongoConnect2 = async () =>{
    await mongoose.connect(`mongodb+srv://${config.get('db.mongo.user')}:${config.get('db.mongo.pass')}@${config.get('db.mongo.host')}/${config.get('db.mongo.db')}?retryWrites=true&w=majority`,{
        useUnifiedTopology: true,
        useNewUrlParser: true,
        })
    .then(() => {
        debug(`Connected to MongoDB: @${config.get('db.mongo.host')}/${config.get('db.mongo.db')}`);
        winston.info(`Connected to MongoDB: @${config.get('db.mongo.host')}/${config.get('db.mongo.db')}`);
    });
}

const mongoConnect = async () =>{
    await mongoose.connect(`mongodb://${config.get('db.mongo.host')}/${config.get('db.mongo.db')}`,{
        useUnifiedTopology: true,
        useNewUrlParser: true,
        })
    .then(() => {
        debug(`Connected to MongoDB: @${config.get('db.mongo.host')}/${config.get('db.mongo.db')}`);
        winston.info(`Connected to MongoDB: @${config.get('db.mongo.host')}/${config.get('db.mongo.db')}`);
    });
}

const mongoDisconnect = async () =>{
    await mongoose.disconnect();
}

module.exports.mongoConnect = mongoConnect;
module.exports.mongoDisconnect = mongoDisconnect;