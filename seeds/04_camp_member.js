exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "camp_member"; ALTER SEQUENCE camp_member_id_seq RESTART WITH 3;')
    .then( () => {
      const camp_members = [{
        id:1,
        member_id:2,
        campsite_id:1

      },{
        id:2,
        member_id:1,
        campsite_id:2

      },{
        id:3,
        member_id:2,
        campsite_id:2

      }];
      return knex('camp_member').insert(camp_members);
    })

  }
