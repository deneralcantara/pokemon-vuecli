import Vuex from 'vuex';
import Vue from 'vue';

import { cards, card } from './cards';

Vue.use(Vuex);

export const store = new Vuex.Store({
    namespaced: true,
    modules: {
        cards: cards,
        card: card,
    }
});