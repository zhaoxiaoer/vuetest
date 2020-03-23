import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
// 1. 定义组件
const Home = () => import('@/home/Index.vue')
const About = { template: '<div>about</div>' }
// 2. 定义路由
const routes = [
	{ 'path': '/', component: Home },
	{ 'path': '/about', component: About }
]
// 3. 创建 router 实例
export default new Router({
	mode: 'history',
	routes
})