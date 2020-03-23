<template>
	<div class="cnt">
		<Header></Header>
		<div>
			<a href="/">首页</a>
			<a href="/about">关于</a>
		</div>
	</div>
</template>

<script>
import Vue from 'vue'
import Header from '../common/Header.vue'

export default Vue.extend({
	name: 'Home',
	components: {
		Header,
	},
})
</script>

<style lang="less">
.cnt {
	margin-top: 20px;
}
</style>