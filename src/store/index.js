import Vue from 'vue'
import Vuex from 'vuex'
import Connector from '@/utils/remote.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    Connector,
    weather:{}
  },
  mutations: {
    setWeather(state, data){      
      state.weather=data
    }
  },
  actions: {
    async getWeather(ctx){
      let weather = await Connector.getTest()
      ctx.commit('setWeather',weather)
    }
  },
  modules: {
  }
})
