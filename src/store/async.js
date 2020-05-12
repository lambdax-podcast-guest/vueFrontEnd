import Vue from 'vue'
import vueAxios from 'vue-axios'
import axios from 'axios';

Vue.use(vueAxios, axios)
axios.defaults.baseURL = process.env.VUE_APP_REMOTE_URL

async function getList() {
	try {
		let data = await axios.get('/guests');
		let ret = data.data;
		return ret;
	} catch (err) {
		return error(err);
	}
}

async function getSingle(who) {
	try {
		let data = await axios.get(`/guests/${who.id}`);
		let ret = data.data;
		return ret;
	} catch (err) {
		return error(err);
	}
}

async function newUser(name, email) {
	try {
		let temp = {
			Name: name,
			Email: email,
		};

		let user = await axios.post('/guests', temp);

		return user;
	} catch (err) {
		return error(err);
	}
}

async function updateUser(id, name, email) {
	try {
		let data = await axios.put(`/guests/${id}`, {
			id: Number(id),
			Name: name,
			Email: email,
		});

		return data;
	} catch (err) {
		return error(err);
	}
}

async function deleteUser(id) {
	await axios.delete(`/guests/${id}`);
	return {
		status: 0,
		data: 'User Deleted',
	};
}

function error(err) {
	return {
		error: true,
		reason: err,
	};
}

export {
	getList,
	getSingle,
	newUser,
	updateUser,
	deleteUser
}
