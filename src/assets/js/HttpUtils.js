import axios from 'axios'
import qs from 'qs'

axios.defaults.baseURL = process.env.NODE_ENV !== 'production'?'http://localhost:8231':'http://10.0.0.100:8231/';//配置接口地址

//POST传参序列化(添加请求拦截器)
axios.interceptors.request.use((config) => {
	return config;
},(error) =>{
	return Promise.reject(error);
});

//返回状态判断(添加响应拦截器)
axios.interceptors.response.use((res) =>{
	//对响应数据做些事
	if(!res.data.success){
		return Promise.resolve(res);
	}
	return res;
}, (error) => {
	return Promise.reject(error);
});

//返回一个Promise(发送post请求)
export function fetchPost_formdata(url, params,header) {
	let instance = axios.create(); 
	instance.defaults.timeout = 3000; 
	if(header){
		for (const key in header) {
			if (Object.hasOwnProperty.call(header, key)) {
				const element = header[key];
				instance.defaults.headers.common[key] = element;
			}
		}
	}
	instance.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
	return new Promise((resolve, reject) => {
		instance.post(url, qs.stringify(params))
			.then(response => {
				resolve(response);
			}, err => {
				reject(err);
			})
			.catch((error) => {
				reject(error)
			})
	})
}
//返回一个Promise(发送post请求)
export function fetchPost_json(url, params,header) {
	let instance = axios.create();
	instance.defaults.timeout = 3000; 
	if(header){
		for (const key in header) {
			if (Object.hasOwnProperty.call(header, key)) {
				const element = header[key];
				instance.defaults.headers.common[key] = element;
			}
		}
	}
	instance.defaults.headers['Content-Type'] = 'application/json;charset=UTF-8';
	return new Promise((resolve, reject) => {
			instance.post(url,JSON.stringify(params))
			.then(response => {
				resolve(response);
			}, err => {
				reject(err);
			})
			.catch((error) => {
				reject(error)
			})
	})
}
//返回一个Promise(发送get请求)
export function fetchGet(url, param,header) {
	let instance = axios.create();
	instance.defaults.timeout = 3000; 
	if(header){
		for (const key in header) {
			if (Object.hasOwnProperty.call(header, key)) {
				const element = header[key];
				instance.defaults.headers.common[key] = element;
			}
		}
	}
	return new Promise((resolve, reject) => {
		instance.get(url, {params: param})
			.then(response => {
				resolve(response)
			}, err => {
				reject(err)
			})
			.catch((error) => {
				reject(error)
			})
	})
}
//发送多个文件
export function postFiles(url,files,header) {
	let instance = axios.create();
	instance.timeout = 30000 * files.length;
	if(header){
		for (const key in header) {
			if (Object.hasOwnProperty.call(header, key)) {
				const element = header[key];
				instance.defaults.headers.common[key] = element;
			}
		}
	}
	let forms = new FormData()
	for (let i = 0; i < files.length; i++) {
		forms.append('file',files[i])
	}
	instance.defaults.headers['Content-Type'] = 'multipart/form-data';
	return new Promise((resolve, reject) => {
		instance.post(url, forms)
		.then(response => {
			resolve(response);
		}, err => {
			reject(err);
		})
		.catch((error) => {
			reject(error)
		})
	})
}
//发送单个文件
export function postFile(url,file,header) {
	let instance = axios.create();
	instance.timeout = 30000;
	if(header){
		for (const key in header) {
			if (Object.hasOwnProperty.call(header, key)) {
				const element = header[key];
				instance.defaults.headers.common[key] = element;
			}
		}
	}
	let forms = new FormData()
	forms.append('file',file)
	instance.defaults.headers['Content-Type'] = 'multipart/form-data';
	return new Promise((resolve, reject) => {
		instance.post(url, forms)
		.then(response => {
			resolve(response);
		}, err => {
			reject(err);
		})
		.catch((error) => {
			reject(error)
		})
	})
}
//发送单个二进制文件
export function postBlobFile(url,file,fileName,header) {
	let instance = axios.create();
	instance.timeout = 30000;
	if(header){
		for (const key in header) {
			if (Object.hasOwnProperty.call(header, key)) {
				const element = header[key];
				instance.defaults.headers.common[key] = element;
			}
		}
	}
	let forms = new FormData()
	forms.append('file',file,fileName)
	instance.defaults.headers['Content-Type'] = 'multipart/form-data';
	return new Promise((resolve, reject) => {
		instance.post(axios.defaults.mediaURL + url, forms)
		.then(response => {
			resolve(response);
		}, err => {
			reject(err);
		})
		.catch((error) => {
			reject(error)
		})
	})
}
export default {
	fetchPost_formdata,
	fetchPost_json,
	fetchGet,
	postFile,
	postFiles,
	postBlobFile
}
