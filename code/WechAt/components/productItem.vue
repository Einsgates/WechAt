<template>
	<view class="to-left">
		<!-- view for product name -->
		<view class="product-name">
			<text>{{productName}}</text>
		</view>

		<!-- view for product price -->
		<view class="product-price">
			<text>Product price is: {{productPrice}}</text>
		</view>

		<!-- view for product seller -->
		<view class="product-seller">
			<text>Product seller user ID is: {{productSeller}}</text>
		</view>
		
		<!-- view for product seller -->
		<view v-if="rangeType==1"><img  class="range_logo" src="/static/cheap.png" alt="cheap" /></view>
		<view v-if="rangeType==2"><img  class="range_logo" src="/static/fair.png" alt="fair" /></view> 
		<view v-if="rangeType==3"><img  class="range_logo" src="/static/high.png" alt="high" /></view> 
		<view v-if="rangeType==4"><img  class="range_logo" src="/static/expensive.png" alt="expensive" /></view> 
		
		<!-- view for product seller -->
	<view v-if="credit==0"><img  class="level_logo" src="/static/level1.png" alt="img1" /></view>
	<view v-if="credit==1"><img  class="level_logo" src="/static/level2.png" alt="img1" /></view> 
	<view v-if="credit==2"><img  class="level_logo" src="/static/level3.png" alt="img1" /></view> 
	<view v-if="credit==3"><img  class="level_logo" src="/static/level4.png" alt="img1" /></view> 
		<!-- button to delete the item -->
		<button class="btn" @click="deleteProduct">Delete</button>

		<!-- add a line -->
		<view class="line">------</view>
	</view>
</template>

<script>
	export default {
		name: "productItem",
		
		props: {
			productName: {
				type: String,
				default: 'This is the default product name'
			},
			productPrice: {
				type: Number,
				default: 0
			},
			productSeller: {
				type: Number,
				default: 1
			},
			productId: {
				type: Number,
				default: 0
			},
			credit:{
				type: Number,
				default: 0,
			},
			rangeType:{
				type: Number,
				default: 0,
			},
		},
		
		onLoad() {

		},
		methods: {
			deleteProduct() {
				// decide whether the user is the seller of the product
				if (this.productSeller == getApp().globalData.user_id) {
					uniCloud.callFunction({
						name: 'query',
						data: {
							sentence: 'DELETE FROM Product WHERE Product_id = ?',
							arguments: [this.productId]
						},
						success: res => {
							// update the post content list
							console.log("The deleteProduct() function is working!")
							this.$emit('deleteProduct', this.productId)
						},
						fail: err => {
							// jsonfy the error message
							console.log(JSON.stringify(err))
						}
					})
				} else {
					window.alert("You are not the seller of this product!")
				}
			}
		}
	}
</script>

<style>
	/* all items should go to very left */
	/* product name should be bold black */
	.product-name {
		font-weight: bold;
		color: #000;
	}
	.product-price,
	.product-seller {
		position: relative;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: #fff;
		text-align: center;
	}
	.usrcrdt1png{
	background-image: url("../../static/level1.png");
	position: absolute;
	top: -485px;
	left: 250px;
	width: 25px;
	height: 25px;
	z-index: 9999;
	object-fit: cover;
	}
	.usrcrdt2png{
		background-image: url("../static/level2.png");
		position: relative;
		top: 0px;
		left: 100px;
		width: 100%;
		height: 100%;
		z-index: 9999;
	}
	.usrcrdt3png{
		background-image: url("../static/level3.png");
		position: relative;
		top: 0px;
		left: 100px;
		width: 100%;
		height: 100%;
		z-index: 9999;
	}
	.usrcrdt4png{
		background-image: url("../static/level4.png");
		position: relative;
		top: 0px;
		left: 100px;
		width: 100%;
		height: 100%;
		z-index: 9999;
	}
	.to-left {
		float: left;
	}
	.line {
		position: relative;
		top: 0;
		left: 0;
		width: 100%;
		height: 1px;
		background: #e5e5e5;
	}
	.btn {
		position: relative;
		top: 0;
		left: 0;
		width: 100%;
		height: 10%;
		background: #fff;
		text-align: center;
	}
.level_logo {
		height: 20rpx;
		width: 20rpx;
		margin-top: 0rpx;
		margin-left: 0 rpx;
		margin-right: auto;
		margin-bottom: auto;
	}
	.range_logo {
			height: 20rpx;
			width: 20rpx;
			margin-top: 0rpx;
			margin-left: 0 rpx;
			margin-right: auto;
			margin-bottom: auto;
		}