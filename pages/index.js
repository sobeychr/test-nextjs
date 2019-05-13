import Link from 'next/link';

import Layout from './../components/Layout';

const Index = () => (
    <div>
        <Layout>
            <p>Hello Next.js</p>
        </Layout>
    </div>
);

/*
const Index = () => (
    <div>
        <Link href='/about'>
            <a title='About'>About</a>
        </Link>
        <p>Hello Next.js</p>
    </div>
);
*/

export default Index;
