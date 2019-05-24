import Entry from './Entry';

import { getSkillsFromType } from 'Utils/getClassData';

const List = ({typeId}) => {
    const list = getSkillsFromType(typeId);

    return (
        <div>
            {list.map((entry, index) => <Entry id={entry.id} key={index} /> )}
        </div>
    );
};

export default List;
