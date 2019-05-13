import Link from 'next/link';

import withLayout from './../components/Layout';

const PostLink = props => (
    <li>
        <Link href={`/post?title=${props.title}`}>
            <a>{props.title}</a>
        </Link>
    </li>
);

const Page = () => <div>
    <h1>LISTING</h1>
    <ul>
        <PostLink title='hello 0' />
        <PostLink title='hello 5' />
        <PostLink title='asdf' />
    </ul>
</div>;

export default withLayout(Page);
