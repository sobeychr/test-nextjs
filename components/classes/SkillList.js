import Entry from './Entry';

import classData from 'Db/classes';

const links = [];
classData.forEach(entry => {
    links.push({
        id: entry.id,
        name: entry.name
    });
});

const SkillList = () => (
    <div>
        {links.map((entry, index) => <Entry {...entry} key={index} /> )}
    </div>
);

export default SkillList;
