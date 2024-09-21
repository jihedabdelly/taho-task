const { Pool } = require('pg');

const pool = new Pool({
  user: 'spending_user',      // PostgreSQL username
  host: 'localhost',          // PostgreSQL server host
  database: 'spending_db',    // Database name
  password: 'secure_password',// PostgreSQL password
  port: 5432,                 // Default PostgreSQL port
});

pool.on('connect', () => {
  console.log('Connected to the database');
});

module.exports = pool;