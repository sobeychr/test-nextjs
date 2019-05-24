import Entry from './Entry';

import { newsSorted } from 'Utils/getNewsData';

const List = () => (
    <div>
        {newsSorted.map((entry, index) => <Entry entry={entry} key={index} />)}
    </div>
);

export default List;
