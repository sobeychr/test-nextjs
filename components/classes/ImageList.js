import ImageEntry from './ImageEntry';

import classImage from 'Assets/classes.jpg';
import classData from 'Db/classes';

const ImageList = () => (
    <div>
        <nav>
            {classData.map((entry, index) => <ImageEntry id={entry.id} key={index} /> )}
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
