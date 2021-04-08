import Http from './http';

export const getCards = () => Http.get('/cards');
export const getCard = (id) => Http.get(`/cards/${id}?orderBy=name`);
export const getCardsFilter = (text) => Http.get(`/cards?q=name:${text}`);
