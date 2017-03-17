const knex = require('./connections');
const bcrypt = require('bcrypt');

module.exports = {
getAllMembers: function(id){
  return knex('member')
           .select()

},
getSingleMemberById: function(id){
    return knex('member')
        .select()
        .where('id', id)
        .first()
},
getOneByEmail: function(email){
     return knex('member')
     .where('email', email)
     .first();
},

create: function(member){
  return knex('member').insert(member, 'id')
  .then(ids => {
    return ids[0];
  });
}
}
