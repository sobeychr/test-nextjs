import Link from 'next/link';

import { getSkillLink, getSkillTypeById } from 'Data/skills';

const TreeAlt = ({id}) => {
    const { name, pos } = getSkillTypeById(id);
    const { alias, href } = getSkillLink(id);
    const className = 'alt' + pos;

    return (
        <Link
            as={alias}
            href={href}
            >
            <a className={className}>
                {name}
                <style jsx>{`
                a {
                    background: #FFF;
                    border-radius: 10px;
                    color: transparent;
                    display: block;
                    height: 95px;
                    opacity: 0;
                    position: absolute;
                    transition: opacity .3s linear;
                    width: 89px;
                }
                a:hover {
                    opacity: .15;
                }
                a.alt1 {
                    top: 0;
                }
                a.alt2 {
                    top: 109px;
                }
                a.alt3 {
                    top: 216px;
                }
            `}</style>
            </a>
        </Link>
    );
};

export default TreeAlt;
