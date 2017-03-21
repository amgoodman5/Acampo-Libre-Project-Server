
exports.up = function(knex, Promise) {
  return knex.schema.createTable('member', (table) => {
    table.increments();
    table.string('username').notNullable().unique();
    table.string('email').unique().notNullable();
    table.string('password').notNullable();
    table.datetime('date').notNullable();
    table.string('bio');
    table.string('profile_pic');
    table.boolean('admin').defaultTo(false);
    table.boolean('visitor').defaultTo(true);
    table.boolean('member').defaultTo(false);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('member');

};

//join locations
//campsite approved that has
//campsite id
//approval id(memberid)
//any location that has a members set to false
