const pgp = require('pg-promise')();
require('dotenv').config()


const db = pgp(process.env.DATABASE_URL || {
	user: process.env.DB_USER,
	password: process.env.DB_PASS,
	host: process.env.DB_HOST,
	port: process.env.DB_PORT,
	database: process.env.DB_DATABASE,
});

module.exports = db;