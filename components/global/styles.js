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
            color: #928A72;
            text-decoration: none;
        }
        a:hover {
            color: #B4AC92;
            text-decoration: underline;
        }
        .clearfix:after,
        .clearfix:before {
            clear: both;
            content: " ";
            display: table;
        }
    `}</style>
);

export default Styles;
