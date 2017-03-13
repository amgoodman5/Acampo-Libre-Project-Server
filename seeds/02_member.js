
exports.seed = function(knex, Promise) {
  var bcrypt = require('bcrypt');
    // Deletes ALL existing entries
    return knex.raw('DELETE FROM "member"; ALTER SEQUENCE member_id_seq RESTART WITH 3;')
      .then( () => {
        var members = [{
          id: 1,
          username: 'sam2',
          email: 'sam@gmail.com',
          password: bcrypt.hashSync('sammyg21', 10),
          date: new Date(),
          bio: 'yeeehawww',
          profile_pic: '',
          admin:false,
          visitor:true,
          member:true
        }, {
          id: 2,
          username: 'amgoodman5',
          email: 'amgoodman5@gmail.com',
          password: bcrypt.hashSync('aaron', 10),
          date: new Date(),
          bio: 'yabadaba du',
          profile_pic: '',
          admin:true,
          visitor:true,
          member:false



        }];
        return knex('member').insert(members);
      });
  };
