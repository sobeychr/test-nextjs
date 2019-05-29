import ItemEntry from './ItemEntry';

import { getItems } from 'Data/items';

const ItemList = ({difficultyId, typeId}) => {
    const itemsData = getItems(difficultyId, typeId);

    return (
        <div>
            {itemsData.map((entry, index) => <ItemEntry id={entry.id} key={index} />)}
        </div>
    );
};

export default ItemList;
