
exports.up = function(knex, Promise) {
  return knex.schema.createTable('campsite', (table) => {
    table.increments();
    table.string('name').notNullable().unique();
    table.string('type').notNullable();
    table.string('description');
    table.string('picture');
    table.boolean('confirmed').defaultTo(false);
    table.string('video_url');


  });

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('campsite');

};
