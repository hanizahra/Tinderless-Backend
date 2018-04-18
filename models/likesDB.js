const db = require('../config/dbConfig');

module.exports = {

      create(data) {
            console.log(data, `In the model`)
            return db.one(`INSERT INTO likes (person_they_swiped_yes_on_user_id, swiper_user_id) VALUES (
                  $[person_they_swiped_yes_on_user_id],
                  $[swiper_user_id]
                  )
                  RETURNING *;`, data
            );
      },
      checkForMatch(data){
            console.log(`in the model for checking for a match`, data)
            return db.one(`SELECT * FROM likes WHERE
                  person_they_swiped_yes_on_user_id=$[person_they_swiped_yes_on_user_id]
                  AND
                  swiper_user_id=$[swiper_user_id]`, data)
      }

}

