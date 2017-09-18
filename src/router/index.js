import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Plugins from '@/components/plugins.vue'//插件入口
import Es6 from '@/components/es6.vue'//es6入口
import timeLine from '@/components/plugnis/time_line'//插件时间线
import Nexts from '@/components/plugnis/next'//下一个插件
import Number from '@/components/es6/number'//es6数值的扩展
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
		},
		{
			path:'/es6',
			name:'es6从入门到放弃',
			component:Es6,
			children:[{
				path:'number',
				name:'数值的扩展',
				component:Number
			}]
		}
	]
})