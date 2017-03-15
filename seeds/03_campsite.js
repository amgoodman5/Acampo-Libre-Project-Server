
exports.seed = function(knex, Promise) {
  return knex.raw('DELETE FROM "campsite"; ALTER SEQUENCE campsite_id_seq RESTART WITH 3;')
    .then(() => {
      var campsites = [{
        id: 1,
        name: 'The spot',
        type: 'BLM',
        description: 'the best spot',
        picture: 'picture',
        confirmed: false,
        video_url: '',
        location_id:1

      }, {
        id: 2,
        name: 'Almond Creek',
        type: 'BLM',
        description: 'the best spot',
        picture: 'picture',
        confirmed: true,
        video_url: '',
        location_id:2

      }];
      return knex('campsite').insert(campsites);
    });
};
