const path = require('path');
const withImages = require('next-images');

const alias = [
    ['Assets', 'assets'],
    ['Classes', 'components/classes'],
    ['Comp', 'components'],
    ['Db', 'database'],
    ['Global', 'components/global'],
    ['Server', 'Server'],
    ['Skills', 'components/skills'],
    ['Utils', 'components/utils'],
];

module.exports = withImages({
    webpack (config, options) {
        
        alias.forEach(entry => {
            config.resolve.alias[entry[0]] = path.join(__dirname, entry[1]);
        });

        return config;
    }
});
