<template>
	<div id='hello'>
		<p>{{ greeting }} World2222!</p>
	</div>
</template>

<script>
module.exports = {
	name: 'Hello',
	data: function () {
		return {
			greeting: 'Hello',
		}
	},
}
</script>

<style lang="less">
p {
	font-size: 2em;
	text-align: center;
}
</style>