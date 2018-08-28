import Vue from 'vue'
import Router from 'vue-router'
import todo from '@/components/todo'
import query from '@/components/jq'
import yuan from '@/components/yuan'
import v from '@/components/v'
Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
        path: '*',
        name: 'todo',
        component: v,
    }, {
        path: '/',
        redirect: '/todo'
    }, {
        path: '/todo/query',
        name: 'query',
        component: query
    }, {
        path: '/todo/yuan',
        name: 'yuan',
        component: yuan
    }, {
        path: '/todo/v',
        name: 'v',
        component: v
    }]
})