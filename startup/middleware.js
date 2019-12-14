const debug = require('debug')('app:startup');
const config =  require('config');
const winston = require("winston");
const morgan = require('morgan');
const helmet = require('helmet');

module.exports = function(app) {
    app.use(helmet());
    app.use(morgan('tiny'));

    winston.info(`Application name: ${config.get('name')}`)

    if(app.get('env') === 'development'){
        app.use(morgan(`tiny`));
        debug(`morgan enabled...`);
        winston.info(`morgan enabled...`);
    }
}