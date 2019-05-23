import Layout from 'Global/Layout';

import NewsEntry from 'News/NewsEntry';

import { newsSorted } from 'Utils/getNewsData';

const Index = () => (
    <Layout title='Diablo 2 Expansion guide'>
        {newsSorted.map((entry, index) => <NewsEntry entry={entry} key={index} />)}
    </Layout>
);

export default Index;
