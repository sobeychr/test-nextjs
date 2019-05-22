import classData from 'Db/classes';
import skillTypesData from 'Db/skillTypes';
import skillsData from 'Db/skills';

export const getClassData = (classId) => {
    const res = classData.find(entry => entry.id === classId);

    // console.log('[getClassData]', 'classData', classData);
    // console.log('[getClassData]', classId, res);

    return res;
};

export const getSkillData = (typeId) => {
    const res = skillTypesData.find(entry => entry.class === classId);
    return res;
};

export const getSkillType = (typeId) => {
    const res = skillTypesData.find(entry => entry.id === typeId);
    return res;
};

export const getSkillTypes = (classId) => {
    const res = skillTypesData.filter(entry => entry.class === classId);
    return res;
};
