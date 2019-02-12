const
  path = require('path'),
  express = require('express')(),
  port = process.env.PORT || 3000,
  body_parser = require('body-parser'),
  static_route = require('express').static(path.join(__dirname, 'public'));

express
  .use(body_parser.urlencoded({ extended: false }))
  .use(body_parser.json())
  .use(static_route)
  .use('*', (_, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
  });

express.listen(port, () => { console.log(`express is listening at port ${port}`); });
