const express = require('express');
const app = express();
const router = express.Router();

const port = 3000;


app.listen(port, function () {
  console.log('Example app listening on port 3000!')
})