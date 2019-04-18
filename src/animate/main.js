// 入口文件
// 使用此方法导入的是Vue运行时的包，即"node_modules\vue\dist\vue.runtime.js"文件
// 这个不是完整的Vue，有些东西不能像通过js引入的方式那样使用，可以再webpack配置文件中配置resolve来设置引入完整的
// Vue，或者直接使用完整的路径进行引用
// import Vue from "../node_modules/vue/dist/vue.js";
 import Vue from "vue/dist/vue.js";
 import Animate from 'animate.css'
var vm = new Vue({
    el:'#app',
    data(){
        return {
            show:false
        }
    },
    methods:{
        toggle(){

        },
        beforeEnter(el){
            el.style.trans
        },
        enter(){

        },
        afterEnter(){

        }
    }
});