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
@font-face {
	font-family: Whitney;
	src: url('./assets/font/whitneymedium.otf') format('opentype');
	font-weight: 400;
}

@font-face {
	font-family: Whitney;
	src: url('./assets/font/whitneybook.otf') format('opentype');
	font-weight: 300;
}

@font-face {
	font-family: Whitney;
	src: url('./assets/font/whitneysemibold.otf') format('opentype');
	font-weight: 500;
}

html,
body {
	margin: 0;
	padding: 0;
	width: 100%;
	height: 100%;
	overflow-x: hidden;
	font-family: 'Whitney', sans-serif;
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
