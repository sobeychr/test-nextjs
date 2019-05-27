import Link from 'next/link';

import { getClassById, getClassImage } from 'Data/classes';

const Description = ({id}) => {
    const { name, description } = getClassById(id);
    const imgSrc = getClassImage(id);
    
    return (
        <p className='clearfix'>
            <img src={imgSrc} alt={name} title={name} />
            {description}

            <style jsx>{`
                p {
                    margin: 0;
                    padding: 0;
                }
                img {
                    float: left;
                    max-height: 500px;
                    max-width: 300px;
                }
            `}</style>
        </p>
    );
};

export default Description;
