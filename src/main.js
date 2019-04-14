// 入口文件
// 使用此方法导入的是Vue运行时的包，即"node_modules\vue\dist\vue.runtime.js"文件
// 这个不是完整的Vue，有些东西不能像通过js引入的方式那样使用，可以再webpack配置文件中配置resolve来设置引入完整的
// Vue，或者直接使用完整的路径进行引用
 import Vue from "../node_modules/vue/dist/vue.js";
// import Vue from 'vue'
// import button from './component/button.vue'
// console.log('测试');
// var login = {
//     template:'<h1>这是一个Vue组件</h1>'
// }

// 基础组件
// Vue.component('button-counter',{
//     data(){
//         return {
//             count:0
//         }
//     },
//     // data:{
//     //     count:0
//     // },
//     template:'<button @click="count++">你点击了{{count}}次</button>'
// });

//私有组件
// var vm2 = new Vue({
//     el:'#app2',
//     components:{
//         'login':{
//             template:'<h4>这是一个私有的登录组件</h4>'
//         }
//     }
// })

//通过Prop向子组件传递数据
// Vue.component('blog-post',{
//     props:['titleName','fontsize'],
//     template:'<span :style="{fontSize:fontsize+\'px\'}">{{titleName}} {{fontsize}}</span>'
// })
// var posts = [
//     {id:1,title:'这是第一个Title'},
//     {id:2,title:'这是第二个Title2'},
//     {id:3,title:'这是第三个Title3'}
// ]

//通过Prop向子组件传递数据(接受一个对象)
// Vue.component('blog-post',{
//     props:{
//         post:Object
//     },
//     template:
//     `<div>
//         <h3>{{post && post.title}}</h3>
//         <div>{{post.content}}</div>
//     </div>`
// })
var posts = [
    {id:1,title:'这是第一个Title',content:'这是第一篇文章的内容'},
    {id:2,title:'这是第二个Title2',content:'这是第二篇文章的内容'},
    {id:3,title:'这是第三个Title3',content:'这是第三篇文章的内容'}
]

//监听子组件
Vue.component('blog-post',{
    props:{
        post:Object
    },
    template:
    `<div>
        <h3>{{post && post.title}}</h3>
        <button @click='$emit("enlarge-text")'>放大文本</button>
        <div>{{post.content}}</div>
    </div>`
})
var vm = new Vue({
    el:'#app',
    data:{
        msg:123,
        count:11,
        postFont:1,
        posts
    },
    // components:{
    //     "button-counter":button
    // }
     // render:c=>c(button) //会把当前div中的所有内容给替换掉
})

