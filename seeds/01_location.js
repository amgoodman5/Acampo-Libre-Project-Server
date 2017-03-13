exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "location"; ALTER SEQUENCE location_id_seq RESTART WITH 4;')
    .then( () => {
      const location = [{
        id:1,
        name:'Galvanize',
        address:'1644 Platte St',
        state:'CO',
        lat:39.7576,
        long:105.0070

      },{
        id:2,
        name:'McDonalds',
        state:'CO',
        address:'6590 Wadsworth Blvd',
        lat:39.8576,
        long:109.2070

      },{
        id:3,
        name:'Test Place',
        address:'690 Madssworth Blvd',
        state:'CO',
        lat:39.8576,
        long:109.2070
      }];
      return knex('location').insert(location);
    })
}
