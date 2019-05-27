import skillTypesData from 'Db/skillTypes';
import skillsData from 'Db/skills';

import { getClassById } from './classes';

import { zeroFill } from 'Utils/numbers';

export const getAltSkillType = typeId => {
    const current = getSkillTypeById(typeId);

    return skillTypesData.filter(entry => (
        entry.id !== typeId
        && entry.classId === current.classId
    ));
};

export const getSkillAlias = name => name.replace(/\ /g, '-');

export const getSkillById = id => skillsData.find(entry => entry.id === id);

export const getSkillsByType = typeId => skillsData.filter(entry => entry.typeId === typeId);

export const getSkillLink = typeId => {
    const typeData = getSkillTypeById(typeId);
    const classData = getClassById(typeData.classId);
    const alias = getSkillAlias(typeData.name);

    return {
        alias: '/skills/' + classData.name + '/' + alias,
        href: '/skill?typeId=' + typeId
    };
};

export const getSkillTypeById = id => skillTypesData.find(entry => entry.id === id);

export const getTreeImage = typeId => require('Assets/skills/tree-' + zeroFill(typeId) + '.jpg');

export const getSkillTypeByClass = classId => skillTypesData.filter(entry => entry.classId === classId);
