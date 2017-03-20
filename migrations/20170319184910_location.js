
exports.up = function(knex, Promise) {
  return knex.schema.createTable('location', (table) => {
    table.increments();
    table.float('latitude');
    table.float('longitude');
    table.string('name');
    table.string('state');
  });

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('location');

};
