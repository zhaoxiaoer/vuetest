export default {
	increment_act({ commit }) {
		setTimeout(() => {
			commit('INCREMENT_MUTATION', 1)
		}, 5000)
	},
	INCREMENT_ACTION({ commit }, n) {
		setTimeout(() => {
			commit('INCREMENT_MUTATION', n)
		}, 2000)
	},
}