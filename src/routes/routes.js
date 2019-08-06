import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);
// const routes = [{
//     name:'home',
//     path:'/home/:id?',
//     props:{default:true,profile:true},
//     components:{
//         default:home,
//         profile:()=>import('../pages/Profile.vue')
//     }
// },{
//     path:'/about',
//     component:()=>import('../pages/About.vue'),
// },{
//     path:'*',
//     component:()=>import('../pages/404.vue')
// }]
const routes = [{
    path: '/',
    component: ()=>import('../pages/Home.vue'),
},{
    path:'/about',
    component:()=>import('../pages/About.vue'),
},{
    path:'/error',
    component:()=>import('../pages/404.vue')
},{
    path:'*',
    redirect: '/error'
}]
var router = new VueRouter({
    mode:'history',
    routes
});
export default router
