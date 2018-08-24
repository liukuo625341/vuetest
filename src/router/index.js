import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
// import Plugins from '@/components/plugins.vue' //插件入口
// import Es6 from '@/components/es6.vue' //es6入口
// import regularExpression from '@/components/regular_expression' //正则表达式入口
import timeLine from '@/components/plugnis/time_line' //插件时间线
import keyValue from '@/components/plugnis/key-value' //下一个插件

import Number from '@/components/es6/number' //es6数值的扩展
import Function from '@/components/es6/function' //es6函数的扩展
import letConst from '@/components/es6/let_const' //es6 let和const

import firstTest from '@/components/regularExpression/first_test'
Vue.use(Router)

const routeMap = new Router({
    mode: 'history',
    routes: [{
            path: '/',
            redirect: 'plugins/timeLine',
        },
        {
            path: '/plugins',
            name: '小demo',
            menu: true,
            component: Home,
            children: [{
                path: 'timeLine',
                name: '时间线',
				component: timeLine,
				meta:{keepAlive:true}
            }, {
                path: 'keyValue',
                name: '对象拆分成key,value数组',
                component: keyValue
            }]
        },
        {
            path: '/es6',
            name: 'es6从入门到放弃',
            menu: false,
            component: Home,
            children: [{
                    path: 'number',
                    name: '数值的扩展',
                    component: Number
                },
                {
                    path: 'function',
                    name: '函数的扩展',
                    component: Function
                },
                {
                    path: 'letConst',
                    name: 'let和const命令',
                    component: letConst
                },
            ]
        },
        {
            path: '/regularExpression',
            name: '正则表达式的学习',
            menu: false,
            component: Home,
            children: [{
                path: 'first_test',
                name: '初次接触正则',
				component: firstTest,
				meta:{keepAlive:true}
            }]
        }
    ]
})

export default routeMap