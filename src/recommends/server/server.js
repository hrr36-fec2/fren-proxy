const express = require('express');
const path = require('path');
const url = require('url');
const cors = require('cors');

const mdb = require('./db/db.js');

const app = express();
const port = process.env.PORT || 3003;

app.use(cors());

app.use(express.static(path.join(__dirname, '../public')));

app.use('/recommends', (req, res) => {
  if (req.method === 'GET') {
    const limit = Number(url.parse(req.url).pathname.split('/')[1]);
    mdb.query('SELECT * FROM tracks ORDER BY RAND() LIMIT ?', [limit], (err, data) => {
      if (err) {
        console.log(err);
        res.status(500).send(err);
      } else { 
        res.status(200).send(data);
      }
    });
  }
});

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});