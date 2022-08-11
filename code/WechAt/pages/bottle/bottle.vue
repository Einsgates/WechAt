<!-- puyu is modifying -->
<template>
	<view class="content">
		<image class="Bottle_image" src="/static/logo.png"></image>
		<view class="text-area"
			<text class="title">{{title}}</text>
		<div>
			<button v-on:click="sendMessage()" class="send_button">{{message_send}}</button>
			<form v-if="message_box_toggle">
			  <p><label for="w3review">Edit your message</label></p>
			  <textarea id="w3review" name="w3review" rows="3" cols="40" v-model='send_default'></textarea>
			  <br>
			  <button class="button-18" role="button" v-on:click="send_out()">Submit</button>
			</form>
			<button v-on:click="findBottle()" v-if="!discard_box_toggle" class="change_button">{{message_find}}</button> <!-- when you find a bottle, you can choose to discard or read -->
			<button v-on:click="seeBottle()" v-if="discard_box_toggle" class="change_button">{{message_see}}</button>
			<textarea id="w3review" name="w3review" rows="3" cols="40" v-if="open_box_toggle" v-model='Receive_content' readonly>{{Receive_content}}</textarea>
			<button v-on:click="discardBottle()" v-if="discard_box_toggle" class="discard_button">{{message_discard}}</button>  <!-- if the bottle is discard, it will be delete in database -->
		</div>
		</view>
	</view>

</template>

<script>
	export default {
		data() {
			return {
				title:'Bottle Message',
				bottleMessage:'message from the Databases',
				message_send: 'Send Message',
				message_find: 'Find Bottle',
				message_see: 'Open Bottle',
				message_discard: 'Discard Message',
				send_default:'Hi, how are you (edit your message here)',
				status:'',
				discard_box_toggle: false,
				message_box_toggle: false,
				open_box_toggle: false,
				send_confirm: false,
				initial_status: 1,
				today: '',
				bottle_id: 0,
				my_user_id: 1,
				Receive_content: '',
				other_user_id: 1,
				other_user_name: '',
				already_open: false,
				receive_time: ''
			}
		},
		methods: {
			sendMessage() {
				this.message_box_toggle = !this.message_box_toggle
				if(this.message_box_toggle) {
					this.message_send = 'Unsend Message'
				}
				else {
					this.message_send = 'Send Message'
				}
			},
			
			
			
			
			send_out() {
				console.log(this.send_default)
				this.today = new Date().toISOString().slice(0, 10)
				console.log(this.today)
				
				// insert a row in bottle
					// INSERT INTO Bottle (Time, User_id2, Status, Content)
					// VALUES (GETDATE(), my_user_id, status, send_content)

				uniCloud.callFunction({
						name: 'query',
						data: {
							sentence: 'INSERT INTO Bottle (Bottle_time, User_id_from, Status, Bottle_content) VALUES (?, ?, ?, ?)',
							arguments: [this.today, 1, this.initial_status, this.send_default]
						},
						success: res => {
							console.log('Success')
							console.log(this.today, 1, this.initial_status, this.send_default)
						},					
						fail: err=>{ 
							console.log(err)
							}
				})
			},
			// 换一个漂流瓶
			// this method is to change another random bottle
			
			
	//-------------------------------------------------------------------------------------------------------------------		
			
			findBottle(){
				console.log('find bottle'),
				this.discard_box_toggle = true
				this.already_open = false
		
				uniCloud.callFunction({
						name: 'query',
						data: {
							sentence: "SELECT Bottle_id FROM Bottle WHERE Status = ? ORDER BY RAND() LIMIT 1",
							arguments: [1]
						},
						success: res => {
							console.log(res.result[0]['Bottle_id'])
							this.bottle_id = res.result[0]['Bottle_id']
						},					
						fail: err=>{
							console.log(err)
						}
				})
			},
			
	//--------------------------------------------------------------------------------------------------------------------
			seeBottle(){
				console.log('open the bottle'),
				this.discard_box_toggle = true
				this.my_user_id = getApp().globalData.user_id
				this.open_box_toggle = !this.open_box_toggle
				this.already_open = true
				
				uniCloud.callFunction({
						name: 'query',
						data: {
							sentence: "UPDATE Bottle SET User_id_to = ? WHERE Bottle_id = ?",
							arguments: [this.my_user_id, this.bottle_id]
						},
						success: res => {
							console.log('Success update')
						},					
						fail: err=>{
							console.log(err)
						}
				})
				
				uniCloud.callFunction({
						name: 'query',
						data: {
							sentence: "SELECT Bottle_id, Bottle_time, User_id_from, Bottle_content FROM Bottle WHERE Bottle_id = ?",
							arguments: [this.bottle_id]
						},
						success: res => {
							console.log(res.result[0])
							this.other_user_id = res.result[0]['User_id_from']
							this.Receive_content = res.result[0]['Bottle_content']
							
							uniCloud.callFunction({
									name: 'query',
									data: {
										sentence: "SELECT User_name FROM Chat_user WHERE User_id = ?",
										arguments: [this.other_user_id]
									},
									success: res => {
										this.other_user_name = res.result[0]['User_name']
										console.log("other's name is: " + res.result[0]['User_name'] + " other's id is: " + this.other_user_id)
										this.Receive_content = this.Receive_content + '\n\n\n\t\t ------ ' + res.result[0]['User_name']
									},					
									fail: err=>{
										console.log(err)
									}
							})
							
						},					
						fail: err=>{
							console.log(err)
						}
				})
			},
			
			discardBottle(){
				// if you discard the box, that means the message is not read, database not update
				console.log('discard the bottle'),
				this.discard_box_toggle = false
				this.open_box_toggle = false
				if(this.already_open = true) {
					uniCloud.callFunction({
							name: 'query',
							data: {
								sentence: "DELETE FROM Bottle WHERE Bottle_id = ?",
								arguments: [this.bottle_id]
							},
							success: res => {
								console.log("success: read but discard the bottle")
							},					
							fail: err=>{
								console.log(err)
							}
					})
				}
			}
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

	.Bottle_image {
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
	
	.send_button {
		background-color: #4CAF50; /* Green */
	    border: none;
	    color: white;
	    padding: 10px 25px;
		margin-top: 10px;
	    text-decoration: none;
	    display: inline-block;
	    font-size: 16px;
		display: block;
	}
	
	.change_button {
		background-color: #4CAF50; /* Green */
	    border: none;
		margin-top: 10px;
	    color: white;
	    padding: 10px 25px;
	    text-decoration: none;
	    display: inline-block;
	    font-size: 16px;
		display: block;
	}
	
	.discard_button {
		background-color: #4CAF50; /* Green */
		margin-top: 10px;
	    border: none;
	    color: white;
	    padding: 10px 25px;
	    text-decoration: none;
	    display: inline-block;
	    font-size: 16px;
		display: block;
	}
	
	textarea {
	  padding: 12px 20px;
	  box-sizing: border-box;
	  border: 2px solid #ccc;
	  border-radius: 4px;
	  background-color: #f8f8f8;
	  font-size: 16px;
	  resize: none;
	}
	
	p {
	  color: navy;
	  padding: 4px;
	  text-indent: 5px;
	  text-transform: uppercase;
	}
	
	.button-18 {
	  align-items: center;
	  background-color: #0A66C2;
	  border: 0;
	  border-radius: 100px;
	  box-sizing: border-box;
	  color: #ffffff;
	  cursor: pointer;
	  display: inline-flex;
	  font-family: -apple-system, system-ui, system-ui, "Segoe UI", Roboto, "Helvetica Neue", "Fira Sans", Ubuntu, Oxygen, "Oxygen Sans", Cantarell, "Droid Sans", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Lucida Grande", Helvetica, Arial, sans-serif;
	  font-size: 16px;
	  font-weight: 600;
	  justify-content: center;
	  line-height: 20px;
	  max-width: 480px;
	  min-height: 40px;
	  min-width: 0px;
	  overflow: hidden;
	  padding: 0px;
	  padding-left: 20px;
	  padding-right: 20px;
	  text-align: center;
	  touch-action: manipulation;
	  transition: background-color 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s, box-shadow 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s, color 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s;
	  user-select: none;
	  -webkit-user-select: none;
	  vertical-align: middle;
	}
	
	.button-18:hover,
	.button-18:focus { 
	  background-color: #16437E;
	  color: #ffffff;
	}
	
	.button-18:active {
	  background: #09223b;
	  color: rgb(255, 255, 255, .7);
	}
	
	.button-18:disabled { 
	  cursor: not-allowed;
	  background: rgba(0, 0, 0, .08);
	  color: rgba(0, 0, 0, .3);
	}
</style>



