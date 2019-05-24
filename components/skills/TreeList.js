import TreeEntry from './TreeEntry';

import { getSkillTypeImg, getSkillsFromType } from 'Utils/getClassData';

const TreeList = ({typeId}) => {
    const imgSrc = getSkillTypeImg(typeId);
    const skills = getSkillsFromType(typeId);

    return (
        <div>
            <img src={imgSrc} />

            <nav>
                {skills.map((entry, index) => <TreeEntry {...entry} key={index}/> )}
            </nav>

            <style jsx>{`
                div {
                    position: relative;
                }
                nav {
                    left: 0;
                    position: absolute;
                    top: 0;
                }
            `}</style>
        </div>
    );
};

export default TreeList;
