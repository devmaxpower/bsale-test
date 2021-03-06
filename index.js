'use strict'
const pool = require('./src/utils/config');

const express = require('express')
const app = express()
const port = 3000

app.set('port', (process.env.PORT || 5000 ));
app.use(express.static('public'));

app.get('/', (request, response) => {
  response.send('Hello World!')
})
app.get('/#', (request, response) => {
  response.send('Hello World!')
})

app.listen(app.get('port'), function(){
  console.log('Servidor funcionando en el puerto: ', app.get('port'));
});

//Construcción de mi API
app.get('/api', (request, response) => {
  pool.query('SELECT product.*, category.name as name_category FROM product LEFT JOIN category ON product.category = category.id order by name_category', (error, result) => {
      if (error) throw error;

      response.send(result);
  });
});

//Busqueda de producto por nombre
app.get('/api/:name_product', (request, response) => {
  const name_product = request.params.name_product;
  pool.query('SELECT product.*, category.name as name_category FROM product LEFT JOIN category ON product.category = category.id WHERE product.name like ?', name_product+'%', (error, result) => {
      if (error) throw error;
      response.send(result);
  });
});