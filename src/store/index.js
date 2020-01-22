import Vue from 'vue'
import Vuex from 'vuex'
import Connector from '@/utils/remote.js'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        Connector,
        weather: {},
        all: [],
        current: {},
        error:''
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
        },
        addOne(state,data){
            state.all.push(data)
        },
        setError(state,data){
            state.error=data
        }
    },
    actions: {
        async getWeather(ctx) {
            let weather = await Connector.getTest()
            ctx.commit('setWeather', weather)
        },
        async getPeople(ctx) {
            let list = await Connector.getList()
            if(list.error){
                console.log(list.reason.message);
                ctx.commit('setError',list.reason.message)
            }else{
                ctx.commit('setAll', list)
            }
        },
        async getSingle(ctx, id) {
            let user = await Connector.getSingle(id)
            if(user.error){
                ctx.commit('setError',user.error.message)
            }else{
                ctx.commit('setOne', user)
            }
        },
        async addUser(ctx,creds){
            let user = await Connector.newUser(creds.name,creds.email)
            ctx.commit(user)
        }
    },
    modules: {}
})