const restify = require('restify');
const routes = require('./routes');
const port = process.env.PORT || 3000;

/* Create a Restify server */
const server = restify.createServer({ name: 'api' });

/* Handle routes */
routes(server);

/* For query params parsing */
server.use(restify.plugins.queryParser());

/* Launch server */
server.listen(port, () => {
    console.log('Restify server started on: localhost:' + port);
});

/* Error catcher */
process.on('uncaughtException', function (err) {
    console.log(err);
});

/* Restify error catcher */
server.on('uncaughtException', function (err) {
    errObj = {
        errors: [{
            status: 500,
            title:  "Internal Error",
            detail: err
        }]
    };

    console.log(JSON.stringify(errObj));
    res.send(500, errObj);
    return next();
});