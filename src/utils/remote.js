import axios from 'axios' 

class connector{
    constructor(){
        this.axios = axios
        this.baseURL = process.env.VUE_APP_REMOTE_URL
        this.axios.defaults.baseURL=this.baseURL
    }

    async getTest(){
        let data = await axios.get('/weatherforecast')
        let ret = data.data
        console.log('back',ret);
        return ret
    }
}

export default new connector;