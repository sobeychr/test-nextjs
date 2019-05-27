import skillTypesData from 'Db/skillTypes';
import skillsData from 'Db/skills';

import { zeroFill } from 'Utils/numbers';

export const getSkillById = (id) => skillsData.find(entry => entry.id === id);

export const getSkillsByType = (typeId) => skillsData.filter(entry => entry.typeId === typeId);

export const getSkillTypeById = (id) => skillTypesData.find(entry => entry.id === id);

export const getTreeImage = (typeId) => require('Assets/skills/tree-' + zeroFill(typeId) + '.jpg');

export const getSkillTypeByClass = (classId) => skillTypesData.filter(entry => entry.classId === classId);
