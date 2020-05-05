import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import List from '../views/List.vue';
import Single from '../views/Single.vue';
import Add from '../views/Add.vue';
import SignIn from '../views/SignInPage.vue';
import Register from '../views/RegisterPage.vue';
import Dashboard from '../views/DashboardPage.vue';
import Settings from '../views/SettingsPage.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'home',
		component: Home,
	},
	{
		path: '/all',
		name: 'List',
		component: List,
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		// component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
	},
	{
		path: '/users/:id',
		name: 'single',
		component: Single,
	},
	{
		path: '/new',
		name: 'add',
		component: Add,
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
		path: '/Settings',
		name: 'Settings',
		component: Settings,
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;
