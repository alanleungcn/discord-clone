<template>
	<div class="app">
		<TheNav />
		<router-view />
	</div>
</template>

<script>
import TheNav from '@/components/TheNav.vue';

export default {
	components: {
		TheNav
	}
};
</script>

<style lang="scss">
html,
body {
	margin: 0;
	padding: 0;
	width: 100%;
	height: 100%;
	overflow-x: hidden;
	font-family: 'Roboto', sans-serif;
}

.app {
	width: 100%;
	height: 100%;
	display: flex;
	color: #dcddde;
}

input {
	color: #dcddde;
}
</style>
