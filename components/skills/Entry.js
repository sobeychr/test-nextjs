import Icon from './Icon';

import { getSkillById } from 'Data/skills';
import { getRandomText } from 'Utils/getRandomText';

const Entry = ({id}) => {
    const { name, pos } = getSkillById(id);
    const text = getRandomText(200, 350);

    return (
        <div className='entry'>
            <p className='title'>
                <Icon name={name} id={id} pos={pos} />
                <span className='subtitle'>{name}</span>
            </p>
            <p>{text}</p>

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
