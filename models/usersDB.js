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


