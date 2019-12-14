const config =  require('config');
const winston = require("winston");
const express = require('express');
const app = express();

require("./startup/logging")();
require("./startup/cors")(app);
require("./startup/view")(app);
require("./startup/middleware")(app);
require("./startup/routes")(app);
require("./startup/db")();
require("./startup/config")(app);
require("./startup/validation")();

const port = config.get('port') || 3000;
const server = app.listen(port, () => winston.info(`Listening on port ${port}...`));

module.exports = server;