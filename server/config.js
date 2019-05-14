require('dotenv').config();

const isDev = process.env.ENV === 'development';
const isStage = process.env.ENV === 'stage';
const isProduction = process.env.ENV === 'production';

const env = isDev
    ? 'dev'
    : isStage
        ? 'stage'
        : 'prod';

const port = process.env.PORT || 3000;

module.exports = {
    isDev,
    isStage,
    isProduction,
    env,
    port
};
