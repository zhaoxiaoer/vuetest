<template>
	<div class="cnt">
		<Header></Header>
		<Web>
			<p>这段话不会在小程序显示</p>
		</Web>
		<a href="/user/2/post/3">查看2号用户</a>
		<router-link to="/user/zaa/post/55">查看用户</router-link>
		<Footer></Footer>
	</div>
</template>

<script>
import Vue from 'vue'
import Header from '../common/Header.vue'
import Footer from '../common/Footer.vue'
import Web from '../common/Web.vue'

export default Vue.extend({
	name: 'Home',
	components: {
		Header,
		Footer,
		Web,
	},
})
</script>

<style lang="less">
.cnt {
	margin-top: 20px;
}
</style>