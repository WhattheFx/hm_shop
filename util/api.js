const BASE_URL = 'http://localhost:8082'
//封装这个方法
export const myRequest = (options) =>{
	// uni.request({https://api-hmugo-web.itheima.net
		
	// })
	//通过promise进行封装
	return new Promise((resolve,reject)=>{
		uni.request({
			url:BASE_URL+options.url,
			method: options.method || 'GET',
			data: options.data || {},
			success: (res)=>{
			if(res.data.status !== 0) {
				return uni.showToast({
				title:"获取数据失败"
				})
			 }
			    resolve(res)
		   },
		    fail: (err) =>{
			   uni.showToast({
			    title:"获取数据失败"
			  })
			//把错误消息返回出去
			    reject(err)
		 }
	  })
	})
}
// //封装完肯定要去调用它
// myRequest({
// 	url: '/api/getlunno',
// 	method:'POST'
// })