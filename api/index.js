// 第一种先定义res，再return。
// import {myRequest} from "../util/api.js"
// export async function  getHotGoods () {
// 		//运用组件封装的方法就行了使用了await，外面的就要用async
// 		  const res = await myRequest({
// 			 //有参数，后面必须接？加goods_id=number,number的值自己选
// 			url:'/api/getgoods?pageindex=1',
			
			
// 		})
// 		return res
		
// }
// 直接return
import {myRequest} from "../util/api.js"
export async function  getHotGoods () {
		//运用组件封装的方法就行了使用了await，外面的就要用async
		  return await myRequest({
			 //有参数，后面必须接？加goods_id=number,number的值自己选
			url:'/api/getgoods?pageindex=1',
			
			
		})
		
}
export async function getSwipers() {
		return await myRequest({
			url:'/api/getlunbo',
		})
		// console.log(res)
		//this.swipers = res.data.message
}