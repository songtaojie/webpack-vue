import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../pages/Home.vue'
import about from '../pages/About.vue'
import notfound from '../pages/404.vue'
Vue.use(VueRouter);
const routes = [{
    path:'/home',
    component:home,
    children:[{
        path:'profile',
        component:()=>import('../pages/Profile.vue')
    }]
},{
    path:'/about',
    component:about
},{
    path:'*',
    component:notfound
}]
var router = new VueRouter({
    routes
});
export default router
