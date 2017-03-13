exports.up = function(knex, Promise) {
  return knex.schema.createTable('comment', (table) => {
    table.increments();
    table.string('content').notNullable();
    table.date('dateCommented').notNullable();
    table.integer('member_id').references('member.id').unsigned().onDelete('cascade');
    table.integer('campsite_id').references('campsite.id').unsigned().onDelete('cascade');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('comment')
};
