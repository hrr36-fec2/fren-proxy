const 
  path = require('path'),
  express = require('express')(),
  router = require('./api/router.js'),
  body_parser = require('body-parser'),
  static_route = require('express').static(path.join(__dirname, '../dist')),
  port = process.env.PORT || 3002;

express
  .use(require('cors')())
  .use(body_parser.urlencoded({ extended: false }))
  .use(body_parser.json())
  .use(static_route)
  .use('/api', router)
  .use('*', (__, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'dist', 'index.html'));
  });
  
express.listen(port, () => { console.log(`express is listening at port ${port}`); });