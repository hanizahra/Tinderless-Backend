DROP TABLE IF EXISTS active_at_location;
DROP TABLE IF EXISTS matches;
DROP TABLE IF EXISTS locations;
DROP TABLE IF EXISTS photos;
DROP TABLE IF EXISTS users;

-- user handing singup signin
-- user has only one profile
-- creaing user is POST
-- updating info of user s PUT
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email TEXT,
    username TEXT,
    password TEXT,
    -- hash TEXT,
    gender TEXT,
    age TEXT,
    gender_seeking TEXT,
    age_seeking TEXT,
    date_created TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE locations (
  id SERIAL PRIMARY KEY,
  name TEXT,
  formatted_address TEXT,
  place_id TEXT,
  url TEXT,
  date_created TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE photos (
    id SERIAL PRIMARY KEY,
    photo TEXT,
    date_created TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE active_at_location (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users ON DELETE CASCADE ON UPDATE CASCADE,
    place_id INTEGER REFERENCES locations ON DELETE CASCADE ON UPDATE CASCADE,
    date_created TIMESTAMP NOT NULL DEFAULT NOW()
);


CREATE TABLE matches (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users ON DELETE CASCADE ON UPDATE CASCADE,
  date_created TIMESTAMP NOT NULL DEFAULT NOW()
);
