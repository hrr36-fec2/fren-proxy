const mm = require('music-metadata');
const fs = require('fs');
const path = require('path');

fs.readdir(path.join(__dirname, 'songs'), (err, data) => {
  if (err) {return console.log(err)}

  let metadata = [];

  for (let song of data) {
    metadata.push(mm.parseFile(path.join(__dirname, 'songs', song))
      .then(data => {
        delete data.common.picture;
        return data;
      }).catch(err => {
        console.log(err);
      }));
  }

  Promise.all(metadata)
    .then(array => {
      fs.writeFile(path.join(__dirname, 'songs.js'), JSON.stringify(array), err => {
        if (err) {
          console.log(err);
        }
      });
    });
});
