import TreeAlt from './TreeAlt';
import TreeEntry from './TreeEntry';

import { getAltSkillType, getSkillsByType, getTreeImage } from 'Data/skills';

const TreeList = ({typeId}) => {
    const imgSrc = getTreeImage(typeId);
    const skills = getSkillsByType(typeId);
    const alts = getAltSkillType(typeId);

    return (
        <div>
            <img src={imgSrc} />

            <nav className='skills'>
                {skills.map((entry, index) => <TreeEntry id={entry.id} key={index}/> )}
            </nav>

            <nav className='alts'>
                {alts.map((entry, index) => <TreeAlt id={entry.id} key={index}/> )}
            </nav>

            <style jsx>{`
                div {
                    position: relative;
                }
                .skills {
                    left: 0;
                    position: absolute;
                    top: 0;
                }
                .alts {
                    left: 232px;
                    position: absolute;
                    top: 113px;
                }
            `}</style>
        </div>
    );
};

export default TreeList;
