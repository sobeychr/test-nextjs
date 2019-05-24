import Entry from './Entry';

import { newsSorted } from 'Data/news';

const List = () => (
    <div>
        {newsSorted.map((entry, index) => <Entry id={entry.id} key={index} />)}
    </div>
);

export default List;
