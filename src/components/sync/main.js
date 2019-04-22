// 入口文件
// 使用此方法导入的是Vue运行时的包，即"node_modules\vue\dist\vue.runtime.js"文件
// 这个不是完整的Vue，有些东西不能像通过js引入的方式那样使用，可以再webpack配置文件中配置resolve来设置引入完整的
// Vue，或者直接使用完整的路径进行引用
// import Vue from "../node_modules/vue/dist/vue.js";
 import Vue from "vue/dist/vue.js";
//.sync修饰符
Vue.component('child',{
    props:['title'],
    data(){
        return {
            styleObject:{
                'background-color':'red',
                width:'500px',
                height:'500px'
            }
        }
    },
    template:`<div :style='styleObject'>
        {{title}}
        <input type='button' value='点我隐身' @click='hide'>
    </div>`,
    methods:{
        hide(){
            this.$emit('update:uphide',false);
        }
    },
    mounted(){
        this.$emit('update:title',);
    }
});
var vm = new Vue({
    el:'#app',
    data(){
        return {
            isShow:false
        }
    },
    methods:{
        show(){
            this.isShow = true;
        },
        hide(value){
            debugger
            this.isShow = value;
        }
    }
});

