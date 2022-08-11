<template>
    <view class="content">
        <view class="input-group">
            <!-- Input for product name -->
            <view class="input-group-prepend">
                <view class="input-group-text">Product Name</view>
            </view>
            <input class="form-control" v-model="productName" placeholder="Input product name here" />
            <!-- input for product price -->
            <view class="input-group-prepend">
                <view class="input-group-text">Product Price</view>
            </view>
            <input class="form-control" v-model="productPrice" placeholder="Input product price here" />
            <!-- input for product image (if any) -->
            <view class="input-group-prepend">
                <view class="input-group-text">Product Image URL</view>
            </view>
            <input class="form-control" v-model="productImage" placeholder="Input product image URL here" />
        </view>
        <!-- button to submit the forms -->
        <button class="btn" @click="submit">Submit</button>
    </view>
</template>

<script>

var user_id = getApp().globalData.user_id

export default {
    data() {
        return {
            productName: '',
            productPrice: 10000,
            productImage: ''
        }
    },
    onload() {
    },
    methods: {
        submit() {
            // submit the product name, price and image to the database
            uniCloud.callFunction({
                name: 'query',
                data: {
                    sentence: 'INSERT INTO Product (Name, Price, Photo_url, User_id) VALUES (?, ?, ?, ?)',
                    arguments: [this.productName, this.productPrice, this.productImage, user_id]
                },
                success: res => {
                    // update the post content list
                    console.log("The submit() function is working!")
                    this.getProduct()
                },
                fail: err => {
                    // jsonfy the error message
                    console.log(JSON.stringify(err))
                }
            })
        }
    }
}

</script>

<style>
.input-group {
    margin-bottom: 10px;
}
</style>
