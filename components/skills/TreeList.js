import TreeEntry from './TreeEntry';

import { getSkillsByType, getTreeImage } from 'Data/skills';

const TreeList = ({typeId}) => {
    const imgSrc = getTreeImage(typeId);
    const skills = getSkillsByType(typeId);

    return (
        <div>
            <img src={imgSrc} />

            <nav>
                {skills.map((entry, index) => <TreeEntry id={entry.id} key={index}/> )}
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
