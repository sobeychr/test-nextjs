import ClassSkills from 'Classes/ClassSkills';

import { getClassData } from 'Utils/getClassData';

const SkillTypeClass = ({classId}) => {
    const classData = getClassData(classId);
    
    return (
        <div className='entry'>
            <p>{classData.name}</p>
            <div className='skills'>
                <ClassSkills classId={classId} />
            </div>

            <style jsx>{`
                .entry {
                    margin: 20px 0;
                }
                p {
                    margin: 0 0 5px 0;
                    font-size: 24px;
                    font-weight: bold;
                    padding: 0;
                    text-transform: capitalize;
                }
                .skills {
                    margin-left: 30px;
                }
            `}</style>
        </div>
    );
};

export default SkillTypeClass;
