import Vue from 'vue'
import Router from 'vue-router'
import HOME from '../pages/home/index.vue';

Vue.use(Router)

const router = new Router({
	mode:'history',
  	routes: [
	    {
            path: '/',
            name: 'HOME',
            component: HOME,
            meta: {
                title: '首页'
            }
        }
	]
})

export default router