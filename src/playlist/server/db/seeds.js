const maria = require('mariadb');
const path = require('path');
const fs = require('fs');

console.log(process.env);

let mdb = maria.createPool({
  host: process.env.AWS_MARIA_URI || 'localhost',
  user: 'root',
  password: process.env.AWS_MARIA_PWD || process.env.MDBP,
  database: 'hrr',
  connectionLimit: 12
});

fs.readFile(path.resolve(__dirname, 'featured.json'), (err, data) => {
  if (err) {
    console.log(err);
  }
  let results = JSON.parse(data);
  let mockData = [];

  for (let i = 0; i < 9; i++) {
    let mockObj = {
      track_id: results.aTracks[i].track_id,
      track_title: results.aTracks[i].track_title,
      track_duration: results.aTracks[i].track_duration,
      artist_name: results.aTracks[i].artist_name,
      album_title: results.aTracks[i].album_title,
      album_image_file: results.aTracks[i].album_image_file,
      track_url: results.aTracks[i].track_url
    };
    mockData.push(mockObj);
  }
  mdb
    .query('INSERT INTO current_playlist (owner, name, image_url, songs) VALUES ("obdb", "hrr36-fec2-sml", "someimg.jpg", ?)', [JSON.stringify(mockData)])
    .then((qResults) => {
      if (!qResults) {
        throw 'failed to seed';
      }
      console.log('done seeding sml');
      return;
    })
    .catch((err) => {
      console.log(err);
    });
  mockData = [];

  for (let i = 10; i < 27; i++) {
    let mockObj = {
      track_id: results.aTracks[i].track_id,
      track_title: results.aTracks[i].track_title,
      track_duration: results.aTracks[i].track_duration,
      artist_name: results.aTracks[i].artist_name,
      album_title: results.aTracks[i].album_title,
      album_image_file: results.aTracks[i].album_image_file,
      track_url: results.aTracks[i].track_url
    };
    mockData.push(mockObj);
  }
  mdb
    .query('INSERT INTO current_playlist (owner, name, image_url, songs) VALUES ("obdb", "hrr36-fec2-med", "someimg.jpg", ?)', [JSON.stringify(mockData)])
    .then((qResults) => {
      if (!qResults) {
        throw 'failed to seed';
      }
      console.log('done seeding med');
      return;
    })
    .catch((err) => {
      console.log(err);
    });
  mockData = [];

  for (let i = 28; i < 54; i++) {
    let mockObj = {
      track_id: results.aTracks[i].track_id,
      track_title: results.aTracks[i].track_title,
      track_duration: results.aTracks[i].track_duration,
      artist_name: results.aTracks[i].artist_name,
      album_title: results.aTracks[i].album_title,
      album_image_file: results.aTracks[i].album_image_file,
      track_url: results.aTracks[i].track_url
    };
    mockData.push(mockObj);
  }
  mdb
    .query('INSERT INTO current_playlist (owner, name, image_url, songs) VALUES ("obdb", "hrr36-fec2-lrg", "someimg.jpg", ?)', [JSON.stringify(mockData)])
    .then((qResults) => {
      if (!qResults) {
        throw 'failed to seed';
      }
      console.log('done seeding lrg');
      return;
    })
    .catch((err) => {
      console.log(err);
    });
  mockData = [];

  for (let i = 55; i < 108; i++) {
    let mockObj = {
      track_id: results.aTracks[i].track_id,
      track_title: results.aTracks[i].track_title,
      track_duration: results.aTracks[i].track_duration,
      artist_name: results.aTracks[i].artist_name,
      album_title: results.aTracks[i].album_title,
      album_image_file: results.aTracks[i].album_image_file,
      track_url: results.aTracks[i].track_url
    };
    mockData.push(mockObj);
  }
  mdb
    .query('INSERT INTO current_playlist (owner, name, image_url, songs) VALUES ("obdb", "hrr36-fec2-exl", "someimg.jpg", ?)', [JSON.stringify(mockData)])
    .then((qResults) => {
      if (!qResults) {
        throw 'failed to seed';
      }
      console.log('done seeding exl');
      return;
    })
    .catch((err) => {
      console.log(err);
    });
  mockData = [];

  // mdb.end();

  console.log('done seeding');
  return;
  
});

