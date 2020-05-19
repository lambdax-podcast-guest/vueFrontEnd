import Vue from 'vue';
import vueAxios from 'vue-axios';
import axios from 'axios';

Vue.use(vueAxios, axios);
axios.defaults.baseURL = process.env.VUE_APP_REMOTE_URL;

async function register(credentials) {
	try {
		console.log(credentials);
		// const data = await axios.post('/Account/Register', credentials);

		// console.log(data);

		// const ret = data.data;
		// return ret;
	} catch (err) {
		return error(err);
	}
}

async function login(credentials) {
	try {
		const data = await axios.post('/Account/Login', credentials);

		const ret = data.data;
		return ret;
	} catch (err) {
		console.log('ERR');
		return error(err);
	}
}

async function getList() {
	try {
		let data = await axios.post('/guests');
		let ret = data.data;
		return ret;
	} catch (err) {
		return error(err);
	}
}

async function getSingle(who) {
	try {
		let data = await axios.get(`/Guests/${who.id}`);
		let ret = data.data;
		return ret;
	} catch (err) {
		return error(err);
	}
}

// async function newUser(name, email) {
// 	try {
// 		let temp = {
// 			Name: name,
// 			Email: email,
// 		};

// 		let user = await axios.post('/Guests', temp);

// 		return user;
// 	} catch (err) {
// 		return error(err);
// 	}
// }

async function updateUser(id, name, email) {
	try {
		let data = await axios.put(`/Guests/${id}`, {
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
	await axios.delete(`/Guests/${id}`);
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

export { register, login, getList, getSingle, updateUser, deleteUser };
