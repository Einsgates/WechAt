<template>
	<view class="content">
		<!-- make a list of the contents using v-for and content_list -->
		<!-- display the ID of the user -->
		<view class="postid">
			<text class="postid-text">Your user ID is: {{user_id}}</text>
		</view>

		<!-- button for refreshing the page -->
		<button class="btn" @click="refresh">Refresh</button>

		<view v-for="item in items" :key="item['Post_id']">
			<postItem :content="item['Post_content']" :poster="item['Post_sender']" :time="item['Publish_time']" :post_id="item['Post_id']"></postItem>
		</view>
	</view>
</template>

<script>
	import postItem from '@/components/postItem.vue'
	
	// from App.vue
	var user_id = getApp().globalData.user_id

	export default { 
		data() {
			return {
				items: [],
				user_id: user_id
			}
		},
		onLoad() {
			this.getPost()
		},
		methods: {  
			// function for submitting the user input 
			getPost() {
				uniCloud.callFunction({
					name: 'query',
					data: { 
						// get the post from the person and his friends
						sentence: 'SELECT * FROM Post WHERE Post_sender = ? OR Post_sender IN (SELECT User1_id FROM Joined_pri WHERE User2_id = ?) OR Post_sender IN (SELECT User2_id FROM Joined_pri WHERE User1_id = ?)',
						arguments: [user_id, user_id, user_id]
					}, 
					success: res=>{ 
						// update the post content list
						this.items = res.result 
						console.log(res.result)
					}, 
					fail: err=>{  
						// jsonfy the error message
						console.log(JSON.stringify(err))
					} 
		        })
			},
			refresh() {
				this.getPost()
			}
		},
		components: { 
			postItem
		} 
	}    
</script>

<style>
	/* make a post id */
	.postid {
		position: relative;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: #fff;
		text-align: center;
		font-size: 20px;
		color: #000;
	}

	/* make a small button */
	.btn {
		width: 100px;
		height: 40px;
		line-height: 40px;
		text-align: center;
		background-color: #00bcd4;
		color: #fff;
		border-radius: 5px;
		margin-top: 20px;
	}

	/* solid black line style */
	.solidline {
		width: 100%;
		height: 2px;
		background-color: #000;
	}
	
	
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
