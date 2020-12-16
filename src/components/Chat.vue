<template>
	<div class="chat">
		<Message :msg="msgs" />
		<div class="input-wrapper">
			<input v-model="input" class="text-box" @keydown.enter="sendMsg" />
		</div>
	</div>
</template>

<script>
import Message from '@/components/Message.vue';

export default {
	components: {
		Message
	},
	data() {
		return {
			input: '',
			msgs: []
		};
	},
	methods: {
		sendMsg() {
			const msg = {
				name: this.$store.state.name,
				msg: this.input,
				time: Date.now()
			};
			this.input = '';
			this.$socket.emit('sendMsg', msg);
			this.msgs.push(msg);
		}
	},
	sockets: {
		getMsg(msg) {
			this.msgs.push(msg);
		}
	}
};
</script>

<style lang="scss" scoped>
@mixin center {
	display: flex;
	align-items: center;
	justify-content: center;
}

.chat {
	width: 100%;
	display: flex;
	flex-direction: column;
	height: 100%;
	justify-content: space-between;
}

.input-wrapper {
	@include center;
	width: 100%;
	align-self: flex-end;
	height: 44px;
	margin-bottom: 24px;
	input {
		border-radius: 8px;
		margin: 0 16px 0 16px;
		width: 100%;
		border: none;
		outline: none;

		padding: 0 15px 0 15px;
		font-size: 16px;
		height: 44px;
		background-color: #40444b;
	}
}
</style>
