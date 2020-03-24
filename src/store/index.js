import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		count: 0,
		message: 'aaa',
	},
//	mutations: {
//		increment (state, n) {
//			state.count += n
//		},
//	}
	actions,
	mutations,
})