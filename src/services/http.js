import axios from 'axios';

const client = axios.create({
    baseURL: 'https://api.pokemontcg.io/v2',
    timeout: 25000,
});

export default client;