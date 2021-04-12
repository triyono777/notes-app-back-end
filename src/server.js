const Hapi = require('@hapi/hapi');
const routes = require('./routes');


const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: process.env.NODE_ENV !== 'production' ? 'localhost' : '172.31.39.32',
  });
  server.route(routes);
  await server.start();
  console.log(`Server berjalanan pada ${server.info.uri}`);
};

init();
