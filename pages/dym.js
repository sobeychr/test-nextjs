import Link from 'next/link';

const Page = (props) => (
    <div>
        <Link href='/'>
            <a>index</a>
        </Link>
        <h1>Dynamic page</h1>
        <p>{props.page}</p>
    </div>
);

Page.getInitialProps = async (context) => {
    const { page } = context.query;
    return { page };
};

export default Page;
