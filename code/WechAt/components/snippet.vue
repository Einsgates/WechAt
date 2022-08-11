<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>		
		</view>
		<view class="text-1">
			<text class="intro">{{intro}}</text>		
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'pdb',
				intro: 'it is a protein data bank'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	/*place logo and title on the same row, then place the introduction*/
	/*once click the link, jump to the url or uri*/
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
