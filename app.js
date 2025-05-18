const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>');
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server listening on port ${port}`);
});

