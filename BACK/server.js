const express = require('express');
require('dotenv/config');

const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const morgan = require('morgan');
const routerAllRestaurants = require('./routes/allRestaurants');

const PORT = 5000 || process.env.PORT;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('tiny'));
app.use('/allRestaurants', routerAllRestaurants);

// Connect To DataBase
mongoose.connect(
  process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }, (err) => {
    if (err) throw err;
    console.log('CONNECTED TO DATABASE');
  },
);
app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`SERVER WAS LISNED AT PORT : ${PORT}`);
});
