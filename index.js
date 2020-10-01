'use strict'
const pool = require('./src/utils/config');

const express = require('express')
const app = express()

app.set('port', (process.env.PORT || 5000 ));
app.use(express.static('public'));

app.get('/', (request, response) => {
  response.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

//Construcción de mi API
app.get('/api', (request, response) => {
  pool.query('SELECT product.*, category.name as name_category FROM product LEFT JOIN category ON product.category = category.id order by name_category', (error, result) => {
      if (error) throw error;

      response.send(result);
  });
});
