const paths = {
    '/d/:page' : '/dym'
};

const dynamicServer = (server, app) => {
    Object.keys(paths).forEach(url => {
        const actualPage = paths[url];
        console.log('[dynamicServer]', url, actualPage);

        server.get(url, (req, res) => {
            const queryParams = { page: req.params.page };
            app.render(req, res, actualPage, queryParams);
        });
    });
};

module.exports = dynamicServer;
