import Link from 'next/link';
import { withRouter } from 'next/router';

import Layout from 'Global/Layout';

import ClassDescription from 'Classes/ClassDescription';
import ClassSkills from 'Classes/ClassSkills';

import { getClassData } from 'Utils/getClassData';

const Class = (props) => {
    const { id, description, name } = props.classData;

    return (
        <Layout title={name}>
            <ClassDescription name={name} description={description} />
            <ClassSkills classId={id} />
        </Layout>
    );
};

Class.getInitialProps = async (context) => {
    const { classId } = context.query;
    const classData = getClassData(parseInt(classId));

    // console.log('[getInitialProps]', 'context', context);
    // console.log('[getInitialProps]', 'classData', classData);

    /*
    if(!classData) {
        res.statusCode = 404;
        res.end('Not found');
        return;
    }
    */

    return { classData };
};

export default withRouter(Class);
