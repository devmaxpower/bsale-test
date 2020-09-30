const mysql = require('mysql');
// Credenciales para la conexion
const config = {
  host: 'mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com',
  user: 'bsale_test',
  password: 'bsale_test',
  database: 'bsale_test',
};
// Create a MySQL pool
const pool = mysql.createPool(config);
// Export the pool
module.exports = pool;