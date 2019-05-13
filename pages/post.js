import { withRouter } from 'next/router';

import withLayout from './../components/Layout';

const Content = withRouter(props => (
    <div>
        <h1>{props.router.query.title}</h1>
        <p>Lorem ipsum</p>
    </div>
));

const Page = props => (
    <Content />
);

export default withLayout(Page);
