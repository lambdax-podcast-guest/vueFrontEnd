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
                state.error=''
                state.all = data
            }
        },
        setList(state, data) {
            state.current = data
            state.error=''
        },
        setOne(state, data) {
            state.current = data
            state.error=''
        },
        addOne(state,data){
            state.all.push(data)
            state.error=''
        },
        setError(state,data){
            state.error=data
        },
        updateUser(state,data){
            state.all=state.all.map(i=>i.id===data.id?data:i)
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
            if(user.error){
                ctx.commit('setError',user.reason.message)
            }else{
                ctx.commit('addOne',user)
            }
        },
        async editUser(ctx,data){
            let user = await Connector.updateUser(data.id,data.name,data.email)
            if(user.error){
                ctx.commit('setError',user.reason.message)
            }else{
                ctx.commit('updateUser',user)
            }
        }
    },
    modules: {}
})