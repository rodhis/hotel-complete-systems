import { createStore } from 'vuex'
import { api } from '@/services/api'

export default createStore({
    state: {
        acomodacoes: [],
        user: {
            nome_usuario: '',
            email_usuario: '',
            password: '',
        },
        feedback: [],
    },
    getters: {
        acomodacoesPadrao(state) {
            const { list } = state.acomodacoes
            return list.filter(({ tipo }) => tipo === 'Quarto')
        },
    },
    mutations: {
        loadRooms(state, acomodacoes) {
            state.acomodacoes = acomodacoes
        },
        loadUser(state, user) {
            state.user = user
        },

        loadFeedback(state, feedback) {
            state.feedback = feedback
        },

        updateUser(state, payload) {
            state.user = Object.assign(state.user, payload)
        },
    },
    actions: {
        loadRooms: async ({ commit }) => {
            const { data } = await api.get('/acomodacoes')
            commit('loadRooms', data)
        },

        loadUser: async ({ commit }) => {
            const { data } = await api.post('/usuarios')
            commit('loadUser', data)
        },
        loadFeedbacks: async ({ commit }) => {
            const { data } = await api.post('/feedbacks')
            commit('loadFeedbacks', data)
        },
        createUser: async (_, payload) => {
            api.post('/usuario', payload)
        },
    },
    modules: {},
})
