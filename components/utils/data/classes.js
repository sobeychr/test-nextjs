import classData from 'Db/classes';

export const getClassById = id => classData.find(entry => entry.id === id);

export const getClassImage = id => require('Assets/classes/' + id + '.jpg');
