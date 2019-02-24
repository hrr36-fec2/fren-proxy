var mysql = require('mysql');
const axios = require('axios');
var SQL = require('sql-template-strings');


var seed = function (dbConnection) {
  var recordsInserted = 0;
  axios
    .get('https://freemusicarchive.org/featured.json')
    .then(results => {
      var songs = [
        'https://storage.cloud.google.com/scootify.appspot.com/Blue_Dot_Sessions_-_01_-_Stickle.mp3',
        'https://storage.cloud.google.com/scootify.appspot.com/Blue_Dot_Sessions_-_02_-_Bridgewalker.mp3',
        'https://storage.cloud.google.com/scootify.appspot.com/Blue_Dot_Sessions_-_03_-_The_Poplar_Grove.mp3',
        'https://storage.cloud.google.com/scootify.appspot.com/Blue_Dot_Sessions_-_04_-_Silver_Lanyard.mp3',
        'https://storage.cloud.google.com/scootify.appspot.com/Blue_Dot_Sessions_-_05_-_Our_Only_Lark.mp3',
        'https://storage.cloud.google.com/scootify.appspot.com/Blue_Dot_Sessions_-_06_-_Donnalee.mp3',
        'https://storage.cloud.google.com/scootify.appspot.com/Blue_Dot_Sessions_-_07_-_Basketliner.mp3',
        'https://storage.cloud.google.com/scootify.appspot.com/Blue_Dot_Sessions_-_08_-_Delamine.mp3',
        'https://storage.cloud.google.com/scootify.appspot.com/Blue_Dot_Sessions_-_09_-_Lovers_Hollow.mp3',
        'https://storage.cloud.google.com/scootify.appspot.com/Blue_Dot_Sessions_-_10_-_True_Blue_Sky.mp3',
      ]
      // console.log(results.data.aTracks);
      var tracks = results.data.aTracks;
      for (var i = 0; i < tracks.length; i++) {
        var track = tracks[i];
        //changing track_duration value from string of hrs:min:sec to seconds
        var arr = track.track_duration.split(':');
        var totalSeconds = 0;
        totalSeconds = parseInt(arr[0], 10) * 3600;
        totalSeconds += parseInt(arr[1], 10) * 60;
        totalSeconds += parseInt(arr[2], 10) * 1;

        //changing album_image_file value to a url
        var albumArtUrl =
          'https://freemusicarchive.org/file/' + track.album_image_file;

        var trackFileUrl = songs[i % songs.length];

        dbConnection.query(
          SQL`INSERT INTO playlist (track_id, track_title, artist_name, album_title, track_duration, album_image_file, track_file_url) VALUES (
            ${track.track_id}, ${track.track_title}, ${track.artist_name}, 
            ${track.album_title}, ${totalSeconds}, ${albumArtUrl}, ${trackFileUrl})`,
          function (err) {
            if (err) {
              console.log(err, 'ERROR IN SEED SCRIPT FOR LOOP!');
            } else {
              recordsInserted++;
              console.log(recordsInserted + ' records inserted');
            }
          }
        );
      }
      dbConnection.end();
    })
    .catch(error => {
      console.log(error, 'Error seeding db!');
    });
};

//call the function if module is being run from the command line
if (require.main === module) {
  dbConnection = mysql.createConnection({
    host: process.env.AWS_MARIA_URI,
    user: 'root',
    password: process.env.AWS_MARIA_PWD,
    database: 'hrr'
    // debug: true
  });

  dbConnection.connect(function (err) {
    if (err) {
      console.log(err);
    }
  });
  seed(dbConnection);
}
