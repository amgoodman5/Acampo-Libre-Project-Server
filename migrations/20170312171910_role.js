exports.up = function(knex, Promise) {
  return knex.schema.createTable('role', (table) => {
       table.increments();
       table.boolean('admin').defaultTo(false);
       table.boolean('visitor').defaultTo(true);
       table.boolean('member').defaultTo(false);
     });
   };

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('role');
};
