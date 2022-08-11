<template>
	<view>
		<view class="submit">
			<view class="submit-chat">
				<textarea auto-height="true" class="chat-send btn">
				</textarea>
				<view class="bt-submit">
					<image src="../static/send.png"></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"submit",
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
	.submit{
		background-color: #c2c2c2;
		border-top: 0px solid #ffffff;
		width: 100%;
		height: 90rpx;
		align-self: flex-end;
		z-index: 100;
		}
	.submit-chat{
		width: 96%;
		padding-left: 20px;
		display: flex;
		align-items: flex-end;
		box-sizing: border-box;
		image{
			width:56rpx;
			height:56rpx;
			margin:0 10rpx;
			flex: auto;
		}
		.btn{
			flex:auto;
			background-color: #FFFFFF;
			max-height:160rpx;
			margin: 0 5rpx;
		}
	}
		
</style>
