const db = require('../config/dbConfig');

module.exports = {

  create(photo) {
    return db.one(`
      INSERT INTO photos
      (
      user_id,
      photo
      )
      VALUES
      (
      $/user_id/,
      $/photo/
      )
      RETURNING *`,
      photo
      );
  },

  showOne(id) {
    return db.one(`
          SELECT *
          FROM photos
          WHERE user_id = $1`, id
    );
  }

}

