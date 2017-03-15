exports.up = function(knex, Promise) {
  return knex.schema.createTable('camp_member', (table) => {
    table.increments();
    table.integer('member_id').references('member.id').unsigned().onDelete('cascade');
    table.integer('campsite_id').references('campsite.id').unsigned().onDelete('cascade');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('camp_member')
};
