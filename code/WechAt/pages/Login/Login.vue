杨浦玉:
<!-- <template>
	<view class="content">
    <div>
		 <h1> {{title}} </h1>
         <input type="text"  placeholder="please input email">
         <input type="password" placeholder="please input Passwords">
		 <div class="login-button" @click="login" type="submit">Login</div>
	</div>
	</view>
 </template>
 <script>
 export default {
       name: 'Login',
        data() {
            return {
				title: 'Login (登录)',
                email: '',
                password: ''
            }
        },
        methods: {
            login() {
                console.log('submitted')
				console.log(this.email)
				console.log(this.password)
            }
        }
    }
	
	// app.component('login-form', {
	// 	template: ',
	// 		<div>
	// 			<h1> {{title}} </h1>
	// 			<input type='email' v-model='email' />
	// 			<input type="password" v-model='password' />
	// 		</div>
	// 	',
	// 	data() {
	// 		return {
	// 			title: 'Login Form',
	// 			email: '',
	// 			password: ''
	// 		}
	// 	},
	// 	methods: {
	// 		handleSubmit() {
	// 			console.log(this.email, this.password)
	// 		}
	// 	} 		
	// }) 
 <script/>

<style>

</style> -->



<!-- puyu is modifying -->
<template>
	<view class="content">

		<div>
			 <h1> {{title}} </h1>
		     <input type="text" v-model='email' placeholder="please input E-mail">
		     <input type="password" v-model='passwords' placeholder="please input Passwords">
			 <button class="login-button" @click="login" type="submit">Login</button>
			 <button class="reg-button" @click="register" type="submit">register</button>
<!-- 			 <button class="del-button" @click="delete_account" type="submit">Delete</button> -->
		</div>

	</view>
 
</template>

<script>
	export default {
		data() {
			return {
				title: "Login (登录)",
				email: '',
				passwords: '',
				user_id: 0
			}
		},
		methods: {
			login() {
				// console.log(this.email,  this.passwords)
				uniCloud.callFunction({
					name: 'query',
					data: {
						sentence: 'SELECT * FROM Chat_user WHERE Email = ?',
						//forget !!!E_mail? EMAIL? Email
						arguments: [this.email]
					},

					success: res => {
						// console.log('kill me')
						// console.log(res.result[0]['User_id'], res.result[0]['User_name'])
						if (this.passwords!=res.result[0]['User_password']){//!!not sure
							this.register()
						}
						else {
							this.user_id = res.result[0]['User_id']
							getApp().globalData.user_email = this.email
							getApp().globalData.user_id = this.user_id 
							console.log(getApp().globalData.user_id)
							this.$router.push('/pages/account/account')
						}
					},					
					fail: err=>{
						console.log(getApp().globalData.user_email) // 'test'
						console.log(this.email, this.passwords)
						console.log(err)
					}
				})
			},
		
			register(){
				 //直接跳转
				 console.log(this.email, this.passwords)
				 this.$router.push('/pages/register/register')
				
				
			}
			
			// delete_account(){
			// 	this.$router.push('/pages/delete/delete')
			// 	 this.$router.push('/pages/register/register')	
			// }
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
	.reg-button:hover {
	  background-color: #f44336;
	  color: white;
	}
	
	
</style>


