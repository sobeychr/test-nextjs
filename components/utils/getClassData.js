import classData from 'Db/classes';
import skillTypesData from 'Db/skillTypes';
import skillsData from 'Db/skills';

export const getClassData = (classId) => classData.find(entry => entry.id === classId);

export const getSkillData = (skillId) => skillsData.find(entry => entry.id === skillId);

export const getSkillsFromType = (typeId) => skillsData.filter(entry => entry.typeId === typeId);

export const getSkillTypeData = (typeId) => skillTypesData.find(entry => entry.id === typeId);

export const getSkillTypeImg = (typeId) => require('Assets/skills/tree-' + typeId + '.jpg');

export const getSkillTypesFromClass = (classId) => skillTypesData.filter(entry => entry.classId === classId);
