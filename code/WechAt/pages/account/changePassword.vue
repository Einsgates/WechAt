<template>
	<view>
		<!-- display the user ID -->
		<view class="userId">
			<text class="userIdText">Your User ID: {{user_id}}</text>
		</view>

		<!-- input box for the current password -->
		<view class="inputBox">
			<input class="input" type="password" placeholder="Current Password" v-model="currentPassword" />
		</view>

		<!-- input box for the new password -->
		<view class="inputBox">
			<input class="input" type="password" placeholder="New Password" v-model="newPassword" />
		</view>

		<!-- button for submitting the new password -->
		<view class="submitButton">
			<button class="submit" @click="submit">Submit</button>
		</view>

	</view>

</template>


<script>

var user_id = getApp().globalData.user_id

export default {
	data() {
		return {
			currentPassword: '',
			newPassword: '',
			user_id: user_id
		}
	},
	onLoad() {
		
	},
	methods: {
		// change password
		submit() {
			uniCloud.callFunction({
				name: 'query',
				data: {
					sentence: 'SELECT * FROM Chat_user WHERE User_id = ?',
					arguments: [user_id]
				}
			}).then(res => {
				console.log(user_id)
				if (res.result[0]["User_password"] == this.currentPassword) {
					uniCloud.callFunction({
						name: 'query',
						data: {
							sentence: 'UPDATE Chat_user SET User_password = ? WHERE User_id = ?',
							arguments: [this.newPassword, user_id]
						}
					}).then(res => {
						window.alert("Password changed successfully!")
					}).catch(err => {
						console.log(err)
					})
				} else {
					window.alert("Current password is incorrect!")
				}
			}).catch(err => {
				console.log(err)
			})
		}
	}
}

</script>

