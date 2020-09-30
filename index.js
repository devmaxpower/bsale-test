const pool = require('./src/utils/config');
const express = require('express');
const app = express();
const port = 3000;


app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

// Display all users
app.get('/users', (request, response) => {
  pool.query('SELECT * FROM product', (error, result) => {
      if (error) throw error;

      response.send(result);
  });
});