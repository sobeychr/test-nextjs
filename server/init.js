const { isProduction, env, host, port } = require('./config');
const { error, info, success }  = require('./logs');
const dynamicServer = require('./dynamic');
const staticServer = require('./static');

const express = require('express');
const next = require('next');

const app = next({ isProduction });
const handle = app.getRequestHandler();

info('launching as', env);

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
            success('Ready on', (host + ':' + port));
        });
    })
    .catch(err => {
        // console.error(err.stack);
        error('Unable to launch server', err);
        process.exit(1);
    });
