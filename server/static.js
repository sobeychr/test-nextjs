const paths = {
    '/t' : './html'
};

const staticServer = (server, express) => {
    Object.keys(paths).forEach(url => {
        const localPath = paths[url];
        server.use(url, express.static(localPath));

        console.log('[staticServer]', url, localPath);
    });
};

module.exports = staticServer;
