import Vue from 'vue'
import Router from 'vue-router'
import vuepage from '@/components/vuepage'
import jquerypage from '@/components/jquerypage'
import javascriptpage from '@/components/javascriptpage'
import todo from '@/components/todo'
Vue.use(Router)

export default new Router({
    mode: 'history',
    watch: {
        "$route" (to, from) {
            console.log(to);
        }
    },
    routes: [{
        path: '*',
        name: '/todo/vuepage',
        component: vuepage,
    }, {
        path: '*',
        redirect: to => {
            router.go(path)
        }
    }, {
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
    }]

})