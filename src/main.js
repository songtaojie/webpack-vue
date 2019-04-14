import Vue from 'vue'
// import button from './component/button.vue'
console.log('测试');
var login = {
    template:'<h1>这是一个Vue组件</h1>'
}
var vm = new Vue({
    el:'#app',
    data:{
        msg:123
    },
    // render:c=>c(login)
    // components:{
    //     login
    // }
})