import Link from 'next/link';

import { getClassData, getSkillTypeData } from 'Utils/getClassData';

const TypeEntry = ({typeId}) => {
    const skillData = getSkillTypeData(typeId);
    const classData = getClassData(skillData.classId);
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
