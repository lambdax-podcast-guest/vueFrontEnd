import axios from 'axios';

class connector {
	constructor() {
		this.axios = axios;
		this.baseURL = process.env.VUE_APP_REMOTE_URL;
		this.axios.defaults.baseURL = this.baseURL;
	}

	// async getTest() {
	//     try {
	//         let data = await axios.get("/weatherforecast");
	//         let ret = data.data;
	//         return ret;
	//     } catch (err) {
	//         return []
	//     }
	// }

	async getList() {
		try {
			let data = await axios.get('/guests');
			let ret = data.data;
			return ret;
		} catch (err) {
			return this.error(err);
		}
	}

	async getSingle(who) {
		try {
			let data = await axios.get(`/guests/${who.id}`);
			let ret = data.data;
			return ret;
		} catch (err) {
			return this.error(err);
		}
	}

	async newUser(name, email) {
		try {
			let temp = {
				Name: name,
				Email: email,
			};

			let user = await axios.post('/guests', temp);

			return user;
		} catch (err) {
			return this.error(err);
		}
	}

	async updateUser(id, name, email) {
		try {
			let data = await axios.put(`/guests/${id}`, {
				id: Number(id),
				Name: name,
				Email: email,
			});

			return data;
		} catch (err) {
			return this.error(err);
		}
	}

	async deleteUser(id) {
		await axios.delete(`/guests/${id}`);
		return {
			status: 0,
			data: 'User Deleted',
		};
	}

	error(err) {
		return {
			error: true,
			reason: err,
		};
	}
}

export default new connector();
