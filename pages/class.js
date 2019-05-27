import Link from 'next/link';
import { withRouter } from 'next/router';

import Layout from 'Global/Layout';

import Description from 'Classes/Description';
import TypeList from 'Skills/TypeList';

import { getClassById } from 'Data/classes';

const Page = ({classId}) => {
    const { name } = getClassById(classId);
    return (
        <Layout title={name}>
            <Description id={classId} />
            <TypeList classId={classId} />
        </Layout>
    );
};

Page.getInitialProps = async (context) => {
    let { classId } = context.query;
    classId = parseInt(classId);
    return { classId };
};

export default withRouter(Page);
