// 入口文件
// 使用此方法导入的是Vue运行时的包，即"node_modules\vue\dist\vue.runtime.js"文件
// 这个不是完整的Vue，有些东西不能像通过js引入的方式那样使用，可以再webpack配置文件中配置resolve来设置引入完整的
// Vue，或者直接使用完整的路径进行引用
// import Vue from "../node_modules/vue/dist/vue.js";
//  import Vue from "vue/dist/vue.js";
import Vue from "vue";
//  import jquery from 'jquery'
 import bootstrap from 'bootstrap'
//  import Animate from 'animate.css'
// var vm = new Vue({
//     el:'#app',
//     data(){
//         return {
//             show:false
//         }
//     },
//     methods:{
//         toggle(){

//         },
//         beforeEnter(el){
//             el.style.transform='translate(0,0)';
            
//         },
//         enter(el,done){
//             el.offsetWidth;
//             el.style.transform='translate(80px,500px)';
//             el.style.transition='all width 2s ease';
//             done();
//         },
//         afterEnter(){
//             this.show = !this.show
//         }
//     }
// });

// var vm = new Vue({
//     el:'#app',
//     data:function(){
//         return {
//             view:'v-a'
//         }
//     },
//     components:{
//         'v-a':{
//             template:'<div>组件A</div>'
//         },
//         'v-b':{
//             template:'<div>组件B</div>'
//         }
//     }
// });

//列表过度
var vm = new Vue({
    el:'#app',
    data(){
        return {
            id:'',
            name:'',
            dataList:[
                {id:0,name:'胡歌'},
                {id:1,name:'刘亦菲'},
                {id:2,name:'霍建华'}
            ]
        }
    },
    methods:{
        add(){
            this.dataList.push({id:this.id,name:this.name})
        }
    }
});

