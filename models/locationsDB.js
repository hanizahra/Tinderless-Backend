const db = require('../config/dbConfig');

module.exports = {

      create(location) {
            return db.one(`
                  INSERT INTO locations
                  (
                  name,
                  formatted_address,
                  place_id,
                  url
                  )
                  VALUES
                  (
                  $/name/,
                  $/formatted_address/,
                  $/place_id/,
                  $/url/
                  )
                  RETURNING *`,
                  location
            );
      }

}

