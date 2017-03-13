exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "comment"; ALTER SEQUENCE comment_id_seq RESTART WITH 3;')
    .then( () => {
      const comments = [{
        id:1,
        content:'hello its me',
        dateCommented:new Date(),
        member_id:2,
        campsite_id:1

      },{
        id:3,
        content:'helsadfgaets me',
        dateCommented:new Date(),
        member_id:1,
        campsite_id:2

      },{
        id:2,
        content:'hello its me',
        dateCommented:new Date(),
        member_id:2,
        campsite_id:2

      }];
      return knex('comment').insert(comments);
    })

  }
