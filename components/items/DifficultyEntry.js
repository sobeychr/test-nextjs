import CategoryList from './CategoryList';

import { getDifficultyName } from 'Data/items';

import categoryData from 'Db/items/categories';

const DifficultyEntry = ({difficultyId}) => {
    const name = getDifficultyName(difficultyId);

    return (
        <div className='entry clearfix'>
            <p>{name} items</p>
            <div className='category'>
                {categoryData.map((entry, index) => <CategoryList categoryId={entry.id} difficultyId={difficultyId} key={index} />)}
            </div>

            <style jsx>{`
                .entry {
                    margin: 10px 0;
                    max-width: 500px;
                    padding: 5px;
                }
                p {
                    font-weight: bold;
                    margin: 0 0 5px 0;
                    text-transform: uppercase;
                }
                .category {
                    margin-left: 20px;
                }
            `}</style>
        </div>
    );
};

export default DifficultyEntry;
