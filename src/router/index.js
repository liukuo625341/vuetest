import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Plugins from '@/components/plugins.vue'
import timeLine from '@/components/plugnis/time_line'
import Nexts from '@/components/plugnis/next'
Vue.use(Router)

export default new Router({
	routes: [{
			path: '/',
			name: '插件',
			component: Home
		},
		{
			path: '/plugins',
			name: '功能组件demo',
			component:Plugins,
			children: [{
				path: 'timeLine',
				name: '时间线',
				component: timeLine
			},{
				path: 'nexts',
				name: '下一个',
				component: Nexts
			}]
		}
	]
})