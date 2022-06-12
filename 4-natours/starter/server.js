const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const app = require('./app');

// Starts Server
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
