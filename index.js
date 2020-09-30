'use strict'
const pool = require('./src/utils/config');

const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'));

app.get('/', (request, response) => {
  response.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

//Construcción de mi API
app.get('/api', (request, response) => {
  pool.query('SELECT * FROM product', (error, result) => {
      if (error) throw error;

      response.send(result);
  });
});
