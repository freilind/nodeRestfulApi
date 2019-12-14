const  { mongoConnect } = require('../db/mongo');

module.exports = function() {
    mongoConnect();
  }
