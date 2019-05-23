const { isProduction } = require('./config');
const { info } = require('./logs');

const logString = 'info';
const logValue = 'bgBlue';
const log = (url, page) => {
    if(!isProduction) {
        console.log(
            '> added static directory'[logString],
            page[logValue],
            'to listen as'[logString],
            url[logValue]
        );
    }
}

const paths = {
    '/a': './assets'
};

const staticServer = (server, express) => {
    Object.keys(paths).forEach(url => {
        const page = paths[url];
        server.use(url, express.static(page));

        log(url, page);
    });
};

module.exports = staticServer;
