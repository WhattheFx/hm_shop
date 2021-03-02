<template>
	<view class="home">
		<!-- 轮播图区域 -->
		<swiper indicator-dots circular>
			<!-- 循环并绑定id -->
			<swiper-item v-for="item in swipers" :key="item.id">
				<image :src="item.img"></image>
			</swiper-item>
		</swiper>
		<!-- 导航区域 -->
		<view class="nav">
			<!-- index是加的索引 -->
			<view class="nav_item" v-for="(item,index) in navs" :key="index" @click="navItemClick(item.path)">
				<view :class="item.icon"></view>
				<text>{{item.title}}</text>
			</view>
		</view>
		<!-- 推荐商品区域 -->
		<view class="hot_goods">
			<!-- <image src="https://whatthfx11.oss-cn-beijing.aliyuncs.com/%E9%BB%91%E9%A9%AC%E5%95%86%E5%9F%8E/%E4%B8%8B%E8%BD%BD%20%282%29.jfif"></image> -->
			<view class="tit">推荐商品</view>
			<!-- 在页面上使用 -->
			<goods-list :goods="goods"></goods-list>
		</view>
	</view>
</template>

<script>
	import goodsList from '../../components/goods-list/goods-list.vue'
	import {getHotGoods} from '../../api/index.js';
	import {getSwipers}  from '../../api/index.js';
	export default {
		data() {
			return {
				swipers:[],
				goods:[],
				navlist:[],
				navs:[
					{
						icon:"iconfont icon-ziyuan",
						title:'黑马超市',
						path:'/pages/goods/goods'
					},
					{
						icon:"iconfont icon-guanyuwomen",
						title:'联系我们',
						path:'/pages/contact/contact'
					},
					{
						icon:"iconfont icon-tupian",
						title:'社区图片',
						path:'/pages/pics/pics'
					},
					{
						icon:"iconfont icon-shipin",
						title:'学习视频',
						path:'/pages/videos/videos'
					}
				]
			}
		},
		onLoad() {
			//在此调用方法,以下演示了两种方法。
		  getSwipers().then(res=>{
			  // console.log(res)
			  this.swipers = res.data.message
		  })
		  this.loaddata()
		},
		//注册组件,键值对形式，goods-list是名，goodList是值。
		components:{"goods-list":goodsList},
		methods: {
		//获取轮播图的数据
		// async getSwipers () {
			// console.log('获取轮播图的数据')
		// 	const res = await uni.request({
		// 		url:"https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata",
				
		// })
		//返回的是一个数组
		// console.log(res)
		// 传一个对象
		//再次发请求只需要调用$myRuquest
		// const res = await this.$myRuquest({
		// 	url:'/api/getlunbo'
		// })
		// console.log(res)
		// this.swipers = res.data.message
	 // },
	 loaddata(){
		 return getHotGoods().then(
		 //是api文件夹中return的res
		 //下面的res只是传递过来的参数,下面整体是个匿名函数
		 res => {
			 // console.log(res)
			 this.goods = res.data.message
			
			 })
	 },
	//获取热门商品列表数据
	// async getHotGoods () {
		//运用组件封装的方法就行了使用了await，外面的就要用async
		 // const res = await this.$myRuquest({
			 //有参数，后面必须接？加goods_id=number,number的值自己选
		// 	url:'/api/getgoods?pageindex=1'
		// })
		// console.log(res)
		// this.goods = res.data.message
	  // },
	  //导航的点击处理函数
	 navItemClick(url) {
		 // console.log('导航跳转')
		 console.log(url)
		uni.navigateTo({
			url:url
		})
	 }  
  }
}
</script>

<style lang="scss">
	.home{
		swiper{
			width: 750rpx;
			height: 380rpx;
			image{
				height: 100%;
				width: 100%;
			}
	}
	.nav {
		//开启flex布局,他们几个就会在一排
		display: flex;
		.nav_item {
			width: 25%;
			text-align: center;
			view{
				width: 120rpx;
				height: 120rpx;
				background: $shop-color;
				border-radius: 60rpx;
				margin: 10px auto;
				// 行高
				line-height: 120rpx;
				color: #fff;
				font-size: 50rpx;
			}
			.icon-tupian{
				font-size: 45rpx;
			}
			text{
				font-size: 30rpx;
			}
		}
	}
	.hot_goods {
		background:#eee;
		//给子元素加了个margin,父元素也跟着吊起来了
		overflow: hidden;
		margin-top: 10px;
		.tit{
			height: 50px;
			line-height: 50px;
			color: $shop-color;
			text-align: center;
			letter-spacing: 20px;
			background: #fff ;
			margin: 7rpx 0;
		}
		
	}
	}
</style>
