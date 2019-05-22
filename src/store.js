import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        selectedChallenge: ''
    },
    mutations: {
        setChallenge(state, payload) {
            state.selectedChallenge = payload;
        }
    },
    actions: {}
});
