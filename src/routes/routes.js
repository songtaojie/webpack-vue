import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../pages/Home.vue'
import about from '../pages/About.vue'
import notfound from '../pages/404.vue'
Vue.use(VueRouter);
const routes = [{
    name:'home',
    path:'/home/:id?',
    props:{default:true,profile:true},
    components:{
        default:home,
        profile:()=>import('../pages/Profile.vue')
    }
},{
    path:'/about',
    component:about,
},{
    path:'*',
    component:notfound
}]
var router = new VueRouter({
    mode:'history',
    routes
});
export default router
