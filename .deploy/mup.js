module.exports = {
    servers: {
      one: {
        host: process.env.DPIP,
        username: process.env.DPUN,
        password: process.env.DPPW
        // pem: './mykey',
      },
    },

    meteor: {
      name: 'meteor-app',
      path: '../',
      servers: {
        one: {},
      },
      env: {
        PORT: 3000,
        ROOT_URL: 'http://meteor-app.bcbrian.com',
        MONGO_URL: 'mongodb://localhost/meteor'
      },
      deployCheckWaitTime: 60
    },

    mongo: {
      oplog: false,
      port: 3001,
      servers: {
        one: {},
      },
    },
  };
