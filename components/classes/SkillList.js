import Entry from './Entry';

import classData from 'Db/classes';

const SkillList = () => (
    <div>
        {classData.map((entry, index) => <Entry id={entry.id} key={index} /> )}
    </div>
);

export default SkillList;
