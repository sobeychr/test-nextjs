import Link from 'next/link';

const Header = ({title}) => (
    <header>
        <h1>{title}</h1>
        <style jsx>{`
            h1 {
                color: #FFF;
                text-align: center;
                text-transform: uppercase;
            }
        `}</style>
    </header>
);

export default Header;
