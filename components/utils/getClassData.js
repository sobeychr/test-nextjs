import classData from 'Db/classes';
import skillTypesData from 'Db/skillTypes';
import skillsData from 'Db/skills';

export const getClassData = (classId) => {
    const res = classData.find(entry => entry.id === classId);

    // console.log('[getClassData]', 'classData', classData);
    // console.log('[getClassData]', classId, res);

    return res;
};

export const getSkillsFromType = (typeId) => {
    const res = skillsData.filter(entry => entry.typeId === typeId);
    return res;
};

export const getSkillTypeData = (typeId) => {
    const res = skillTypesData.find(entry => entry.id === typeId);
    return res;
};

export const getSkillTypesFromClass = (classId) => {
    const res = skillTypesData.filter(entry => entry.classId === classId);
    return res;
};
