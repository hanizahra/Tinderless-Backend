const db = require('../config/dbConfig');

module.exports = {

      create(user) {
            return db.one(`
                  INSERT INTO users
                  (
                  email,
                  username,
                  password,
                  gender,
                  age,
                  gender_seeking,
                  age_seeking
                  )
                  VALUES
                  (
                  $/email/,
                  $/username/,
                  $/password/,
                  $/gender/,
                  $/age/,
                  $/gender_seeking/,
                  $/age_seeking/
                  )
                  RETURNING *`,
                  user

            );
      },

      updateLocation(location) {
            return db.none(`
                  UPDATE users
                  SET location_name = $1,
                  formatted_address = $2,
                  place_id = $3,
                  location_url = $4
                  WHERE id = $5`,
                  [
                        location.location_name,
                        location.formatted_address,
                        location.place_id,
                        location.location_url,
                        location.userId,
                  ]
            );
      },

      getNearbyPeople(userId)
      {
            return db.one(`select
                  place_id from users
                  where id = $1`, [userId.userId])
            .then(data =>
            {
                  console.log('userDB.getNearbyPeople - data: ', data);
                  return db.many(`
                        SELECT *
                        FROM  users
                        JOIN photos
                        ON
                        users.id = photos.user_id
                        where place_id = $1`,
                        data.place_id)
            });
      },

      showOne(id) {
            return db.one(`
                  SELECT *
                  FROM users
                  WHERE id = $1`, id
            );
      },

      update(user) {
            return db.one(`
                  UPDATE users
                  SET user = $/user/
                  WHERE id = $/id/
                  RETURNING *`,
                  user
            );
      },

      login(user) {
            return db.one(`
                  SELECT *
                  FROM users
                  WHERE username = $1 and password = $2`,
                  [user.username, user.password]
            );
      }

}


