const app = require('./app');

// Starts Server
const port = 8080;

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
