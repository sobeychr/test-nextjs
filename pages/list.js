import fetch from 'isomorphic-unfetch';
import Link from 'next/link';

import Layout from './../components/Layout';

const Page = (props) => (
    <Layout>
        <h1>Listing</h1>
        <ul>
            {props.shows.map(show => (
                <li key={show.id}>
                    <Link as={`/p/${show.id}`} href={`/p/${show.id}`}>
                        <a>{show.name}</a>
                    </Link>
                </li>
            ))}
        </ul>
    </Layout>
);

Page.getInitialProps = async () => {
    // const data = fetch('https://api.tvmaze.com/search/shows?q=batman')
        // .then(res => res.json());

    // const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
    const res = await fetch('http://localhost:3000/db/batman.json');
    const data = await res.json();

    console.log(`Show data fetched. Count: ${data.length}`);

    return {
        shows: data.map(entry => entry.show)
    }
};

export default Page;
