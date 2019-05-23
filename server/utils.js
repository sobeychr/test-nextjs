const classData = require('./../database/classes.json');
const skillTypeData = require('./../database/skillTypes.json');

const getClassFromUrl = (classUrl) => {
    const data = classData.find(entry => entry.name === classUrl);
    if(typeof data !== 'undefined') {
        return data;
    }
    return null;
};

const getTypeFromUrl = (classId, typeUrl) => {
    const typeName = typeUrl.replace(/\-/g, ' ');
    const data = skillTypeData.find(entry => (
        entry.classId === classId
        && entry.name === typeName
    ));
    if(typeof data !== 'undefined') {
        return data;
    }
    return null;
};

module.exports = {
    getClassFromUrl,
    getTypeFromUrl
};
