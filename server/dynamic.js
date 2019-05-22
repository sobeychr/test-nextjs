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
};

const paths = [
    {
        url: '/classes/:classId',
        page: '/class',
        params: ['classId']
    }
];

const dynamicServer = (server, app) => {
    let query;

    paths.forEach(entry => {
        const { url, page, params } = entry;
        log(entry);

        server.get(url, (req, res) => {
            query = {};
            params.forEach(entry => {
                query[entry] = req.params[entry];
            });
            
            app.render(req, res, page, query);    
        });

    });
};

module.exports = dynamicServer;
