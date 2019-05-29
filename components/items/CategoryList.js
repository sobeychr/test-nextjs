import CategoryEntry from './CategoryEntry';

import { getCategoryName, getTypeByCategory } from 'Data/items';

const CategoryList = ({categoryId, difficultyId}) => {
    const name = getCategoryName(categoryId);
    const typeData = getTypeByCategory(categoryId);

    return (
        <div className='entry'>
            <p>{name}</p>

            <div className='type'>
                {typeData.map((entry, index) => <CategoryEntry difficultyId={difficultyId} typeId={entry.id} key={index} />)}
            </div>

            <style jsx>{`
                .entry {
                    float: left;
                    margin-bottom: 10px;
                    width: 40%;
                }
                .entry:first-child {
                    margin-right: 10%;
                }
                p {
                    font-weight: bold;
                    margin: 0 0 3px 0;
                    padding: 0;
                }
                .type {
                    margin-left: 10px;
                }
            `}</style>
        </div>
    );
};

export default CategoryList;
