import axios from "axios";

class connector {
    constructor() {
        this.axios = axios;
        this.baseURL = process.env.VUE_APP_REMOTE_URL;
        this.axios.defaults.baseURL = this.baseURL;
    }

    async getTest() {
        let data = await axios.get("/weatherforecast");
        let ret = data.data;
        return ret;
    }

    async getList() {
        //let data = await axios.get("/people");
        //let ret = data.data
        let ret = [
            {},
            {},
            {}
        ]
        return ret
    }

    async getSingle(who){
        who
        let ret={}
        return ret
    }
}

export default new connector();