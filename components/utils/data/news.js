import newsData from 'Db/news';

export const newsSorted = newsData;
newsSorted.sort((a, b) => b.date - a.date);

export const getNewById = (id) => newsData.find(entry => entry.id === id);
