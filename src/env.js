const environments = {
  api: {
    port: 3000,
    host: 'http://4.186.32.201:3000',
  },
  database: {
    connection: process.env.connection || 'mongodb://127.0.0.1:27017/ecommerce',
  },
  authenticationToken: {
    secret: '232ioh3po4u23h42e23e03023ieh230he23',
  },
};

module.exports = environments;
