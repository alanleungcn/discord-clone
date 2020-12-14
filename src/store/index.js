import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		name: null,
		mute: false,
		deafan: false
	},
	mutations: {
		setName(state, name) {
			state.name = name;
		},
		setMute(state, val) {
			state.mute = val;
		},
		setDeafan(state, val) {
			state.deafan = val;
		}
	}
});
