// 入口文件
// 使用此方法导入的是Vue运行时的包，即"node_modules\vue\dist\vue.runtime.js"文件
// 这个不是完整的Vue，有些东西不能像通过js引入的方式那样使用，可以再webpack配置文件中配置resolve来设置引入完整的
// Vue，或者直接使用完整的路径进行引用
// import Vue from "../node_modules/vue/dist/vue.js";
//  import Vue from "vue/dist/vue.js";
import Vue from "vue";
//注册指令时不带前缀v-
Vue.directive('focus',{
    inserted(el){
        el.focus();
    }
});
Vue.component('heading',{
    props:{
        level:{
            type:Number,
            required:true
        }
    },
    render(createElement){
        return createElement('h' +this.level,this.$scopedSlots.default())
    }
});
//列表过度
var vm = new Vue({
    el:'#app',
});
