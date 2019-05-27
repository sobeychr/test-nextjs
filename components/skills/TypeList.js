import TypeEntry from './TypeEntry';

import { getSkillTypeByClass } from 'Data/skills';

const TypeList = ({classId}) => {
    const types = getSkillTypeByClass(classId);
    return (
        <nav>
            {types.map((entry, index) => (
                <TypeEntry typeId={entry.id} key={index} />
            ))}
        </nav>
    );
};

export default TypeList;
