import Link from 'next/link';
import Layout from 'Global/Layout';

import { getRandomParagraph } from 'Utils/getRandomText';

const Index = () => (
    <Layout title='Diablo 2 Expansion guide'>
        {getRandomParagraph()}
    </Layout>
);

export default Index;
