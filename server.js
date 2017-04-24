const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const db = require('./db/db-config');

const app = express();
const IP = '127.0.0.1';
const PORT = process.env.PORT || 1337;

app.use(bodyParser.json());
app.use(morgan('tiny'));

app.listen(PORT, () => { console.log(`Listening on ${IP}:${PORT}`); });

