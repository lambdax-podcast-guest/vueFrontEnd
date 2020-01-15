import axios from "axios";

class connector {
    constructor() {
        this.axios = axios;
        this.baseURL = process.env.VUE_APP_REMOTE_URL;
        this.axios.defaults.baseURL = this.baseURL;
    }

    async getTest() {
        try {
            let data = await axios.get("/weatherforecast");
            let ret = data.data;
            return ret;
        } catch (err) {
            return []
        }
    }

    async getList() {
        try {
            let data = await axios.get("/Guests");
            // console.log(data);
            //let ret = data.data
        } catch (err) {
            // console.error(err);
        }
        // console.log('sending anyway');
        let ret = [{
            id: 0,
            name: 'demo1',
            email: 'demo@demo.dem'
        }, {
            id: 1,
            name: 'demo2',
            email: 'demo2@demo.dem'
        }, {
            id: 2,
            name: 'demo3',
            email: 'demo3@demo.dem'
        }]
        return ret
    }

    async getSingle(who) {
        try {
            let data = await axios.get(`/Guests/${who.id}`)
            // console.log(data);
            let ret = [{
                id: 0,
                name: 'demo1',
                email: 'demo@demo.dem'
            }]

            return ret
        } catch (error) {
            let ret = {
                id: 0,
                name: 'demo1',
                email: 'demo@demo.dem'
            }
            return ret
        }
    }

    async newUser(name, email) {
        await axios.post('/Guests', {
            name,
            email
        })
        return {
            status: 0,
            data: 'User Created'
        }
    }

    async updateUser(id, name, email) {
        let data = await axios.put(`/Guests/${id}`, {
            id,
            name,
            email
        })
        data
        return {
            status: 0,
            data: 'User Updated'
        }
    }

    async deleteUser(id) {
        await axios.delete(`/Guests/${id}`)
        return {
            status: 0,
            data: 'User Deleted'
        }
    }
}

export default new connector();