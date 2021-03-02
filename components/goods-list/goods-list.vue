<template>
	<view class="goods_list">
		<view class="goods_item" v-for="item in goods" :key="item.id"> 
			<image :src="item.img_url"></image>
				<view class="price">
					<text>{{item.sell_price}}</text>
					<text>{{item.market_price}}</text>
					<view class="name">
						{{item.zhaiyao}}
					</view>
				</view>
		</view>
	</view>
</template>

<script>
	//导出，谁用数据，给它传就行了
	export default {
		// 接收外部进来的数据
		props:['goods']
	}
</script>

<style lang="scss">
	.goods_list {
		padding: 0 15rpx;
		//一行显示
		display: flex;
		//换行
		flex-wrap: wrap;
		//两边对齐
		justify-content: space-between;
		.goods_item {
			background: #fff;
			width: 355rpx;
			margin: 10rpx 0;
			padding: 15rpx;
			//盒子不会被胀大
			box-sizing: border-box;
			image{
				width: 80%;
				height: 150rpx;
				margin: 0 auto;
				display: block;
				margin: auto;
			}
			.price{
				color: $shop-color;
				font-size: 36rpx;
				text:nth-child(2){
					color: #ccc;
					font-size: 28rpx;
					margin-left: 17rpx;
					text-decoration: line-through;
				}
				
			}
			.name{
				font-size: 28rpx;
				line-height: 50rpx;
				padding-bottom: 15rpx;
				padding-top: 10rpx;
			}
		}
	}
</style>
