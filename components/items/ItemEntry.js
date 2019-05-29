import ItemIcon from './ItemIcon';
import ItemRequire from './ItemRequire';

import { getItemById } from 'Data/items';

const ItemEntry = ({id}) => {
    const itemData = getItemById(id);
    const {
        name,
        min, max,
        str, dex,
        range, durability,
        socket, quality
    } = itemData;

    const avg = (max - min) * .5;

    return (
        <div className='entry'>
            <div className='basic'>
                <ItemIcon
                    name={itemData.name}
                    image={itemData.image}
                    typeId={itemData.type}
                    />

                <div className='detail'>
                    <p className='name'>
                        {itemData.name}
                    </p>
                    <p>
                        <span>damage:</span>
                        {min} - {max}
                    </p>
                    <p>
                        <span>average:</span>
                        {avg}
                    </p>
                </div>
            </div>

            <ItemRequire str={str} dex={dex} />

            <div className='extra'>
                <p>
                    <span>rangeadder:</span>
                    <span>{range}</span>
                </p>
                <p>
                    <span>durability:</span>
                    <span>{durability}</span>
                </p>
                <p>
                    <span>max sockets:</span>
                    <span>{socket}</span>
                </p>
                <p>
                    <span>quality level:</span>
                    <span>{quality}</span>
                </p>
            </div>

            <div className='speed'>

            </div>

            <style jsx>{`
                .entry {
                    display: table-row;
                    margin: 0;
                    padding: 0;
                }
                .entry:nth-child(n + 2) {
                    margin-top: 10xp;
                }
                .entry>div {
                    display: table-cell;
                    vertical-align: top;
                }
                .basic {
                    padding-right: 10px;
                }
                .detail {
                    display: inline-block;
                    vertical-align: top;
                }
                .detail p {
                    margin: 0;
                    padding: 0;
                }
                .detail p:nth-child(n + 2) {
                    margin-top: 5px;
                }
                .detail p:nth-child(n + 2) span,
                .extra p span:first-child {
                    color: #909090;
                    font-size: 14px;
                    font-style: italic;
                    margin-right: 3px;
                }
                .name {
                    color: #FFF;
                    font-size: 18px;
                    font-weight: bold;
                    text-transform: capitalize;
                }
                .extra {
                    display: table;
                    padding-top: 15px;
                }
                .extra p {
                    display: table-row;
                }
                .extra p span {
                    display: table-cell;
                }
                .extra p span:first-child {
                    padding-right: 3px;
                    text-transform: capitalize;
                }
                .extra p span:last-child {
                    text-align: right;
                }
                .entry p:hover,
                .entry p:hover span {
                    color: #FFF;
                }
            `}</style>
        </div>
    );
};

export default ItemEntry;
