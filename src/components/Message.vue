<template>
	<div class="msg-wrapper">
		<div
			class="msg"
			:style="isCompress(item, msg[idx - 1]) ? '' : 'margin-top: 17px;'"
			v-for="(item, idx) in msg"
			:key="idx"
		>
			<img
				v-if="!isCompress(item, msg[idx - 1])"
				src="@/assets/img/avatar.png"
				width="40"
				height="40"
			/>
			<div v-if="!isCompress(item, msg[idx - 1])" class="msg-content">
				<div>
					<span class="name">{{ item.name }}</span>
					<span class="date">{{ getDate(item.time) }}</span>
				</div>
				<span class="ctx">{{ item.msg }}</span>
			</div>
			<div v-if="isCompress(item, msg[idx - 1])" class="msg-content-compress">
				<div class="date">{{ getTime(new Date(item.time)) }}</div>
				<span class="ctx">{{ item.msg }}</span>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		msg: Array
	},
	methods: {
		getDate(time) {
			const sec = Math.floor((Date.now() - time) / 1000);
			let delta = sec / (60 * 60 * 24);
			const date = new Date(time);
			return delta < 1
				? `Today at ${this.getTime(date)}`
				: delta < 2
				? `Yesterday at ${this.getTime(date)}`
				: `${date.getFullYear()}/${(date.getMonth() + 1)
						.toString()
						.padStart(2, '0')}/${date
						.getMinutes()
						.toString()
						.padStart(2, '0')}`;
		},
		getTime(date) {
			var hr = date.getHours();
			var min = date.getMinutes();
			var ampm = hr >= 12 ? 'PM' : 'AM';
			hr = hr % 12;
			hr = hr ? hr : 12;
			return `${hr}:${min.toString().padStart(2, '0')} ${ampm}`;
		},
		isCompress(curr, pass) {
			if (!pass) return;
			const currDate = new Date(curr.time);
			const passDate = new Date(pass.time);
			if (
				curr.name === pass.name &&
				currDate.getMinutes() === passDate.getMinutes()
			)
				return true;
			else return false;
		}
	}
};
</script>

<style lang="scss" scoped>
.msg {
	width: 100%;
	display: flex;
	align-items: center;
	position: relative;
	max-height: 40px;
	padding: 5px 72px 5px 72px;
	img {
		position: absolute;
		left: 16px;
		border-radius: 20px;
	}
	.name {
		font-weight: 500;
	}
	.ctx {
		font-weight: 300;
	}
	&:hover {
		background-color: rgba(4, 4, 5, 0.07);
		.date {
			color: #72767d;
		}
	}
}

.msg-content {
	.date {
		color: #72767d;
		font-size: 12px;
		margin-left: 8px;
	}
	div {
		margin-bottom: 2.5px;
	}
}

.msg-content-compress {
	.date {
		height: 100%;
		display: flex;
		align-items: center;
		top: 0;
		justify-content: flex-end;
		color: transparent;
		font-size: 12px;
		position: absolute;
		left: 0;
		width: 56px;
		margin: 0 4px 0 4px;
		text-align: right;
	}
}

.msg-wrapper {
	width: 100%;
	flex: 1 1 auto;
	height: 0px;
	overflow: hidden scroll;
	&::-webkit-scrollbar {
		width: 16px;
		height: 16px;
	}
	&::-webkit-scrollbar-thumb {
		border-radius: 8px;
		background-color: #202225;
		border: 4px solid transparent;
		background-clip: padding-box;
	}
	&::-webkit-scrollbar-track {
		background-color: #2e3338;
		border: 4px solid transparent;
		background-clip: padding-box;
		border-radius: 8px;
		margin-bottom: 8px;
	}
}
</style>
