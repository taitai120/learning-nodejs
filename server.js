const dotenv = require('dotenv');
const app = require('./app');
const mongoose = require('mongoose');

dotenv.config({ path: './config.env' });

const port = process.env.PORT || 3000;
const DB = process.env.DB.replace('<password>', process.env.PASSWORD);

mongoose
  .connect(DB, {})
  .then(() => {
    console.log('DB Connected');
  })
  .catch(err => {
    console.log(err);
  });

app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
