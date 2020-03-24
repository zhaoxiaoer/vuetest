export default {
	increment(state) {
		state.count++
	},
	INCREMENT_MUTATION(state, n) {
		state.count += n
	},
}