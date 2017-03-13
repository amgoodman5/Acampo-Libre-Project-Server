
const knex = require('./connections');
const bcrypt = require('bcrypt');

module.exports = {
  getAllCampsites: function(id){
    return knex('campsite')
             .select()

  },
  getCampsiteByUser: function(id){
    return knex('campsite')
             .select()
             .where('member_id', id)


  },
  getSingleCampsiteById: function(id){
      return knex('campsite')
          .select()
          .where('id', id)
          .first()
  },
  createNewCampsite: function(body) {
      return knex('campsite')
          .insert(body, 'id')
          .then((id) => {
              return id[0];
          })
          .catch((err) => {
              return err;
          });
  },  updateCampsiteById: function(id, body) {
        return knex('campsite')
            .update(body, '*')
            .where('id', id)
            .then(result => {
                return result[0];
            })
            .catch((err) => {
                return err;
            });
    },
    deleteCampsite: function(id) {
        return knex('campsite')
        .del()
         .where('id', id)

        .then(result => {
          return{message: "success"} ;
        })
        .catch((err) => {
            return err;
        });
    }

  }
