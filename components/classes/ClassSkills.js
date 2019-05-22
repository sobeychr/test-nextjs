import Link from 'next/link';

import ClassSkillLink from './ClassSkillLink';

import { getSkillTypesFromClass } from 'Utils/getClassData';

const ClassSkills = ({classId}) => {
    const skills = getSkillTypesFromClass(classId);

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
