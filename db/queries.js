
const knex = require('./connections');
const bcrypt = require('bcrypt');

module.exports = {
  getAllCampsites: function(id){
    return knex('campsite')
             .select()
},

  getAllLocation: function(id){
    return knex('location')
             .select()

  },
  getAllMembers: function(id){
    return knex('member')
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
  getSingleLocationById: function(id){
      return knex('location')
          .select()
          .where('id', id)
          .first()
  },
  getSingleMemberById: function(id){
      return knex('member')
          .select()
          .where('id', id)
          .first()
  },
  getCommentMemberById: function(id){
      return knex('comment')
          .select()
          .where('id', id)
          .first()
  },
  getCampsiteLocation: function(){
    return knex('campsite')
      .select(
          'campsite.id',
          'campsite.name',
          'campsite.type',
          'campsite.description',
          'campsite.picture',
          'video_url',
          'location.address',
          'location.state',
          'location.lat',
          'location.long'
        )
      .join('location', 'location.id', 'campsite.location_id')
      //  .where('location.id', 'campsite.location_id')
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
  },
  createNewMember: function(body) {
      return knex('member')
          .insert(body, 'id')
          .then((id) => {
              return id[0];
          })
          .catch((err) => {
              return err;
          });
  },
  createNewComment: function(body) {
      return knex('comment')
          .insert(body, 'id')
          .then((id) => {
              return id[0];
          })
          .catch((err) => {
              return err;
          });
  },
   createNewLocation: function(body) {
        return knex('location')
            .insert(body, 'id')
            .then((id) => {
                return id[0];
            })
            .catch((err) => {
                return err;
            });
    },

   updateCampsiteById: function(id, body) {
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
    updateMemberById: function(id, body) {
         return knex('member')
             .update(body, '*')
             .where('id', id)
             .then(result => {
                 return result[0];
             })
             .catch((err) => {
                 return err;
             });
     },
     updateLocationById: function(id, body) {
          return knex('location')
              .update(body, '*')
              .where('id', id)
              .then(result => {
                  return result[0];
              })
              .catch((err) => {
                  return err;
              });
      },
      updateCommentById: function(id, body) {
           return knex('comment')
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
    },
    deleteMember: function(id) {
        return knex('Location')
        .del()
         .where('id', id)

        .then(result => {
          return{message: "success"} ;
        })
        .catch((err) => {
            return err;
        });
    },
    deleteLocation: function(id) {
        return knex('Location')
        .del()
         .where('id', id)

        .then(result => {
          return{message: "success"} ;
        })
        .catch((err) => {
            return err;
        });
    },
    deleteComment: function(id) {
        return knex('comment')
        .del()
         .where('id', id)

        .then(result => {
          return{message: "success"} ;
        })
        .catch((err) => {
            return err;
        });
    }

// //get campsite location

//get member comments


  }
