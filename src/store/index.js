import Vue from 'vue'
import Vuex from 'vuex'
import Connector from '@/utils/remote.js'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        Connector,
        weather: {},
        all: [],
        current: {}
    },
    mutations: {
        setWeather(state, data) {
            state.weather = data
        },
        setAll(state, data) {
            if (Array.isArray(data)) {
                state.all = data
            }
        },
        setList(state, data) {
            state.current = data
        },
        setOne(state, data) {
            state.current = data
        }
    },
    actions: {
        async getWeather(ctx) {
            let weather = await Connector.getTest()
            ctx.commit('setWeather', weather)
        },
        async getPeople(ctx) {
            let list = await Connector.getList()
            ctx.commit('setAll', list)
        },
        async getSingle(ctx, id) {
            let user = await Connector.getSingle(id)
            ctx.commit('setOne', user)
        }
    },
    modules: {}
})