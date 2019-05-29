const ItemRequire = ({str, dex}) => {
    const none = str === 0 && dex === 0;
    return (
        <div>
            <p className='name'>Requirements:</p>
            {str > 0 ? <p><span>str:</span>{str}</p> : null}
            {dex > 0 ? <p><span>dex:</span>{dex}</p> : null}
            {none ? <p className='none'>none</p> : null}

            <style jsx>{`
                div {
                    padding-right: 10px;
                }
                p:first-child {
                    margin: 15px 0 0 0;
                    padding: 0;
                }
                p:nth-child(n + 2) {
                    font-size: 14px;
                    margin: 3px 0 0 0;
                    padding: 0;
                    text-indent: 10px;
                }
                p:nth-child(n + 2) span {
                    color: #909090;
                    margin-right: 5px;
                    text-transform: uppercase;
                }
                .none {
                    color: #909090;
                    font-style: italic;
                    margin-right: 5px;
                    text-transform: uppercase;
                }
            `}</style>
        </div>
    );
};

export default ItemRequire;
