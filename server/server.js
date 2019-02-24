const
  path = require('path'),
  express = require('express'),
  socket_io = require('socket.io'),
  compress = require('compression'),
  body_parser = require('body-parser'),
  ioProcess = require('./ioProcess.js'),
  static_route = require('express').static(path.join(__dirname, '../public'));

module.exports = function() {
  let
    app = new express(),
    server = app.listen(0, () => console.log(`process id : ${process.pid}`)),
    io = socket_io(server);

  app
    .use(body_parser.urlencoded({ extended: false }))
    .use(body_parser.json())
    .use(static_route)
    .use('*', (_, res) => {
      res.sendFile(path.resolve(__dirname, '..', 'public', 'index.html'));
    })
    .use(compress());

  io.on('connection', ioProcess);

  process
    .on('message', (msg, conn) => {
      if (msg !== 'session:sticky-connection') {
        return;
      }
      server.emit('connection', conn)
      conn.resume();
    });

}
