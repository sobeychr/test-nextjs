import Link from 'next/link';

import Header from './Header';
import Menu from './Menu';
import Styles from './Styles';

const Layout = ({children, page='', title=''}) => (
    <div>
        <Styles />
        <div id='page'>
            <Header title={title} />
            <Menu page={page} />
            <main>
                {children}
            </main>
        </div>

        <style jsx>{`
            #page {
                margin-left: 120px;
            }
        `}</style>
    </div>
);

export default Layout;
