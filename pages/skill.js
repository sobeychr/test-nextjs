import Link from 'next/link';
import { withRouter } from 'next/router';

import Layout from 'Global/Layout';

import SkillInfo from 'Classes/SkillInfo';

import {
    getClassData,
    getSkillsFromType,
    getSkillTypeData
} from 'Utils/getClassData';

const Skill = (props) => {
    const { id, classId, name } = props.typeData;
    const skills = getSkillsFromType(id);
    const classData = getClassData(classId);

    return (
        <Layout title={classData.name + ' > ' + name}>
            {skills.map((entry, index) => <SkillInfo {...entry} key={index} /> )}

            <style jsx>{`
                a {
                    font-size: 24px;
                    font-weight: bold;
                }
                a:before {
                    content: "> ";
                }
            `}</style>
        </Layout>
    );
};

Skill.getInitialProps = async (context) => {
    const { typeId } = context.query;
    const typeData = getSkillTypeData(parseInt(typeId));

    return { typeData };
};

export default withRouter(Skill);
