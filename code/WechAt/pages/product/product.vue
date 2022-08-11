<template>
	<view class="content">
		<!-- button to create a new product, navigate to the product creation page -->
		<view class="create-btn">
			<button @click="navigate">Create a new product</button>
		</view>
		<!-- button to search for the expedcted item -->
		<view class="search">
			<!-- after clicking on the button, should execute the method getProduct() -->
			<button class="search-btn" @click="getProduct">Search/Refresh</button>
			<input class="search-input" v-model="search_content" placeholder="Input keywords here" />
		</view>
		<!-- draw a solid black line -->
		<div class="custom-select">
		<div>
		  <select class="custom-select1" v-model="lowerB">
		    <option value="0">0</option>
		    <option value="1">30</option>
		    <option value="2">60</option>
		    <option value="3">90</option>
		    <option value="4">120</option>
		    <option value="5">150</option>
		  </select>
		</div>
		<div>
		  <select class="custom-select1"  v-model="upperB">
		    <option value="0">30</option>
		    <option value="1">60</option>
		    <option value="2">90</option>
		    <option value="3">120</option>
		    <option value="4">150</option>
			<option value="5">~</option>
		  </select>
		</div>
		<!-- HTML !-->
		<button class="button-55" role="button" @click="getProductByRange">Search Range</button>
		</div>
		<view class="solidline"></view>
		<!-- make a list of the contents using v-for and content_list -->
		<view v-if="if_search_rates" v-for=" item in items" :key="item['Product_id']">
			<text>Average price among the user is: {{item['Average_Price']}}</text>
			<productItem :productName="item['Name']" :productPrice="item['Price']" :productSeller="item['User_id']" :productId="item['Product_id']" :credit="item['RATES']"></productItem>
		</view>
		<view v-if="!if_search_rates" v-for=" item in items" :key="'A'+item['Product_id']">
			<productItem :productName="item['Name']" :productPrice="item['Price']" :productSeller="item['User_id']" :productId="item['Product_id']" :credit=10 :rangeType="item['PriceRange']"></productItem>
		</view>
		
	</view>
</template>

<script>
	import productItem from '@/components/productItem.vue'
	
	// from App.vue
	var user_id = getApp().globalData.user_id

	export default { 
		data() {
			return {
				items: [],
				item_levels:{},
				search_content: 'furnace',
				test :0,
				arr:[],
				lowerB: 0,
				upperB: 0,
				lowerBArray: [0, 30, 60, 90, 120, 150],
				higherBArray: [30, 60, 90, 120, 150, 9999999999],
				if_search_rates: true,
				if_search_range: false
			}
		},
		onLoad() {
			this.getProduct()
		
		},
		methods: {  
			// function for submitting the user input 
			getProduct() {
				this.if_search_range = false;
				this.if_search_rates = true;
				uniCloud.callFunction({
					name: 'query',
					data: { 
						// select tge products with the keywork input by the user
						sentence: 'CALL wechat.Product_sort(?) ',
						arguments: [ this.search_content] 
					}, 
					success: res=>{ 
						
						console.log("The getProduct() function is working!") 
						console.log(res.result[0])
						this.items = res.result[0]
					}, 
					fail: err=>{  
						// jsonfy the error message
						console.log(JSON.stringify(err))
					} 
		        })
			},
			navigate() {
				 this.$router.push('/pages/product/create')
			},
			getProductByRange() {
				this.if_search_range = true;
				this.if_search_rates = false;
				console.log("the lower bound is: " + this.lowerBArray[this.lowerB]);
				console.log("the upper bound is: " + this.higherBArray[this.upperB]);
				uniCloud.callFunction({
					name: 'query',
					data: { 
						// select tge products with the keywork input by the user
						sentence: 'CALL Find_Price_In_Range(?, ?) ',
						arguments: [this.lowerBArray[this.lowerB], this.higherBArray[this.upperB]] 
					}, 
					success: res=>{ 
						
						console.log("The getProductByRange() function is working!") 
						console.log(res.result[0])
						this.items = res.result[0]
					}, 
					fail: err=>{  
						// jsonfy the error message
						console.log(JSON.stringify(err))
					} 
				})
			}
		},
		components: { 
			productItem
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

	.search-btn {
		width: 150px;
		height: 40px;
		line-height: 40px;
		text-align: center;
		background-color: #00bcd4;
		color: #fff;
		border-radius: 5px;
		margin-top: 20px;
	}

	.search-input {
		width: 300px;
		height: 40px;
		line-height: 40px;
		text-align: center;
	}

	/* the create-btn should be larger than the search-btn */
	.create-btn {
		display: flex;
		justify-content: center;
	}
	
	.custom-select {
		display: flex;
	}
	
	.custom-select1 {
		font-size: 13px;
		  font-weight: 200;
		  letter-spacing: 1px;
		  padding: 5px 4px 5px;
		  outline: 0;
		  border: 0.2px solid black;
		  cursor: pointer;
		  position: relative;
		  background-color: rgba(0, 0, 0, 0);
		  user-select: none;
		  -webkit-user-select: none;
		  touch-action: manipulation;
		background-color: antiquewhite;
	}

/* CSS */
.button-55 {
  align-self: center;
  background-color: #fff;
  background-image: none;
  background-position: 0 90%;
  background-repeat: repeat no-repeat;
  background-size: 4px 3px;
  border-radius: 15px 225px 255px 15px 15px 255px 225px 15px;
  border-style: solid;
  border-width: 2px;
  box-shadow: rgba(0, 0, 0, .2) 15px 28px 25px -18px;
  box-sizing: border-box;
  color: #41403e;
  cursor: pointer;
  display: inline-block;
  font-family: Neucha, sans-serif;
  font-size: 1rem;
  line-height: 23px;
  outline: none;
  padding: .75rem;
  text-decoration: none;
  margin-left: 4px;
  margin-top: -8px;
  transition: all 235ms ease-in-out;
  border-bottom-left-radius: 15px 255px;
  border-bottom-right-radius: 225px 15px;
  border-top-left-radius: 255px 15px;
  border-top-right-radius: 15px 225px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.button-55:hover {
  box-shadow: rgba(0, 0, 0, .3) 2px 8px 8px -5px;
  transform: translate3d(0, 2px, 0);
}

.button-55:focus {
  box-shadow: rgba(0, 0, 0, .3) 2px 8px 4px -6px;
}
	
</style>
