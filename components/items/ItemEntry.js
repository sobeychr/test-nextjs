import ItemIcon from './ItemIcon';

import { getItemById } from 'Data/items';

const ItemEntry = ({id}) => {
    const itemData = getItemById(id);

    return (
        <div>
            <p>
                <ItemIcon name={itemData.name} image={itemData.image} typeId={itemData.type}/>
                {itemData.name}
            </p>
        </div>
    );
};

export default ItemEntry;
