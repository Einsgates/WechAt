<!-- This file is used for accounts, ... -->

<template>
	<view class="content">

		<!-- avatar image -->
		<view class="avatar">
			<image class="srcImage" :src="item['Avator']" mode="aspectFill"></image>
		</view>

		<!-- userid, username, email, status -->
		<view class="userInfo">
			<view class="userid">
				<text class="useridText">Your user ID is: {{item['User_id']}}</text>
			</view>
			<view class="username">
				<text class="usernameText">{{item['User_name']}}</text>
			</view>
			<view class="email">
				<text class="emailText">{{item['Email']}}</text>
			</view>
			<view class="status">
				<text class="statusText">Current status: {{item['Status']}}</text>
			</view>
		</view>

		<!-- button to change password -->
		<view class="changePassword">
			<button class="changePasswordButton" @click="changePassword">Change Password</button>
		</view>

	</view>
</template>

<script>
	var user_id = getApp().globalData.user_id

	export default {
		data() {
			return {
				item: {}
			}
		},
		methods: {
			// get the information from the database
			getInfo() {
				uniCloud.callFunction({
					name: 'query',
					data: {
						sentence: 'SELECT * FROM Chat_user WHERE User_id = ?',
						arguments: [user_id]
					}
				}).then(res => {
					this.item = res.result[0]
				}).catch(err => {
					console.log(err)
				})
			},
			// change password
			changePassword() {
				uni.navigateTo({
					url: '../account/changePassword'
				})
			}
		},
		onLoad(){ 
			this.getInfo()
		}
	}
</script>

<style>
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

	/* cut the avatar image by using a circle mask */
	.avatar {
		width: 200rpx;
		height: 200rpx;
		border-radius: 100%;
		overflow: hidden;
	}

	.srcImage {
		width: 100%;
		height: 100%;
		border-radius: 100%;
	}

	.userid {
		font-size: 28rpx;
		color: #8f8f94;
	}

	/* bold black */
	.username {
		font-size: 28rpx;
		color: #000000;
		/* bold */
		font-weight: bold;
	}


</style>
