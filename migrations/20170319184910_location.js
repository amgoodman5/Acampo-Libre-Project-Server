
exports.up = function(knex, Promise) {
  return knex.schema.createTable('location', (table) => {
    table.increments();
    table.float('latitude');
    table.float('longitude');
    table.string('name');
    table.string('state');
    table.string('type').notNullable();
    table.string('description');
    table.string('picture');
    table.boolean('confirmed').defaultTo(false);
    table.string('video_url');
  });

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('location');

};
