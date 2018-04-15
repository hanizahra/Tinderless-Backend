const db = require('../config/dbConfig');

module.exports = {

  create(photo) {
    return db.one(`
      INSERT INTO photos
      (
      photo
      )
      VALUES
      (
      $/photo/
      )
      RETURNING *`,
      photo
      );
  }

}

