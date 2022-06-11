const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello From the server', app: 'Natours' });
});

app.post('/', (req, res) => {
  res.send('You can post to this end point...');
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
