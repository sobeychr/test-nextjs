import Link from 'next/link';
import { withRouter } from 'next/router';

import Layout from 'Global/Layout';

import Description from 'Classes/Description';
import TypeList from 'Skills/TypeList';

import { getClassData } from 'Utils/getClassData';

const Page = ({classData}) => {
    const { id, description, name } = classData;
    return (
        <Layout title={name}>
            <Description name={name} description={description} />
            <TypeList classId={id} />
        </Layout>
    );
};

Page.getInitialProps = async (context) => {
    const { classId } = context.query;
    const classData = getClassData(parseInt(classId));
    return { classData };
};

export default withRouter(Page);
