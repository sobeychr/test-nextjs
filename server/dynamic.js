const { isProduction } = require('./config');
const { info } = require('./logs');

const logString = 'info';
const logValue = 'bgBlue';
const log = ({url, page, params}) => {
    if(!isProduction) {
        console.log(
            '> added dynamic path'[logString],
            page[logValue],
            'to listen as'[logString],
            url[logValue],
            'with params'[logString],
            params
        );
    }
}

const paths = [
    {
        url: '/d/:page',
        page: '/dym',
        params: ['page']
    },
    {
        url: '/classes/:className',
        page: '/class',
        params: ['className']
    },
];

const dynamicServer = (server, app) => {
    paths.forEach(entry => {
        const { url, page, params } = entry;
        log(entry);

        server.get(url, (req, res) => {
            const query = {};
            params.forEach(entry => {
                query[entry] = req.params[entry];
            });
            
            app.render(req, res, page, query);    
        });

    });
};

module.exports = dynamicServer;
