import ItemEntry from './entry';

import { getItems } from 'Data/items';

const ItemList = ({difficultyId, typeId}) => {
    const itemsData = getItems(difficultyId, typeId);

    return (
        <div>
            {itemsData.map((entry, index) => <ItemEntry id={entry.id} key={index} />)}
            <style jsx>{`
                div {
                    display: table;
                }
            `}</style>
        </div>
    );
};

export default ItemList;
