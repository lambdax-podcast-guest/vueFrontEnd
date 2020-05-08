import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/Home.vue';
import GuestList from '../views/GuestList.vue';
import Single from '../views/Single.vue';
import SignIn from '../views/SignInPage.vue';
import Register from '../views/RegisterPage.vue';
import Dashboard from '../views/DashboardPage.vue';
import Settings from '../views/SettingsPage.vue';
import Profile from '../views/SettingsProfilePage.vue';
import AdvancedSettings from '../views/SettingsAdvancedPage.vue';

Vue.use(VueRouter);

export default new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home,
		},
		{
			path: '/guestlist',
			name: 'GuestList',
			component: GuestList,
		},
		{
			path: '/users/:id',
			name: 'single',
			component: Single,
		},
		{
			path: '/signin',
			name: 'SignIn',
			component: SignIn,
		},
		{
			path: '/register',
			name: 'Register',
			component: Register,
		},
		{
			path: '/dashboard',
			name: 'Dashboard',
			component: Dashboard,
		},
		{
			path: '/settings',
			name: 'Settings',
			component: Settings,
			children: [
				{
					path: 'profilepreview',
					name: 'Profile',
					component: Profile,
				},
				{
					path: 'advanced',
					name: 'AdvancedSettings',
					component: AdvancedSettings,
				},
			]
		},
	]
});
