import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store/index.js';
import Lobby from '../views/Lobby.vue';
import Room from '../views/Room.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Lobby',
		component: Lobby
	},
	{
		path: '/room',
		name: 'Room',
		component: Room,
		// eslint-disable-line
		beforeEnter: (_to, _from, next) => {
			if (store.state.name) next();
			else next('/');
		}
	}
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
});

export default router;
