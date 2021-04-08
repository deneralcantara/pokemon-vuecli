import { getCards, getCard, getCardsFilter } from '../services/cards';

export const cards = { 
    state: {
        data: {},
        loading: true,
        error: null
    },
    mutations: {
        getCardsRequest(state){
            state.data = {},
            state.loading = true
            state.error = null
        },
        getCardsSuccess(state, payload){
            state.data = payload
            state.loading = null
            state.error = null
        },
        getCardsError(state, payload){
            state = { ...state, error: payload, loading: false }
        },
    },
    actions: {
        getCards({commit}){
            commit('getCardsRequest')
            getCards()
            .then(response =>{
                commit('getCardsSuccess', response.data);
            })
            .catch(error =>{
                commit('getCardsError', error.response.status);
            })
        },
        getCardsFilter({commit}, text){
            commit('getCardsRequest')
            getCardsFilter(text)
            .then(response =>{
                commit('getCardsSuccess', response.data);
            })
            .catch(error =>{
                commit('getCardsError', error.response.status);
            })
        },
    },
    getters: {
        cards: state => state
    }

}

export const card = { 
    state: {
        data: {},
        loading: true,
        error: null
    },
    mutations: {
        getCardSuccess(state, payload){
            state.data = payload
            state.loading = null
            state.error = null
        },
        getCardError(state, payload){
            state = { ...state, error: payload, loading: false }
        },
    },
    actions: {
        getCard({commit}, id){
            getCard(id)
            .then(response =>{
                commit('getCardSuccess', response.data);
            })
            .catch(error =>{
                commit('getCardError', error.response.status);
            })
        },
    },
    getters: {
        card: state => state
    }

}