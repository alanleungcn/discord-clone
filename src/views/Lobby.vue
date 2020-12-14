<template>
	<div class="lobby-wrapper">
		<div class="control-wrapper">
			<div class="top-wrapper"></div>
			<Control />
		</div>
		<div class="lobby">
			<div class="top-wrapper"></div>
			<div class="input-wrapper">
				<img
					src="https://discord.com/assets/4f004ac9be168ac6ee18fc442a52ab53.svg"
					style="margin-bottom: 10px"
				/>
				<span>NAME</span>
				<input v-model="name" />
				<button>Enter</button>
			</div>
		</div>
	</div>
</template>

<script>
import Control from '@/components/Control.vue';

export default {
	components: {
		Control
	},
	data() {
		return {
			name: ''
		};
	}
};
</script>

<style lang="scss" scoped>
.lobby-wrapper {
	width: 100%;
	height: 100%;
	display: flex;
}

.lobby {
	width: 100%;
	height: 100%;
	background-color: #36393f;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
}

.input-wrapper {
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	margin-bottom: auto;
	input {
		width: 250px;
		outline: none;
		background-color: #303339;
		padding: 10px;
		border-radius: 2.5px;
		transition: 0.25s;
		border: 1px solid #232529;
		&:hover {
			border: 1px solid #040405;
		}
		&:focus {
			border: 1px solid #7289da;
		}
	}
	span {
		color: #8e9297;
		font-weight: bold;
		margin: 0 auto 5px 0;
		font-size: 12.5px;
	}
	button {
		width: 100%;
		height: 35px;
		background-color: #7289da;
		outline: none;
		border: none;
		color: #ffffff;
		cursor: pointer;
		transition: 0.25s;
		border-radius: 2.5px;
		margin-top: 15px;
		&:hover {
			background-color: #677bc4;
		}
	}
}

.top-wrapper {
	width: 100%;
	height: 48px;
	margin-bottom: auto;
	box-shadow: 0 1px 0 rgba(4, 4, 5, 0.2), 0 1.5px 0 rgba(6, 6, 7, 0.05),
		0 2px 0 rgba(4, 4, 5, 0.05);
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
