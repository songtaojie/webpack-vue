// 入口文件
// 使用此方法导入的是Vue运行时的包，即"node_modules\vue\dist\vue.runtime.js"文件
// 这个不是完整的Vue，有些东西不能像通过js引入的方式那样使用，可以再webpack配置文件中配置resolve来设置引入完整的
// Vue，或者直接使用完整的路径进行引用
// import Vue from "../node_modules/vue/dist/vue.js";
 import Vue from "vue/dist/vue.js";
//.sync修饰符
// Vue.component('alert-box',{
//     data(){
//         return {
//             'success':{
//                 color: '#3c763d',
//                 'background-color': '#dff0d8',
//                 'border-color': '#d6e9c6',
//             }
//         }
//     },
//     template:`<div  v-bind='$attrs'>
//     <div :style=""></div>
//         <strong>{{$attrs.type=='success'?'成功!':'失败!'}}</strong>
//         <slot></slot>
//     </div>`,
//     methods:{
//         hide(){
//             this.$emit('update:uphide',false);
//         }
//     },
//     mounted(){
//         console.log(this.props);
//         console.log(this.$attrs)
//     }
// });
// var vm = new Vue({
//     el:'#app',
//     data(){
//         return {
//             isShow:false
//         }
//     },
//     methods:{
//         show(){
//             this.isShow = true;
//         },
//         hide(value){
//             debugger
//             this.isShow = value;
//         }
//     }
// });
// Vue.component('navigation-link',{
//     props:{
//         url:String,
//         'new-page':Boolean
//     },
//     template:`<div>
//         {{newPage}}
//         <a :href='url'>
//         <slot>提交按钮</slot>
//         </a>
//     </div>`,
    
// });
// var vm = new Vue({
//     el:'#app',
//     data(){
//         return {
//             isShow:false
//         }
//     },
//     methods:{
//         show(){
//             this.isShow = true;
//         },
//         hide(value){
//             this.isShow = value;
//         }
//     }
// });

// 具名插槽
// Vue.component('base-layout',{
//     template:`<div class='container'>
//         <header>
//             <slot name='header'></slot>
//         </header>
//         <main>
//             <slot></slot>
//         </main>
//         <footer>
//             <slot name='footer'></slot>
//         </footer>
//     </div>`
// });

//作用域插槽
Vue.component('my-list',{
    props:{
        books:{
            type:Array,
            default:function(){
                return [];
            }
        }
    },
    template:`<ul>
        <slot  v-for='book in books' :bookObj = 'book'></slot>
    </ul>`
});
var vm = new Vue({
    el:'#app',
    data(){
        return {
            books:[
                {id:0,name:'《Vue Js实战》'},
                {id:1,name:'《JavaScript高级程序设计》'},
                {id:2,name:'《深入浅出WebPack》'}
            ]
        }
    }
});
