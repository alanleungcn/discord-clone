<template>
	<div class="controll-wrapper">
		<div v-if="$store.state.rtcConnected" class="voice">
			<div class="top">
				<div>
					<div class="status">
						<img src="@/assets/img/connection.svg" width="16" height="16" />
						<div>Voice Connected</div>
					</div>
					<div class="info">Voice / Room</div>
				</div>
				<div class="img-wrapper" @click="disconnect()">
					<img src="@/assets/img/hang.svg" />
				</div>
			</div>
			<div class="bot">
				<div class="btn">
					<img src="@/assets/img/camera.svg" width="20" height="20" />Video
				</div>
				<div class="btn">
					<img src="@/assets/img/screen.svg" width="20" height="20" />Screen
				</div>
			</div>
		</div>
		<div class="control">
			<div class="info-wrapper">
				<img src="@/assets/img/avatar.png" />
				<span>{{ name }}</span>
			</div>
			<div class="btn-wrapper">
				<div class="img-wrapper" @click="updateMute">
					<img :src="muteImg" width="20" height="20" />
				</div>
				<div class="img-wrapper" @click="updateDeafen">
					<img :src="deafenImg" width="20" height="20" />
				</div>
				<div class="img-wrapper">
					<img src="@/assets/img/setting.svg" width="20" height="20" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		voice: Boolean
	},
	computed: {
		muteImg() {
			return this.mute
				? require('@/assets/img/muteActive.svg')
				: require('@/assets/img/mute.svg');
		},
		deafenImg() {
			return this.deafen
				? require('@/assets/img/deafenActive.svg')
				: require('@/assets/img/deafen.svg');
		},
		name() {
			return this.$store.state.name || 'Enter name';
		},
		mute() {
			return this.$store.state.mute;
		},
		deafen() {
			return this.$store.state.deafen;
		}
	},
	methods: {
		playAudio(name) {
			new Audio(require(`@/assets/audio/${name}.mp3`)).play();
		},
		disconnect() {
			this.$store.commit('setRtc', false);
		},
		updateMute() {
			this.$store.commit('setMute', !this.mute);
		},
		updateDeafen() {
			this.$store.commit('setDeafen', !this.deafen);
		}
	},
	watch: {
		mute(val) {
			val ? this.playAudio('mute') : this.playAudio('unmute');
		},
		deafen(val) {
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
	height: 53px;
	display: flex;
	background-color: #292b2f;
	justify-content: space-between;
}

.voice {
	box-sizing: border-box;
	width: 100%;
	height: 89px;
	padding: 8px;
	background-color: #292b2f;
	border-bottom: 1px solid hsla(0, 0%, 100%, 0.06);
	.top {
		display: flex;
		justify-content: space-between;
		.status {
			img {
				margin-right: 4px;
			}
			display: flex;
			color: #43b581;
			font-weight: 500;
			font-size: 13.5px;
			padding-bottom: 2px;
		}
		.info {
			color: #b9bbbe;
			font-size: 12px;
		}
	}
	.bot {
		width: 100%;
		height: 100%;
		margin-top: 8px;
		display: flex;
		.btn {
			flex: 1 1 auto;
			@include center;
			height: 32px;
			color: #ffffff;
			font-size: 14px;
			border-radius: 3px;
			background-color: #36393f;
			img {
				margin-right: 8px;
			}
			&:first-child {
				margin-right: 4px;
			}
			&:last-child {
				margin-left: 4px;
			}
		}
	}
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
