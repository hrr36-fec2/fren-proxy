const maria = require('mariadb');
const axios = require('axios');

let mdb, holder;

describe('should be able to connect and communicate with maria', () => {
  beforeAll(async () => {
    mdb = await maria.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'mar1a',
      database: 'hrr'
    });
  })
  test('this should be invoked if beforeAll is successful', () => {
    expect('maria').toBe('maria');
  });
  test('should be able to get a playlist base on id', () => {
    mdb
      .query('SELECT _id FROM current_playlist WHERE _id = ?', [1])
      .then((results) => {
        expects(results).toBe(1);
      });
  });
  test('should be able to make request on api and get the playlist', () => {
    axios
      .get('http://localhost:3002/api/playlist/1')
      .then((results) => {
        let parsed_results = JSON.parse(results);
        expects(parsed_results.contructor).toBe(Array);
      });
  });
  test('should be able to delete and insert song on the playlist', () => {
    axios
      .get('http://localhost:3002/api/playlist/4')
      .then(async (results) => {
        let parsed_results = JSON.parse(results);
        let parsed_total = parsed_results.length - 1
        let songs_count = parsed_results.length;

        holder = parsed_results[parsed_total];

        try {
          await axios.delete(`http://localhost:3002/api/playlist/4/${parsed_total}`, parsed_total);
          axios
            .get('http://localhost:3002/api/playlist/4')
            .then((deleteResults) => {
              let parsed_deleteResults = JSON.parse(results);
              let parsed_totalAfterDelete = parsed_deleteResults.length - 1;
              expect(parsed_totalAfterDelete).toBe(parsed_total - 1);
            })
        }
        catch (err) {
          console.log(err);
        }

        try {
          await axios.post(`http://localhost:3002/api/playlist`, JSON.stringify(holder));
          axios
            .get('http://localhost:3002/api/playlist/4')
            .then((postResults) => {
              let parsed_postResults = JSON.parse.results;
              let parsed_totalAfterPost = parsed_postResults.length - 1;
              expect(parsed_totalAfterPost).toBe(parsed_total);
            })
        }
        catch (err) {
          console.log(err);
        }

        expects(songs_count).toBe(songs_count);
      });
  });
  afterAll((done) => {
    mdb.end();
    done();
  })
});
