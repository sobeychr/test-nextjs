import itemsData from 'Db/items';
import categoryData from 'Db/items/categories';
import difficultyData from 'Db/items/difficulties';
import speedData from 'Db/items/speeds';
import typeData from 'Db/items/types';

import { zeroFill } from 'Utils/numbers';

export const getCategoryName = id => categoryData.find(entry => entry.id === id).name;

export const getDifficultyName = id => difficultyData.find(entry => entry.id === id).name;

export const getItemById = id => itemsData.find(entry => entry.id === id);

export const getItemImage = typeId => require('Assets/items/' + zeroFill(typeId) + '.png');

export const getItems = (difficultyId, typeId) => itemsData.filter(entry => 
    entry.difficulty === difficultyId
    && entry.type === typeId
);

export const getTypeHref = (difficultyId, typeId) => {
    const name = getTypeName(typeId);
    const alias = '/item/' + getDifficultyName(difficultyId) + '/' + name.replace(/\ /g, '-');
    const href = '/item?difficultyId=' + difficultyId + '&typeId=' + typeId;
    return { alias, href };
};

export const getTypeByCategory = id => typeData.filter(entry => entry.category === id);

export const getTypeName = id => typeData.find(entry => entry.id === id).name;
