const express = require('express');
const path = require('path');
const cors = require('cors');
const jsonParser = require("body-parser").json;
const request = require('request');
const db = require('./models/db');

const app = express();

app.use(jsonParser());

app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, () => {
    console.log('The application is running on localhost:3000!');
  });
  