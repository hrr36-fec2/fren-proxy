const 
  net = require('net'),
  cluster = require('cluster'),
  cpus = require('os').cpus().length,
  startProcess = require('./server.js');

switch (cluster.isMaster) {
  case true: distributeProcess(); break;
  case false:
  default: startProcess();
}

function distributeProcess() {

  let
    workers = [],
    port = process.env.PORT || 3000,
    clust = cpus > 2 ? cpus : 3;
  
  for (let i = 0; i < clust; i++) {
    createClust(i)
  }

  net
    .createServer({ pauseOnConnect: true }, (conn) => {
      let
        // worker = workers[worker_index(connection.remoteAddress, num_processes)];
        worker = workers[hash(conn.remoteAddress) % clust];

        worker.send('session:sticky-connection', conn);
    })
    .listen(port, () => console.log(`server is listening at port : ${port}`));

  function createClust(i) {
    workers[i] = cluster.fork();
    workers[i]
      .on('exit', () => {
        console.log('cluster exited and re-created', i);
        createClust(i);
      });
  }

  // since farmhash is not pure javascript I need other hashing function
  // https://github.com/darkskyapp/string-hash
  function hash(str) {
    let 
      hash = 5381,
      i    = str.length;
  
    while(i) {
      hash = (hash * 33) ^ str.charCodeAt(--i);
    }
  
    /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
     * integers. Since we want the results to be always positive, convert the
     * signed int to an unsigned by doing an unsigned bitshift. */

    return hash >>> 0;
  }

  // this one is using farmhash, which is been used by the original code on socket.io
  // function worker_index(ip, len) {
  //   fh = require('farmhash')
  //   return fh.fingerprint32(ip) % len;
  // }

}