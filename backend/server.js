// create an instance of the express framework
const express = require('express');
// crate an instance of app which enables us to make api request, initilize our server etc
const app = express();
const db = require('./models');

// GO INTO THE DB AND SYNCHRONIZE IF THE MODELS ALREADY EXIST, IF NOT MAKE THEM EXIST
db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log(`server is running on port 3001`);
  });
});
