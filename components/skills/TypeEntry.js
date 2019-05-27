import Link from 'next/link';

import { getSkillLink, getSkillTypeById } from 'Data/skills';

const TypeEntry = ({typeId}) => {
    const skillData = getSkillTypeById(typeId);
    const { alias, href } = getSkillLink(typeId);

    return (
        <Link
            as={alias}
            href={href}
            >
            <a>
                {skillData.name}

                <style jsx>{`
                    a {
                        background: #5b5a5a;
                        border: 2px solid #262626;
                        color: #ffe344;
                        display: block;
                        font-weight: 900;
                        margin: 10px 0;
                        max-width: 400px;
                        padding: 15px 10px;
                        text-shadow: 2px 2px 4px #db7800;
                        text-transform: uppercase;
                    }
                    a:hover {
                        background: #333;
                    }
                `}</style>
            </a>
        </Link>
    );
};

export default TypeEntry;
