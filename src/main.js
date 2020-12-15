import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueSocketIO from 'vue-socket.io';
import SocketIO from 'socket.io-client';

Vue.use(
	new VueSocketIO({
		debug: true,
		connection: SocketIO(process.env.API_URL || 'http://localhost:8081'),
		vuex: {
			store,
			actionPrefix: 'SOCKET_',
			mutationPrefix: 'SOCKET_'
		}
	})
);

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	render: function(h) {
		return h(App);
	}
}).$mount('#app');
