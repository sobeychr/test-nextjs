import DifficultyEntry from './DifficultyEntry';

import difficultyData from 'Db/items/difficulties';

const DifficultyList = () => (
    <div>
        {difficultyData.map((entry, index) => <DifficultyEntry difficultyId={entry.id} key={index} />)}
    </div>
);

export default DifficultyList;
