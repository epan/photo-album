const seedData = require('./seeds/seed');

const db = require('knex')({
  client: 'mysql',
  connection: {
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'catbase'
  }
});

db.schema.dropTableIfExists('photos')
  .then(() => {
    console.log('table dropped');
  })
  .then(() => {
    db.schema.createTableIfNotExists('photos', (table) => {
      table.increments('id');
      table.string('title');
      table.string('url');
      table.integer('rating');
    })
    .then(() => {
      console.log('table created');
      db('photos').insert(seedData)
      .then(() => {
        console.log('seed data inserted');
      });
    });
  });

const getPhotoById = (id, cb) => {
  db('photos').where('id', id)
    .then((data) => { cb(null, data) })
    .catch((err) => { cb(err, null) });
};

module.exports.getPhotoById = getPhotoById;
