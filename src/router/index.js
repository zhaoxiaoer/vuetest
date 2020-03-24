import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
// 1. 定义组件
const Home = () => import('@/home/Index.vue')
const About = { template: '<div>about</div>' }
const User = () => import('@/user/Index.vue')
const UserProfile = () => import('@/user/profile/Index.vue')
const UserPosts = () => import('@/user/posts/Index.vue')
const NotFound = () => import('@/exception/NotFound.vue')
// 2. 定义路由
const routes = [
	{ 'path': '/', component: Home },
	{ 'path': '/about', component: About },
	{
		'name': 'user',
		'path': '/user/:username/post/:postid', 
		component: User,
		props: true,
		children: [
			{
				'path': 'profile',
				components: {
					default: UserProfile,
					a: UserPosts
				},
			}, {
				'path': 'posts',
				component: UserPosts,
			}
		],
	},
	{ 'path': '*', component: NotFound }
]
// 3. 创建 router 实例
export default new Router({
	mode: 'history',
	routes
})