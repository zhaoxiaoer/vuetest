<template>
	<div class="user">
		<p>我是 {{$route.params.id}}  用户</p>
	</div>
</template>

<script>
import Vue from 'vue'
import Header from '../common/Header.vue'
import Footer from '../common/Footer.vue'

export default Vue.extend({
	name: 'User',
	components: {
		Header,
		Footer,
	},
})
</script>

<style lang='less'>
.user {
	background: red;
	text-align: center;
}
</style>