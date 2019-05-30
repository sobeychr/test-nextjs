import { getItemById } from 'Data/items';

const ItemExtra = ({id}) => {
    const { durability, quality, range, socket } = getItemById(id);
    return (
        <div>
            <p className='row'>
                <span className='label'>rangeadder:</span>
                <span>{range}</span>
            </p>
            <p className='row'>
                <span className='label'>durability:</span>
                <span>{durability}</span>
            </p>
            <p className='row'>
                <span className='label'>max sockets:</span>
                <span>{socket}</span>
            </p>
            <p className='row'>
                <span className='label'>quality level:</span>
                <span>{quality}</span>
            </p>
            
            <style jsx>{`
                p {
                    display: table-row;
                    padding-bottom: 5px;
                }
                p span {
                    display: table-cell;
                }
                p .label {
                    text-transform: capitalize;
                }
                p span:not(.label) {
                    padding-left: 5px;
                    text-align: right;
                }
            `}</style>
        </div>
    );
};

export default ItemExtra;
