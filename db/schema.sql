DROP TABLE IF EXISTS active_at_location;
DROP TABLE IF EXISTS locations;
DROP TABLE IF EXISTS matches;
DROP TABLE IF EXISTS users;

-- user handing singup signin
-- user has only one profile
-- creaing user is POST
-- updating info of user s PUT
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username TEXT,
    email TEXT,
    -- hash TEXT,
    date_created TIMESTAMP NOT NULL DEFAULT NOW(),
    gender TEXT,
    age INTEGER,
    gender_seeking TEXT,
    age_seeking TEXT,
    photo TEXT,
    profile_id INTEGER REFERENCES users ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE locations (
  id SERIAL PRIMARY KEY,
  latitude INTEGER,
  longitude INTEGER,
  placeId INTEGER REFERENCES users ON DELETE CASCADE ON UPDATE CASCADE,
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
