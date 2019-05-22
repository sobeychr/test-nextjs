import Link from 'next/link';
import { withRouter } from 'next/router';

import Layout from 'Global/Layout';

const Skill = (props) => {
    return (
        <Layout title='Skill'>
            <p>Work in progress</p>
        </Layout>
    );
};

Skill.getInitialProps = async (context) => {
    return { };
};

export default withRouter(Skill);
