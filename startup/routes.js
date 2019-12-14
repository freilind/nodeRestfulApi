const express = require('express');
const routeV1genres = require('../routes/v1/genres');
const routeV1customers = require('../routes/v1/customers');
const routeV1movies= require('../routes/v1/movies');
const routeV1rentals= require('../routes/v1/rentals');
const routeV1returns= require('../routes/v1/returns');
const routeV1users = require('../routes/v1/users');
const routeV1auth = require('../routes/v1/auth');
const routeHome = require('../routes/home');
const error = require('../middleware/error');

module.exports = function(app) {
    app.use(express.json());
    app.use(express.urlencoded({ extended: true}));
    app.use(express.static('public'));
    app.use('/', routeHome);
    app.use('/api/v1/auth', routeV1auth);
    app.use('/api/v1/customers', routeV1customers);
    app.use('/api/v1/genres', routeV1genres);
    app.use('/api/v1/movies', routeV1movies);
    app.use('/api/v1/rentals', routeV1rentals);
    app.use('/api/v1/returns', routeV1returns);
    app.use('/api/v1/users', routeV1users);
    app.use(error);
}