let p = new Promise((resolve, reject) => {
	console.log('promise 11');
	reject('222');
	console.log('promise 22');
	resolve('111');
	console.log('promise 334444');
})
p.then((data) => {
	console.log('resolve: ' + data)
}, err => {
	console.log('reject: ' + err)
})

import Frog from './static/img/frog.jpg'
document.write('<div><img src=' + Frog + ' alt="青蛙" /></div>')

import say from './static/js/say'
say();

import Vue from 'vue'

Vue.component('my-component', {
	props: ['greeting'],
	template: '<p>{{ greeting }} World!</p>',
})

import router from './router'
import Hello from './Hello.vue'

window.app = new Vue({
	el: '#app',
	data: {
		message: 'Hello aaa',
		zhao: 'zhao',
	},
	template: '<Hello />',
	components: {
		Hello,
	},
	router,
});

// 简单路由测试--不成功，浏览器会重新发起请求
//const NotFound = { template: '<p>Page not found</p>' }
//const Home = { template: '<p>home page</p>' }
//const About = { template: '<p>about page</p>' }
//const routes = {
//	'/': Home,
//	'/about': About
//}
//window.app = new Vue({
//	el: '#app',
//	data: {
//		currentRoute: window.location.pathname
//	},
//	computed: {
//		ViewComponent () {
//			console.log('1111111');
//			return routes[this.currentRoute] || NotFound
//		},
//	},
//	render (h) {
//		return h(this.ViewComponent)
//	}
//})

import './static/css/index.css'
console.log('css parse11122223333: ')
import './static/css/aaa.css'
document.write('<div class="backCol"><img class="animal" src=' + Frog + ' alt="青蛙" /></div>')