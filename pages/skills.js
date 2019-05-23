import Link from 'next/link';
import Layout from 'Global/Layout';

import SkillTypeClass from 'Classes/SkillTypeClass';

import classData from 'Db/classes';

const Skills = () => (
    <Layout title='Skills'>
        {classData.map((entry, index) => <SkillTypeClass classId={entry.id} key={index} />)}
    </Layout>
);

export default Skills;
