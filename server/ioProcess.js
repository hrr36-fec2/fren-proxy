const
  axios = require('axios');

module.exports = function(socket) {

  socket.on('addToPlaylist', (payload) => {
    axios
      .get('http://localhost:3002/api/random')
      .then((results) => {
        if (!results) {
          throw 'failed to get random playlist data';
        }
        socket.emit('newTrackAdded', results.data)
      })
      .catch((err) => {
        console.log('catched failed to add to playlist')
      })
  });

  socket.on('doPlayTrack', (payload) => {
    socket.emit('playAudio', payload);
  });

  socket.on('playerStarted', (payload) => {
    socket.emit('playerStart', payload);
  });

  socket.on('doResetOther', (payload) => {
    socket.emit('resetOther', payload);
  });

  socket.on('getPlaylistData', (payload, cb) => {
    axios
      .get(`http://localhost:3002/api/playlist/${payload}`)
      .then((results) => {
        if (!results) {
          throw 'failed to get playlist data';
        }
        cb(results.data);
      })
      .catch((err) => {
        console.log('failed to get playlist data');
      });
  });

  socket.on('getRecommendsData', (cb) => {
    axios
      .get('http://localhost:3003/recommends/10')
      .then((results) => {
        if (!results) {
          throw 'failed to get recommends data';
        }
        cb(results.data);
      })
      .catch((err) => {
        console.log('failed to get recommends data')
      });
  });

}