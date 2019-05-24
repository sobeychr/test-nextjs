import Entry from './Entry';

import { getSkillTypeById } from 'Utils/skills';

const List = ({typeId}) => {
    const list = getSkillTypeById(typeId);

    return (
        <div>
            {list.map((entry, index) => <Entry id={entry.id} key={index} /> )}
        </div>
    );
};

export default List;
