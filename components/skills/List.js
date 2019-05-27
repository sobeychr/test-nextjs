import Entry from './Entry';

import { getSkillsByType } from 'Data/skills';

const List = ({typeId}) => {
    const list = getSkillsByType(typeId);

    return (
        <div>
            {list.map((entry, index) => <Entry id={entry.id} key={index} /> )}
        </div>
    );
};

export default List;
