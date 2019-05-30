import { getItemById } from 'Data/items';

const ItemRequire = ({id}) => {
    const { str, dex } = getItemById(id);
    const none = str === 0 && dex === 0;
    return (
        <div>
            <p className='subname'>requirements</p>
            {
                str > 0
                ? <p className='row'><span className='label'>str:</span>{str}</p>
                : null
            }
            {
                dex > 0
                ? <p className='row'><span className='label'>dex:</span>{dex}</p>
                : null
            }
            {
                none > 0
                ? <p className='row label'>none</p>
                : null
            }

            <style jsx>{`
                span {
                    display: inline-block;
                    width: 30px;
                }
            `}</style>
        </div>
    );
};

export default ItemRequire;
