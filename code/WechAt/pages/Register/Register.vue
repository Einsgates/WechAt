
<!-- puyu is modifying -->
<template>
	<view class="content">

		<div>
			 <h1> {{title}} </h1>
			<div class="form-group">
			   <label for="User_name">User name </label>
			   <input type="text" class="form-control col-lg-9" v-model='username' aria-describedby="emailHelp" placeholder="Enter first name" name="f_name">
			 </div>

			 <div class="form-group">
			   <label for="User_password">passwords </label>
			   <input type="text" class="form-control col-lg-9" v-model='passwords' aria-describedby="emailHelp" placeholder="Enter last name" name="l_name">
			 </div>

			<div class="form-group">
			   <label for="Avator">profile pic </label>
			   <input type="text" class="form-control col-lg-9" v-model='avator' aria-describedby="emailHelp" name="email" placeholder="upload a picture">
			 </div>      

			 <div class="form-group">
			   <label for="Email">Email</label>
			   <input type="text" class="form-control col-lg-9" v-model='email' aria-describedby="emailHelp" name="email" placeholder="Enter email">
			 </div>

			 
			 <button class="submit" @click="register" type="submit">register</button>

		</div>

	</view>

</template>

<script>
	export default {
		data() {
			return {
				title: "Register ",
				username: '',
				passwords: '',
				avator: '',
				email: ''	
			}
		},
		methods: {
			register() {
				// console.log(this.username,  this.passwords)
				uniCloud.callFunction({
					name: 'query',
					data: {
						sentence: 'Insert Into Chat_user ( User_name, User_password, Avator, Email) Values ( ?, ?, ?, ? )',
						arguments: [this.username, this.passwords, this.avator, this.email]
					},
					success: res => {
						console.log(res.result[0])
						this.$router.push('/pages/Login/Login')
					},					
					fail: err=>{
						console.log(this.username, this.passwords, this.avator, this.email)
						console.log(err)
					}
				})
			}
		}
	}
</script>


<style>
	
	input {
		border: 1px solid;
		padding: 20px;
		box-shadow: 5px 5px 20px #888888;
	}
	
	.login-button:hover {
	  background-color: #f44336;
	  color: white;
	}
	
	button {
		padding: 14px 40px;
		background-color: royalblue; /* Green */
		border: none;
		color: white;
		text-align: center;
		text-decoration: none;
		display: inline-block;
		font-size: 14px;
		margin: 4px 2px;
		width: 100%
	}
	
</style>


