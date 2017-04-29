const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const db = require('./db/db-config');
const path = require('path');

const app = express();
const IP = '127.0.0.1';
const PORT = process.env.PORT || 1337;

app.use(bodyParser.json());
app.use(morgan('tiny'));
app.use(express.static(__dirname + '/client/public'));

app.listen(PORT, () => {
  console.log(`Listening on ${IP}:${PORT}`);
});

app.get('/photos', (req, res) => {
  db.getPhotoById(req.query.id, (err, data) => {
    console.log('The photo:', data);
    if (err) {
      res.status(501).send(err);
    } else {
      res.send(data);
    }
  });
});
