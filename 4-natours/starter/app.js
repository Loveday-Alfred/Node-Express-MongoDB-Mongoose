const express = require('express');
const fs = require('fs');

const app = express();
const port = 8080;

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);

app.get('/api/v1/tours', (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      tours,
    },
  });
});

// app.get('/', (req, res) => {
//   res.status(200).json({ message: 'Hello From the server', app: 'Natours' });
// });

// app.post('/', (req, res) => {
//   res.send('You can post to this end point...');
// });

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
