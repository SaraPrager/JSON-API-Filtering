const variables = require('./variables');

module.exports = (server) => {
  variables(server);
  server.get('*', (req, res, next) => {
    res.send('Home page! Navigate to /variables to see the POC.');
    return next();
  });
};
