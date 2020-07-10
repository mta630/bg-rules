const express = require('express');
const db = require('./database')
const app = express();

app.use(express.static('public'))




const PORT = process.env.PORT || 3000

app.listen(PORT, (err) => {
  if (err) {
    console.log('there was an error listening on port ', PORT)
  } else {
    console.log('Listening on port ', PORT)
  }
})