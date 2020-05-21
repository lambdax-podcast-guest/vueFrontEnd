import Vue from 'vue';
import Vuex from 'vuex';
import router from '../router';

import {
	register,
	login,
	getList,
	getSingle,
	// newUser,
	updateUser,
} from './async';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		signedIn: false,
		userFirstName: '',
		userLastName: '',
		userEmail: '',
		userRoles: [],
		all: [],
		current: {},
		error: '',
	},
	mutations: {
		signIn(state) {
			state.signedIn = true;
		},
		signOut(state) {
			state.signedIn = false;
		},
		setAll(state, data) {
			if (Array.isArray(data)) {
				state.error = '';
				state.all = data;
			}
		},
		setList(state, data) {
			state.current = data;
			state.error = '';
		},
		setOne(state, data) {
			state.current = data;
			state.error = '';
		},
		register(state, data) {
			state.all.push(data);
			state.error = '';
		},
		setError(state, data) {
			state.error = data;
		},
		updateUser(state, data) {
			state.all = state.all.map((i) => (i.id === data.id ? data : i));
		},
	},
	actions: {
		async register(context, credentials) {
			const user = await register(credentials);

			if (user.error) {
				context.commit('setError', user.reason.message);
			} else {
				context.commit('register', user);
				context.commit('signIn');
				router.push('guestlist');
			}
		},
		async signIn(context, credentials) {
			const user = await login(credentials);

			if (user.error) {
				context.commit('setError', user.error.message);
			} else {
				context.commit('signIn');
				router.push('guestlist');
			}
		},
		signOut(context) {
			context.commit('signOut');
		},
		async getPeople(context) {
			let list = await getList();
			if (list.error) {
				context.commit('setError', list.reason.message);
			} else {
				context.commit('setAll', list);
			}
		},
		async getSingle(context, id) {
			let user = await getSingle(id);
			if (user.error) {
				context.commit('setError', user.error.message);
			} else {
				context.commit('setOne', user);
			}
		},
		async editUser(context, data) {
			let user = await updateUser(data.id, data.name, data.email);
			if (user.error) {
				context.commit('setError', user.reason.message);
			} else {
				context.commit('updateUser', user);
			}
		},
	},
});
