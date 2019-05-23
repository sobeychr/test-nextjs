const { getClassFromUrl, getTypeFromUrl } = require('./utils');

const redirect = (res, path) => {
    res.statusCode = 301;
    res.redirect(path);
};

const dynamicServer = (server, app) => {
    let query;

    // Class page
    server.get([
        /classes\//,
        '/classes/:classUrl'
    ], (req, res) => {
        const { classUrl } = req.params;

        const classData = getClassFromUrl(classUrl);
        if(!classData) {
            redirect(res, '/classes');
            return;
        }

        const query = { classId: classData.id };
        app.render(req, res, '/class', query);
    });

    // Skills page
    server.get([
        /skills\//,
        '/skills/:classUrl',
        '/skills/:classUrl/:typeUrl'
    ], (req, res) => {
        const { classUrl, typeUrl } = req.params;

        if(!classUrl || !typeUrl) {
            redirect(res, '/skills');
            return;
        }

        const classData = getClassFromUrl(classUrl);
        if(!classData) {
            redirect(res, '/skills');
            return;
        }

        const typeData = getTypeFromUrl(classData.id, typeUrl);
        if(!typeData) {
            redirect(res, '/skills');
            return;
        }

        const query = {
            classId: classData.id,
            typeId: typeData.id
        };
        app.render(req, res, '/skill', query);
    });
};

module.exports = dynamicServer;
