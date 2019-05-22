import Link from 'next/link';

import { getClassData, getSkillType } from 'Utils/getClassData';

const ClassSkillLink = ({typeId}) => {
    const skillData = getSkillType(typeId);
    const classData = getClassData(skillData.class);
    const alias = skillData.name.replace(/\ /g, '-');

    return (
        <Link
            as={'/skills/' + classData.name + '/' + alias}
            href={'/skill?typeId=' + typeId}
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
                        height: 30px;
                        margin: 10px 0;
                        padding: 10px;
                        text-shadow: 2px 2px 4px #db7800;
                        text-transform: uppercase;
                        width: 400px;
                    }
                    a:hover {
                        background: #333;
                    }
                `}</style>
            </a>
        </Link>
    );
};

export default ClassSkillLink;
