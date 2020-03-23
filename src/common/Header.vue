<template>
	<div class="header">
		<p>header</p>
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