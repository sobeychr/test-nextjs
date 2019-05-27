import Head from 'next/head';
import Link from 'next/link';

const favSizes = [16, 32, 48, 64];
const favIcons = [];

favSizes.forEach(size => {
    const href = './favicon/icon-' + size + '.png';
    const sizes = size + 'x' + size;
    favIcons.push({href, sizes});
});

const favApple = favSizes[ favSizes.length-1 ];

const Header = ({title}) => (
    <header>
        <Head>
            <title>{title}</title>
            <meta name='viewport' content='initial-scale=1.0, width=device-width' />
            {favIcons.map((entry, index) => <link rel='shortcut icon' {...entry} key={index} />)}
            <link rel='apple-touch-icon' {...favApple} />
            <link rel='apple-touch-icon-precomposed' {...favApple} />
        </Head>
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
