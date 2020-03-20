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

import Hello from './Hello.vue'

var app = new Vue({
	el: '#app',
	data: {
		message: 'Hello aaa',
		zhao: 'zhao',
	},
	template: '<Hello />',
	components: {
		Hello,
	},
});

import './static/css/index.css'
console.log('css parse11122223333: ')
import './static/css/aaa.css'
document.write('<div class="backCol"><img class="animal" src=' + Frog + ' alt="青蛙" /></div>')