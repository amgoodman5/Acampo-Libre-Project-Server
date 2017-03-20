
exports.seed = function(knex, Promise) {
  return knex.raw('DELETE FROM "location"; ALTER SEQUENCE location_id_seq RESTART WITH 3;')
    .then(() => {
      var locations = [{
        id: 1,
        latitude:38.732,
        longitude:-106.162,
        name:"Raspberry Gulch",
        state:'CO',
        type: 'BLM',
        description: 'the beadsfgasfast spot',
        picture: 'picadsfature',
        confirmed: false,
        video_url: ''

      }, {
        id: 2,
        latitude:40.071375,
        longitude:-105.660282,
        name: "lone eagle",
        state:'CO',
        type: 'BLM',
        description: 'the best spot',
        picture: 'picture',
        confirmed: true,
        video_url: ''
      }];
      return knex('location').insert(locations);
    });
};
