import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		name: 'test',
		mute: false,
		deafen: false,
		rtcConnected: false
	},
	mutations: {
		setName(state, name) {
			state.name = name;
		},
		setMute(state, val) {
			state.mute = val;
		},
		setDeafen(state, val) {
			state.deafen = val;
		},
		setRtc(state, val) {
			state.rtcConnected = val;
		}
	}
});
