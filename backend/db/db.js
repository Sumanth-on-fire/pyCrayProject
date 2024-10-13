const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres', // replace with your username
  host: 'localhost',
  database: 'postgres', // replace with your database name
  password: 'pgAdmin@123', // replace with your password
  port: 5432,
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
