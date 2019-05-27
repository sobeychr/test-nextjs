import Link from 'next/link';

import { getSkillAlias, getSkillById } from 'Data/skills';

const TreeEntry = ({id}) => {
    const { name, pos } = getSkillById(id);
    const anchor = '#' + getSkillAlias(name);
    const classes = [
        'col' + pos.col,
        'row' + pos.row
    ];

    return (
        <Link
            href={anchor}
            >
            <a alt={name} title={name} className={classes.join(' ')}>
                {name}

                <style jsx>{`
                    a {
                        background: #FFF;
                        color: transparent;
                        cursor: pointer;
                        display: block;
                        height: 48px;
                        opacity: 0;
                        position: absolute;
                        transition: opacity .3s linear;
                        width: 48px;
                    }
                    a:hover {
                        opacity: .15;
                    }
                    a.col1 {
                        left: 16px;
                    }
                    a.col2 {
                        left: 86px;
                    }
                    a.col3 {
                        left: 154px;
                    }
                    a.row1 {
                        top: 13px;
                    }
                    a.row2 {
                        top: 80px;
                    }
                    a.row3 {
                        top: 149px;
                    }
                    a.row4 {
                        top: 218px;
                    }
                    a.row5 {
                        top: 285px;
                    }
                    a.row6 {
                        top: 353px;
                    }
                `}</style>
            </a>
        </Link>
    );
};

export default TreeEntry;
