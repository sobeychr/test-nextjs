import Icon from './Icon';

import { getSkillData } from 'Utils/getClassData';
import { getRandomText } from 'Utils/getRandomText';

const Entry = ({id}) => {
    const { name, typeId, pos } = getSkillData(id);
    const text = getRandomText();

    return (
        <div className='entry'>
            <p className='title'>
                <Icon typeId={typeId} col={pos.col} row={pos.row} />
                <span className='subtitle'>{name}</span>
            </p>
            <p>{getRandomText(200, 350)}</p>

            <style jsx>{`
                .entry {
                    margin: 20px 0;
                }
                .entry:hover .subtitle {
                    text-decoration: underline;
                }
                .title {
                    color: #FFF;
                    margin: 0 0 5px 0;
                    font-size: 24px;
                    font-weight: bold;
                    padding: 0;
                    text-transform: capitalize;
                }
                .subtitle {
                    margin-left: 10px;
                    vertical-align: top;
                }
            `}</style>
        </div>
    );
};

export default Entry;
