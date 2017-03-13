exports.up = function(knex, Promise) {
  return knex.schema.createTable('location', (table) => {
       table.increments();
       table.string('name').notNullable();
       table.string('address').notNullable();
       table.string('state').notNullable();
       table.string('lat');
       table.string('long');
     });
   };

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('location');
};
