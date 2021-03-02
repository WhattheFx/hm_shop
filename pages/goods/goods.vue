<template>
	<view class="goods_list">
		<goods-list :goods='goods'></goods-list>
		<!-- 没有数据的时候出现 -->
		<view class="isOver" v-if="flag">-----我是有底线的-----</view>
	</view>
</template>

<script>
	import goodsList from '../../components/goods-list/goods-list.vue'
	export default {
		data() {
			return {
				pageindex:1,
				goods: [],
				flag: false
				
			}
		},
		components:{"goods-list":goodsList},
		methods: {
			//获取商品列表的数据
			//命名一个，callback一个形参来接受回掉函数
			async getGoodslist(callback) {
				//自己封装的$myRuquest要传一个对象啊
				//const res去修饰一下，对应就要有async
				const res = await this.$myRuquest({
					url:'/api/getgoods?pageindex='+this.pageindex
				})
				console.log(res)
				// this.goods =res.data.message
				// 让下拉刷新时,加载第二个页面的同时,保存第一个页面,而不是把之前的数据覆盖掉。
				// 两个数据都...展开，放到数组当中this.goods是第一页的页面
				this.goods = [...this.goods,...res.data.message]
				//有就调用他，没有就不调用他，因为刚开始，onload()里面没有传回掉函数，callback就没有值。
				//下面是有callback才调用
				callback && callback()
			}
		},
		onLoad() {
			this.getGoodslist()
		},
		onReachBottom() {
			if(this.goods.length<this.pageindex*10) return  this.flag=true
			console.log("触底了")
			this.pageindex++
			this.getGoodslist()
		},
		onPullDownRefresh(){
			console.log('下拉刷新了')
			this.pageindex = 1
			this.goods = []
			this.flag = false
			// this.getGoodslist()
			setTimeout( ()=>{
				// 在调用getGoodslist传一个回掉函数
				this.getGoodslist(()=>{
					uni.stopPullDownRefresh()
					})
			},1000)
		}
	}
</script>

<style lang="scss">
	.goods_list {
		background: #eee;
	},
	.isOver {
		width: 100%;
		height: 50px;
		line-height: 50px;
		text-align: center;
		// background: #fff;
		font-size: 28rpx;
	}
</style>
