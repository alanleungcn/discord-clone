<template>
	<div class="control">
		<div class="info-wrapper">
			<img src="@/assets/img/avatar.png" />
			<span>{{ name }}</span>
		</div>
		<div class="btn-wrapper">
			<div class="img-wrapper" @click="muteState = !muteState">
				<img :src="muteImg" width="20" height="20" />
			</div>
			<div class="img-wrapper" @click="deafenState = !deafenState">
				<img :src="deafenImg" width="20" height="20" />
			</div>
			<div class="img-wrapper">
				<img
					:src="require('@/assets/img/setting.svg')"
					width="20"
					height="20"
				/>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			muteState: false,
			deafenState: false
		};
	},
	computed: {
		muteImg() {
			return this.muteState
				? require('@/assets/img/muteActive.svg')
				: require('@/assets/img/mute.svg');
		},
		deafenImg() {
			return this.deafenState
				? require('@/assets/img/deafenActive.svg')
				: require('@/assets/img/deafen.svg');
		},
		name() {
			return this.$store.state.name || 'Enter name';
		}
	},
	methods: {
		playAudio(name) {
			new Audio(require(`@/assets/audio/${name}.mp3`)).play();
		}
	},
	watch: {
		muteState(val) {
			val ? this.playAudio('mute') : this.playAudio('unmute');
		},
		deafenState(val) {
			val ? this.playAudio('deafen') : this.playAudio('undeafen');
		}
	}
};
</script>

<style lang="scss">
@mixin center {
	display: flex;
	align-items: center;
	justify-content: center;
}

.control {
	width: 100%;
	min-height: 53px;
	display: flex;
	background-color: #292b2f;
	justify-content: space-between;
}

.info-wrapper {
	@include center;
	font-weight: bold;
	img {
		width: 32px;
		height: 32px;
		border-radius: 50%;
		margin: 0 8px 0 8px;
	}
}

.btn-wrapper {
	@include center;
	margin-right: 8px;
}

.img-wrapper {
	@include center;
	width: 32px;
	height: 32px;
	cursor: pointer;
	border-radius: 5px;
	user-select: none;
	&:hover {
		background-color: #33363b;
	}
}
</style>
