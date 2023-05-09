const app = require('./app');
const http = require('http');

const server = http.createServer(app);


server.listen(3003, async () => {
  console.log('El servidor corre en el puerto 3003');
});