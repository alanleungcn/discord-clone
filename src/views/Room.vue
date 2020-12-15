<template>
	<div class="room-wrapper">
		<div class="control-wrapper">
			<div class="top-wrapper">
				<span>Room</span>
			</div>
			<div class="channel-wrapper">
				<div
					class="channel"
					:class="{ 'channel-active': textActive }"
					@click="
						textActive = true;
						voiceActive = false;
					"
				>
					<img src="@/assets/img/text.svg" width="20" height="20" />
					<span>Text</span>
				</div>
				<div
					class="channel"
					:class="{ 'channel-active': voiceActive }"
					@click="joinVoice"
				>
					<img src="@/assets/img/voice.svg" width="20" height="20" />
					<span>Voice</span>
				</div>
				<div class="client-wrapper">
					<div class="client" v-for="(client, idx) in voiceClients" :key="idx">
						<img
							src="@/assets/img/avatar.png"
							width="24"
							height="24"
							class="avatar"
						/>
						<div>{{ client.name }}</div>
						<div class="status">
							<img
								v-if="client.mute"
								src="@/assets/img/muteActive.svg"
								width="16"
								height="16"
							/>
							<img
								v-if="client.deafen"
								src="@/assets/img/deafenActive.svg"
								width="16"
								height="16"
							/>
						</div>
					</div>
				</div>
			</div>
			<Control />
		</div>
		<div class="chat-wrapper">
			<div class="top-wrapper">
				<img src="@/assets/img/text.svg" width="24" height="24" />
				<span>Text</span>
			</div>
			<Chat />
		</div>
	</div>
</template>

<script>
import Control from '@/components/Control.vue';
import Chat from '@/components/Chat.vue';

export default {
	components: {
		Control,
		Chat
	},
	data() {
		return {
			textActive: true,
			voiceActive: false,
			voiceClients: []
		};
	},
	methods: {
		joinVoice() {
			this.$socket.emit('joinVoice', {
				mute: this.$store.state.mute,
				deafen: this.$store.state.mute
			});
			this.voiceClients.push({
				name: this.$store.state.name,
				mute: this.$store.state.mute,
				deafen: this.$store.state.mute
			});
			this.textActive = false;
			this.voiceActive = true;
		}
	},
	sockets: {
		addVoiceClient(client) {
			this.voiceClients.push(client);
		}
	},
	mounted() {
		this.$socket.emit('joinRoom', { name: 'test' });
	}
};
</script>

<style lang="scss" scoped>
@mixin center {
	display: flex;
	align-items: center;
	justify-content: center;
}

.room-wrapper {
	width: 100%;
	height: 100%;
	display: flex;
}

.chat-wrapper {
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	background-color: #36393f;
}

.top-wrapper {
	width: 100%;
	min-height: 48px;
	box-shadow: 0 1px 0 rgba(4, 4, 5, 0.2), 0 1.5px 0 rgba(6, 6, 7, 0.05),
		0 2px 0 rgba(4, 4, 5, 0.05);
	display: flex;
	align-items: center;
	img + span {
		margin-left: 8px;
	}
	img {
		margin-left: 16px;
	}
	span {
		margin-left: 16px;
		color: #ffffff;
		font-weight: bold;
	}
}

.client-wrapper {
	width: 100%;
	/* padding-left: 36px;
	padding-bottom: 8px; */
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	justify-content: center;
	box-sizing: border-box;
	.client {
		display: flex;
		align-items: center;
		height: 32px;
		width: 196px;
		box-sizing: border-box;
		margin-right: 8px;
		margin-bottom: 2px;
		border-radius: 4px;
		.avatar {
			margin-left: 8px;
			border-radius: 100px;
			border: 1px solid transparent;
		}
		.status {
			height: 100%;
			margin-left: auto;
			@include center;
			img {
				margin-left: 4px;
			}
			img:last-child {
				margin-right: 8px;
			}
		}
		div {
			margin-left: 8px;
		}
		&:hover {
			background-color: rgba(79, 84, 92, 0.16);
		}
	}
}

.channel-wrapper {
	margin-top: 16px;
	@include center;
	flex-direction: column;
	margin-bottom: auto;
	.channel {
		width: 224px;
		height: 32px;
		background-color: #2f3136;
		border-radius: 4px;
		display: flex;
		cursor: pointer;
		margin-bottom: 2px;
		align-items: center;
		span {
			color: #8e9297;
			margin-left: 6px;
		}
		img {
			margin-left: 8px;
		}
		&:hover {
			background-color: rgba(79, 84, 92, 0.16);
		}
	}
}

.channel-active {
	span {
		color: #ffffff !important;
	}
	background-color: rgba(79, 84, 92, 0.32) !important;
}

.control-wrapper {
	min-width: 240px;
	height: 100%;
	background-color: #2f3136;
	display: flex;
	flex-direction: column;
	flex: 1 1 240px;
}
</style>
