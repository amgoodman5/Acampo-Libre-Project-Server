
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
        address:'1644 Platte St',
        state:'CO',
        lat:39.7576,
        long:105.0070

      }, {
        id: 2,
        name: 'Almond Creek',
        type: 'BLM',
        description: 'the best spot',
        picture: 'picture',
        confirmed: true,
        video_url: '',
        address:'16sdfasdfa',
        state:'CO',
        lat:39.7666,
        long:105.0070

      }];
      return knex('campsite').insert(campsites);
    });
};
