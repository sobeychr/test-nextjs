import ItemIcon from './icon';

import { getItemById } from 'Data/items';

const ItemBasic = ({id}) => {
    const { name, image, type, min, max} = getItemById(id);
    const avg = (min + max) * .5;

    return (
        <div>
            <ItemIcon
                name={name}
                image={image}
                typeId={type}
                />

            <div className='inner'>
                <p className='name'>
                    {name}
                </p>
                <p className='row'>
                    <span className='label'>damage:</span>
                    {min} - {max}
                </p>
                <p className='row'>
                    <span className='label'>average:</span>
                    {avg}
                </p>
            </div>

            <style jsx>{`
                .inner {
                    float: left;
                    width: 120px;
                }
                .name {
                    color: #FFF;
                    font-size: 18px;
                    font-weight: bold;
                    margin: 0 0 10px 0;
                    padding: 0;
                    text-transform: capitalize;
                }
            `}</style>
        </div>
    );
};

export default ItemBasic;
