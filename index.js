'use strict'
const pool = require('./src/utils/config');

const express = require('express');
const bodyParser = require('body-parser');
const request = require ('request');

const app = express();

app.set('port', 5000);

app.use(bodyParser.json());

app.get('/', (request, response) => {
  response.send('Hello World.')
})
// Construcción de mi API
app.get('/api', (request, response) => {
  pool.query('SELECT * FROM product', (error, result) => {
      if (error) throw error;

      response.send(result);
  });
});
app.listen(app.get('port'), err => {
  err ? console.log('hubo un error').proccess.exit(1) :
  console.log(`Nuestro servidor funciona en el puerto ${app.get('port')}`,);
})