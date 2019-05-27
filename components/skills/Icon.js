import { getSkillById, getTreeImage } from 'Data/skills';

const Icon = ({id}) => {
    const { name, pos, typeId } = getSkillById(id);
    const imgSrc = getTreeImage(typeId);
    const classes = [
        'col' + pos.col,
        'row' + pos.row
    ];

    return (
        <span className={classes.join(' ')}>
            <i>{name}</i>
            <style jsx>{`
                span {
                    background: #000 url(${imgSrc}) no-repeat;
                    color: transparent;
                    display: inline-block;
                    height: 47px;
                    width: 47px;
                }
                span.col1 {
                    background-position-x: -16px;
                }
                span.col2 {
                    background-position-x: -86px;
                }
                span.col3 {
                    background-position-x: -154px;
                }
                span.row1 {
                    background-position-y: -13px;
                }
                span.row2 {
                    background-position-y: -80px;
                }
                span.row3 {
                    background-position-y: -149px;
                }
                span.row4 {
                    background-position-y: -218px;
                }
                span.row5 {
                    background-position-y: -285px;
                }
                span.row6 {
                    background-position-y: -353px;
                }
            `}</style>
        </span>
    );
};

export default Icon;
