import Link from 'next/link';
import { withRouter } from 'next/router';

import Layout from 'Global/Layout';

import List from 'Skills/List';
import TreeList from 'Skills/TreeList';

import {
    getClassData,
    getSkillTypeData
} from 'Utils/getClassData';

const Skill = (props) => {
    const { id, classId, name } = props.typeData;
    const classData = getClassData(classId);

    return (
        <Layout title={classData.name + ' > ' + name}>
            <TreeList typeId={id} />
            <List typeId={id} />
        </Layout>
    );
};

Skill.getInitialProps = async (context) => {
    const { typeId } = context.query;
    const typeData = getSkillTypeData(parseInt(typeId));
    return { typeData };
};

export default withRouter(Skill);
