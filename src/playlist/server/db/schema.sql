CREATE DATABASE IF NOT EXISTS hrr;

USE hrr;

DROP TABLE IF EXISTS current_playlist;

CREATE TABLE current_playlist (_id INT NOT NULL AUTO_INCREMENT, owner VARCHAR(54), name VARCHAR(54), image_url TEXT, songs json, CHECK (JSON_VALID(songs)), PRIMARY KEY (_id));
