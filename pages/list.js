import Link from 'next/link';

import withLayout from './../components/Layout';

const PostLink = props => (
    <li>
        <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
            <a>{props.title}</a>
        </Link>
    </li>
);

const Page = () => <div>
    <h1>LISTING</h1>
    <ul>
        <PostLink id='hello-0' title='hello 0' />
        <PostLink id='hello-5' title='hello 5' />
        <PostLink id='pinisse' title='asdf' />
    </ul>
</div>;

export default withLayout(Page);
