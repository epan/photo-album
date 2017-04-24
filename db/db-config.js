const db = require('knex')({
  client: 'mysql',
  connection: {
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'catBase'
  }
});

db.schema.createTableIfNotExists('photos', (table) => {
  table.increments();
  table.string('title');
  table.string('url');
  table.integer('rating');
}).then(() => {
  console.log('table created');
});

module.exports = db;
