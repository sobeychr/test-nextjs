import Link from 'next/link';
import { withRouter } from 'next/router';

import Layout from 'Global/Layout';

import List from 'Skills/List';
import TreeList from 'Skills/TreeList';

import { getClassById } from 'Data/classes';
import { getSkillTypeById } from 'Data/skills';

const Page = (props) => {
    const { id, classId, name } = getSkillTypeById(props.typeId);
    const { className } = getClassById(classId);

    return (
        <Layout title={className + ' > ' + name}>
            <TreeList typeId={id} />
            <List typeId={id} />
        </Layout>
    );
};

Page.getInitialProps = async (context) => {
    let { typeId } = context.query;
    typeId = parseInt(typeId);
    return { typeId };
};

export default withRouter(Page);
