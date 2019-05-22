import Link from 'next/link';

import ClassSkillLink from './ClassSkillLink';

import { getSkillTypes } from 'Utils/getClassData';

const ClassSkills = ({classId}) => {
    const skills = getSkillTypes(classId);

    return (
        <div>
            <nav>
                {skills.map((entry, index) => (
                    <ClassSkillLink key={index} typeId={entry.id}/>
                ))}
            </nav>
        </div>
    );
}
    

export default ClassSkills;
