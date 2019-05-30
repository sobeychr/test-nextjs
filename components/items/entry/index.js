import ItemBasic from './basic';
import ItemExtra from './extra';
import ItemRequire from './require';
import ItemSpeed from './speed';

import { getItemById } from 'Data/items';

const ItemEntry = ({id}) => {
    return (
        <div className='itemEntry clearfix'>
            <ItemBasic id={id} />
            <ItemRequire id={id} />
            <ItemExtra id={id} />
            <ItemSpeed id={id} />

            <style jsx global>{`
                .itemEntry {
                    text-align: left;
                    vertical-align: top;
                }
                .itemEntry:nth-child(n + 2) {
                    margin-top: 10px;
                }
                .itemEntry>div {
                    float: left;
                    height: 100%;
                    margin-right: 20px;
                }
                .itemEntry>div:nth-child(n + 2) {
                    margin-top: 10px;
                }
                .itemEntry p {
                    margin: 0 0 5px 0;
                    padding: 0;
                }
                .itemEntry .label {
                    color: #909090;
                    font-size: 14px;
                    font-style: italic;
                    font-weight: normal;
                    margin-right: 3px;
                }
                .itemEntry .subname {
                    text-transform: capitalize;
                }
                .itemEntry .row:hover,
                .itemEntry .row:hover span {
                    color: #FFF;
                }
            `}</style>
        </div>
    );
};

export default ItemEntry;
