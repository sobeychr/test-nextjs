import Link from 'next/link';

import { getClassById } from 'Data/classes';

const ImageEntry = ({id}) => {
    const data = getClassById(id);
    const { name } = data;
    const styles = data.listPosition;

    return (
        <Link
            as={'/classes/' + name}
            href={'/class?classId=' + id}
            >
            <a alt={name} style={styles} title={name}>
                {name}

                <style jsx>{`
                    a {
                        background: #FFF;
                        border-radius: 50%;
                        box-shadow: inset 0 0 30px 15px #000;
                        color: transparent;
                        display: block;
                        opacity: 0;
                        position: absolute;
                        text-decoration: none;
                        transition: opacity .3s linear;
                    }
                    a:hover {
                        opacity: .25;
                    }
                `}</style>
            </a>
        </Link>
    );
};

export default ImageEntry;
