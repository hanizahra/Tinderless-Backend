const db = require('../config/dbConfig');

module.exports = {

  create(user) {
    return db.one(`
      INSERT INTO users
      (
      username,
      email,
      gender,
      age,
      gender_seeking,
      age_seeking,
      photo,
      profile_id,
      )
      VALUES
      (
      $/username/,
      $/email/,
      $/gender/,
      $/age/,
      $/gender_seeking/,
      $/age_seeking/,
      $/photo/,
      $/profile_id/
      )
      RETURNING *`,
      user
      );
  }

}

