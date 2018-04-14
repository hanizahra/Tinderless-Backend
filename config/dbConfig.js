const pgp = require('pg-promise')();

const config = process.env.DATABASE_URL || {
  host:     process.env.PG_HOST || 'localhost',
  port:     process.env.PG_PORT || 5433,
  database: process.env.PG_DATABASE || 'datingapp',
};

const db = pgp(config);
module.exports = db;
