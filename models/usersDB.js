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
  }

}


