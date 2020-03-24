<template>
	<div class="user">
		<Header/>
		
		<button @click="goBack">返回</button>
		
		<p>我是{{ username }}，postid: {{ postid }}</p>
		<router-link to="/user/zhao1/post/1">zhao1</router-link>
		<router-link to="/user/zhao2/post/2">zhao2</router-link>
		<button @click="routerpush">zhao33</button>
		
		<!-- 命名路由 -->
		<router-link :to="{ name: 'user', params: {username: 'zhao5', postid: 5}}">zhao5</router-link>
		
		<div>计数: {{ count }}</div>
		<button @click="increment">加</button>
		
		<!-- 嵌套路由 -->
		<router-view></router-view>
		<router-view name="a"></router-view>
		
		<Footer/>
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
	props: ['username', 'postid'],
	data: function () {
		return {
			count: 0
		}
	},
	methods: {
		goBack: function () {
			window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
		},
		routerpush: function () {
			this.$router.push('/user/zhao3/post/3')
		},
		increment () {
			this.count++
		},
	},
	watch: {
		'$route' (to, from) {
			console.log('to: ' + to.path + ", from: " + from.path)
		},
	},
	beforeRouteUpdate (to, from, next) {
		console.log('0 to: ' + to.path + ", from: " + from.path)
		next()
	},
})
</script>

<style lang='less'>
.user {
	background: red;
	text-align: center;
}
</style>