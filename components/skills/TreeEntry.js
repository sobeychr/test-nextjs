const TreeEntry = ({name, pos}) => {
    const classes = [
        'col' + pos.col,
        'row' + pos.row
    ];
    return (
        <span alt={name} title={name} className={classes.join(' ')}>
            {name}
            <style jsx>{`
                span {
                    color: transparent;
                    cursor: pointer;
                    display: block;
                    height: 48px;
                    position: absolute;
                    width: 48px;
                }
                span.col1 {
                    left: 16px;
                }
                span.col2 {
                    left: 86px;
                }
                span.col3 {
                    left: 154px;
                }
                span.row1 {
                    top: 13px;
                }
                span.row2 {
                    top: 80px;
                }
                span.row3 {
                    top: 149px;
                }
                span.row4 {
                    top: 218px;
                }
                span.row5 {
                    top: 285px;
                }
                span.row6 {
                    top: 353px;
                }
            `}</style>
        </span>
    );
};

export default TreeEntry;
