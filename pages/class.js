import Link from 'next/link';
import { withRouter } from 'next/router';
import Layout from 'Global/layout';

import { getRandomParagraph } from 'Utils/getRandomText';

const Class = (props) => {
    const { className } = props;

    return (
        <Layout title={className}>
            {getRandomParagraph()}
        </Layout>
    );
};

Class.getInitialProps = async (context) => {
    const { className } = context.query;
    return { className };
};

export default withRouter(Class);
