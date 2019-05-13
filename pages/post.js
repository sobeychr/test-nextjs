import fetch from 'isomorphic-unfetch'

import Layout from './../components/Layout';

const Page = props => (
    <Layout>
        <h1>{props.show.name}</h1>
        <p>{props.show.summary.replace(/<\/?p>/g, '')}</p>
        <img src={props.show.image.medium}/>
    </Layout>
);

Page.getInitialProps = async context => {
    const { id } = context.query;
    const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
    const show = await res.json();

    console.log(`Fetched show: ${show.name}`);

    return { show };
};

export default Page;
