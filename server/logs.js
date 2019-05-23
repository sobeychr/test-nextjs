const { isProduction } = require('./config');
const colors = require('colors');

colors.setTheme({
    debug: 'grey',
    error: 'red',
    info: 'cyan',
    log: 'magenta',
    success: 'green',
    warning: 'yellow'
});

const consoleLog = (type, label, value) => {
    console.log(('> ' + label)[type], value);
};

const debug = (label, value) => {
    if(!isProduction) {
        consoleLog('debug', label, value);
    }
};

const error = (label, value) => {
    consoleLog('error', label, value);
};

const info = (label, value) => {
    consoleLog('info', label, value);
};

const log = (label, value ) => {
    if(!isProduction) {
        consoleLog('log', label, value);
    }
};

const success = (label, value) => {
    consoleLog('success', label, value);
};

const warning = (label, value) => {
    consoleLog('warning', label, value);
};


module.exports = {
    debug,
    error,
    info,
    log,
    success,
    warning
};
