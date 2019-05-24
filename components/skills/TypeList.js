import TypeEntry from './TypeEntry';

import { getSkillTypesFromClass } from 'Utils/getClassData';

const TypeList = ({classId}) => {
    const types = getSkillTypesFromClass(classId);
    
    return (
        <nav>
            {types.map((entry, index) => (
                <TypeEntry typeId={entry.id} key={index} />
            ))}
        </nav>
    );
};

export default TypeList;
