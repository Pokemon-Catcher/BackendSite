'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');
const dotenv = require('dotenv');
const router = express.Router();
const port = 8000;

dotenv.config();

let server = express();
server.use(bodyParser.urlencoded({ extended: true }));

const pool = new Pool({
    connectionString: process.env.DATABASE_URL
});

pool.on('error', (err, client) => {
    console.error('Unexpected error on idle client', err)
    process.exit(-1)
})

pool.on('connect', () => {
    console.log('connected to the db');
})

require('./app/routes')(server, {});

server.use(express.static(__dirname + '/public'));

server.listen(port, () => {
    console.log("Check " + port);
})
