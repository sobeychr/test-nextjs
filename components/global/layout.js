import Link from 'next/link';

import Header from './Header';
import Menu from './Menu';
import Styles from './Styles';

const Layout = ({children, page='', title=''}) => (
    <div id='page'>
        <Styles />
        <Header title={title} />
        <Menu page={page} />
        <main>
            {children}
        </main>

        <style jsx>{`
            #page {
                margin: 0 auto;
                max-width: 950px;
            }
            main {
                margin-left: 120px;
            }
        `}</style>
    </div>
);

export default Layout;
