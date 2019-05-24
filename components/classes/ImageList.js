import ImageEntry from './ImageEntry';

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

const ImageList = () => (
    <div>
        <nav>
            {links.map((entry, index) => <ImageEntry {...entry} key={index} /> )}
        </nav>

        <style jsx>{`
            nav {
                background: #000 url(${classImage}) top left no-repeat;
                height: 330px;
                margin: 0 auto;
                position: relative;
                width: 542px;
            }
        `}</style>
    </div>
);

export default ImageList;
