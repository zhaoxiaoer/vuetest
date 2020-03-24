<template>
	<div class="notfound">
		<Header/>
		<p>页面未找到: {{$route.params.pathMatch}}</p>
		<Footer/>
	</div>
</template>

<script>
import Vue from 'vue'
import Header from '../common/Header.vue'
import Footer from '../common/Footer.vue'

export default Vue.extend({
	name: 'NotFound',
	components: {
		Header,
		Footer,
	},
})
</script>

<style lang='less'>
.notfound {
	background: #ffb6c1;
	width: 100%;
	text-align: center;
}
</style>