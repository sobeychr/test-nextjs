import Link from 'next/link';

const Styles = () => (
    <style jsx global>{`
        html, body {
            background: #000;
            color: #CCC;
            font-family: "Arial", sans-serif;
            margin: 0;
            padding: 0;
        }
        body {
            padding: 20px;
        }
        a {
            color: #FFF;
            text-decoration: none;
        }
        a:hover {
            text-decoration: underline;
        }
    `}</style>
);

export default Styles;
