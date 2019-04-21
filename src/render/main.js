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
// Vue.component('heading',{
//     props:{
//         level:{
//             type:Number,
//             required:true
//         }
//     },
//     render(createElement){
//         var result = createElement('h' +this.level,this.$scopedSlots.default());
//         return result;
//     }
// });
var getChildrenTextContent = function(children){
    var result = children.map(function(node){
        return node.children?getChildrenTextContent(node.children):node.text
    }).join('')
    return result;
}
Vue.component('heading',{
    render:function(createElement){
        var self = this,
            headingId = getChildrenTextContent(this.$scopedSlots.default())
            .toLowerCase()
            .replace(/\W+/g,'-')
            .replace(/(^-|-$)/g,'');
        return  createElement('h'+this.level,[
            createElement('a',{
                attrs:{
                    name:headingId,
                    href:'https://www.baidu.com/'
                },
                on:{
                    click:function(event){
                        event.preventDefault();
                        console.log('click');
                    }
                }
        },this.$scopedSlots.default()),
        createElement('input',{
            attrs:{
                name:headingId,
                type:'text',
            },
            domProps:{
                value:self.value
            },
            on:{
                //只触发一次
                '~keyup':function(event){
                    debugger
                    self.$emit('input',event.target.value);
                }
            },
    },this.$scopedSlots.default())
        ])
    },
    props:{
        level:{
            type:Number,
            required:true
        },
        value:String
    }
});
//列表过度
var vm = new Vue({
    el:'#app',
    data(){
        return {
            msg:'这是一个测试'
        }
    },
    methods:{
        inputFunc(value){
            this.msg = value;
        }
    }
});
