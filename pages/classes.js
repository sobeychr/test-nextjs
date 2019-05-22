import Link from 'next/link';
import Layout from 'Global/layout';

import ClassLink from 'Comp/classes/ClassLink';

import classImage from 'Assets/classes.jpg';
import classData from 'Db/classes';

const links = [];
classData.forEach(entry => {
    links.push({
        id: entry.id,
        name: entry.name,
        styles: entry.listPosition
    });
});

const Classes = () => (
    <Layout title='Classes'>
        <nav>
            {links.map((entry, index) => <ClassLink {...entry} key={index} /> )}
        </nav>

        <style jsx>{`
            nav {
                background: #000 url(${classImage}) top left no-repeat;
                height: 330px;
                position: relative;
                width: 542px;
            }
        `}</style>
    </Layout>
);

export default Classes;
