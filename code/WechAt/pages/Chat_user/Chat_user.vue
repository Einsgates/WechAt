<!-- puyu is modifying -->
<template>
	<view class="content">

		<div class="flex-container">
			<div class="card">
			  <img class="profile" src="/static/logo.png" alt="img1">
			</div>
			<div class="texting">
				<h4 class="name"><b>{{name1}}</b></h4>
				<p class="chatting">{{chat1}}</p>
			</div>
		</div>
		<div class="flex-container">
			<div class="card">
			  <img class="profile" src="/static/logo.png" alt="img1">
			</div>
			<div class="texting">
				<h4 class="name"><b>{{name2}}</b></h4>
				<p class="chatting">{{chat2}}</p>
			</div>
		</div>
		</div> 
		<div class="flex-container">
			<div class="card">
			  <img class="profile" src="/static/logo.png" alt="img1">
			</div>
			<div class="texting">
				<h4 class="name"><b>{{name3}}</b></h4>
				<p class="chatting">{{chat3}}</p>
			</div> 
		</div>
		</div>
		<div class="flex-container">
			<div class="card">
			  <img class="profile" src="/static/logo.png" alt="img1">
			</div>
			<div class="texting">
				<h4 class="name"><b>{{name4}}</b></h4>
				<p class="chatting">{{chat4}}</p>
			</div>
		</div>
	</view>

</template>

<script>
	export default {
		data() {
			return {
				title: "Wechat",
				name1: "Jiayuan H",
				name2: "Jack Bai",
				name3: "Zhongqi W",
				name4: "Puyu Yang",
				chat1: "I am a CS student.",
				chat2: "I am an ECE",
				chat3: "I am an ECE",
				chat4: "I am a CE."
			}
		},
		methods: {
			getUserList() {
				// should return a list of user who has a chat history with me
				// getProfile
			},
			getChatHist() {
				// return the last message history // this should be in the chat session
			},
			getProfile() {
				// get user's profile
			}
		}
	}
</script>

<style>
	
	.flex-container {
	  display: flex;
	  flex-direction: row;
	}
	
	.card{
		float: left;
		padding:6px;
	}
	
	.profile{
		flex:30%;
	}
	
	.name{
		flex:70%;
		padding:0.3em;
		clear:right;
	}
	
	.chatting{
		float: left;
		padding: 10px 0px 0px 3px;
	}
</style>