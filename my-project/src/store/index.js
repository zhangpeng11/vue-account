import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations.js';
import actions from './actions.js'

Vue.use(Vuex);

const state = {
	ListData: [
		{
			payType: '住宿',
			payNum: '+100',
			payDate: '20161010'
		}
	]
}

export default new Vuex.Store({
	state,
	actions,
	mutations
});