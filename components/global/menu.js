import Link from 'next/link';

const Menu = ({page}) => {
    return (
        <aside>
            <nav>
                <Link href='/'>
                    <a>Home</a>
                </Link>
                <Link href='/classes'>
                    <a>Classes</a>
                </Link>
                <Link href='/items'>
                    <a>Items</a>
                </Link>
                <Link href='/skills'>
                    <a>Skills</a>
                </Link>
            </nav>
            <style jsx>{`
                aside {
                    box-shadow: 0 0 3px 3px rgba(255,255,255, .15);
                    left: 0;
                    position: absolute;
                    top: 0;
                    width: 100px;
                }
                aside a {
                    display: block;
                    margin: 5px 0;
                    padding: 3px;
                }
            `}</style>
        </aside>
    );
};

export default Menu;
