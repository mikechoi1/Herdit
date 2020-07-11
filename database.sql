CREATE DATABASE redditclone;

CREATE TABLE account(
    id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    age NUMERIC,
    description VARCHAR(100)

)