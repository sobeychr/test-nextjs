import Layout from './../components/Layout';

const Page = (props) => (
    <Layout>
        <p>Hello Next.js</p>
        <style jsx>{`
            p {
            font-family: 'Arial';
            text-decoration: none;
            color: blue;
            }

            p:hover {
            opacity: 0.6;
            }
            `}
        </style>
    </Layout>
);

export default Page;
