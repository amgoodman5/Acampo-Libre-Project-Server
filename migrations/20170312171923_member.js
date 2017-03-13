
exports.up = function(knex, Promise) {
  return knex.schema.createTable('member', (table) => {
    table.increments();
    table.string('username').notNullable().unique();
    table.string('email').unique().notNullable();
    table.string('password').notNullable();
    table.datetime('date').notNullable();
    table.string('bio');
    table.string('profile_pic');
    table.integer('role_id').references("role.id").unsigned().onDelete('CASCADE');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('member');

};
