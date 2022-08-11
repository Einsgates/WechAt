
<!-- puyu is modifying -->
<template>
	<view class="content">

		<div>
			 <h2> {{title}} </h2>
			<div class="form-group">
			  <label for="Email">Email</label>
			  <input type="text" class="form-control col-lg-9" v-model='email' aria-describedby="emailHelp" name="email" placeholder="Enter email">
			</div>

			 <div class="form-group">
			   <label for="User_password">passwords </label>
			   <input type="text" class="form-control col-lg-9" v-model='passwords' aria-describedby="emailHelp" placeholder="Enter last name" name="l_name">
			 </div> 
			 
			 <button class="button-76" role="button" @click="register" type="submit">DELETE</button>

		</div>

	</view>

</template>

<script>
	export default {
		data() {
			return {
				title: "Delete WecHat Account",
				username: '',
				passwords: ''
			}
		},
		methods: {
		// 	uniCloud.callFunction({
		// 		name: 'query',
		// 		data: {
		// 			sentence: 'DELETE FROM User_id WHERE Email = ?',
		// 			arguments: [this.email]
		// 		},
			
		// 		success: res => {
		// 			// console.log('kill me')
		// 			// console.log(res.result[0]['User_id'], res.result[0]['User_name'])
		// 			if (this.passwords!=res.result[0]['User_password']){//!!not sure
		// 				this.register()
		// 			}
		// 			else {
		// 				this.user_id = res.result[0]['User_id']
		// 				getApp().globalData.user_email = this.email
		// 				getApp().globalData.user_id = this.user_id 
		// 				console.log(getApp().globalData.user_id)
		// 				this.$router.push('/pages/account/account')
		// 			}
					
					
		// 		},					
		// 		fail: err=>{
		// 			console.log(getApp().globalData.user_email) // 'test'
		// 			console.log(this.email, this.passwords)
		// 			console.log(err)
		// 		}
		// 	})
		// }
	}
	}
	 
</script>


<style>
	
	h2 {
		padding-bottom: 20px;
	}
	
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
		background-color: royalblue;
		border: none;
		color: white;
		text-align: center;
		text-decoration: none;
		display: inline-block;
		font-size: 14px;
		margin: 4px 2px;
		width: 100%
	}
	
	.button-76 {
	  background-color: #cf245f;
	  background-image: linear-gradient(to bottom right, #fcd34d, #ef4444, #ec4899);
	  border: 0;
	  border-radius: .25rem;
	  box-sizing: border-box;
	  color: #fff;
	  cursor: pointer;
	  font-family: ui-sans-serif,system-ui,-apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
	  font-size: 1.125rem; /* 18px */
	  font-weight: 600;
	  line-height: 1.75rem; /* 28px */
	  padding: 1rem 1.25rem;
	  text-align: center;
	  user-select: none;
	  -webkit-user-select: none;
	  touch-action: manipulation;
	  border: 30px;
	}
	
	.button-76:hover {
	  box-shadow: none;
	}
	
	@media (min-width: 1024px) {
	  .button-76 {
	    font-size: 1.5rem; /* 24px */
	    padding: 1rem 1.5rem;
	    line-height: 2rem; /* 32px */
	  }
	}
	
	
</style>


