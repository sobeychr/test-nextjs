const { env, isProduction, port } = require('./config');
const dynamicServer = require('./dynamic');
const staticServer = require('./static');

const express = require('express');
const next = require('next');

const app = next({ isProduction });
const handle = app.getRequestHandler();

console.log('> launching server as', env);

app
    .prepare()
    .then(() => {
        const server = express();

        dynamicServer(server, app);
        staticServer(server, express);

        server.get('*', (req, res) => {
            return handle(req, res);
        });

        server.listen(port, err => {
            if(err) {
                throw err;
            }
            console.log('> Ready on http://localhost:' + port);
        });
    })
    .catch(ex => {
        console.error(ex.stack);
        process.exit(1);
    });
