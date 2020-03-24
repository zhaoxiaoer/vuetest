<template>
	<div class="header">
		<div>
			<router-link to="/">首页</router-link>
			<router-link to="/about">关于</router-link>
		</div>
	</div>
</template>

<script>
import Vue from 'vue'

export default {
	name: 'Header',
	mounted () {
		console.log('header mounted')
	}
}
</script>

<style lang="less">
.header {
	margin-bottom: 10px;
	width: 100%;
	text-align: center;
}
</style>