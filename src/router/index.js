import Vue from 'vue'
import Router from 'vue-router'
import vuepage from '@/components/vuepage'
import jquerypage from '@/components/jquerypage'
import javascriptpage from '@/components/javascriptpage'
import todo from '@/components/todo'
import errorpage from '@/components/errorpage'
Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
        path: '/todo/jquerypage',
        name: 'jquerypage',
        component: jquerypage
    }, {
        path: '/todo/javascriptpage',
        name: 'javascriptpage',
        component: javascriptpage
    }, {
        path: '/todo/vuepage',
        name: 'vuepage',
        component: vuepage
    }, {
        path: '/404',
        name: '404',
        component: errorpage
    }, {
        path: '*',
        redirect: '/404',
    }]

})