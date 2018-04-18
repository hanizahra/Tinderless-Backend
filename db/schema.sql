\c datingapp

DROP TABLE IF EXISTS matches;
DROP TABLE IF EXISTS photos;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS likes;


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
    location_name TEXT,
    formatted_address TEXT,
    place_id TEXT,
    location_url TEXT,
    date_created TIMESTAMP NOT NULL DEFAULT NOW()
);


CREATE TABLE photos (
    id SERIAL PRIMARY KEY,
    user_id INTEGER,
    photo TEXT,
    date_created TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE likes (
  id SERIAL PRIMARY KEY,
  swiper_user_id INTEGER,
  person_they_swiped_yes_on_user_id INTEGER,
  date_created TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE matches (
  id SERIAL PRIMARY KEY,
  user_one INTEGER,
  user_two INTEGER
);

--1,2
--2,1

