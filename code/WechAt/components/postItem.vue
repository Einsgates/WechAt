<template>
	<view class="postItem">
		<!-- normal text -->
		<view class="text-area">
			<text>{{content}}</text>
		</view>

		<!-- Poster -->
		<view class="poster">
			<text>The poster ID is: {{poster}}</text>
		</view>

		<!-- Sending time -->
		<view class="time">
			<text>{{time}}</text>
		</view>

		<!-- button to delete the post -->
		<button class="btn" @click="deletePost">Delete</button>

		<!-- line for dividing the title and the content -->
		<view class="line"></view> 
	</view>
</template>

<script>
	export default { 
		name: "postItem",
		props: {
			content: { 
				type: String,
				default: 'This is the default content'
			},
			poster: {
				// poster ID should be a number
				type: Number,
				default: 0
			},
			time: {
				type: String,
				default: 'This is the default time'
			},
			post_id: {
				type: Number,
				default: 0
			}
		},
		data() {
			return {
				// the user id of the current user
				user_id: getApp().globalData.user_id
			}
		},
		methods: {
			deletePost() {
				// decide whether the user is the poster of the post
				if (this.poster == getApp().globalData.user_id) {
					uniCloud.callFunction({
						name: 'query',
						data: {
							sentence: 'DELETE FROM Post WHERE Post_id = ?',
							arguments: [this.post_id]
						},
						success: res => {
							// update the post content list
							console.log("The deletePost() function is working!")
						}
					})
				} else {
					window.alert("You are not the poster of this post!")
				}
			}
		}
	}
</script>

<style>
	/* provide a thin solid gray line style as class 'line', which occupies the whole width */
	.line {
		position: relative;
		top: 0;
		left: 0;
		width: 100%;
		height: 1px;
		background: #e5e5e5;
	}

	/* provide the style for a title with bold text */
	.text-area {
		display: flex;
		justify-content: center;
	}

	/* title */
	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}

	/* define the class of poster and sending time of the post */
	.poster {
		font-size: 24rpx;
		color: #8f8f94;
	}

	.time {
		font-size: 24rpx;
		color: #8f8f94;
	}

	/* postItem should occupy the whole line */
	.postItem {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.btn {
		width: 100%;
		height: 10%;
		background: #fff;
		text-align: center;
	}

</style>
