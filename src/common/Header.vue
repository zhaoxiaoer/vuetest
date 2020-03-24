<template>
	<div class="header">
		<div>
			<a href="/">首页</a>
			<a href="/about">关于</a>
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