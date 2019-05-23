// 入口文件
// 使用此方法导入的是Vue运行时的包，即"node_modules\vue\dist\vue.runtime.js"文件
// 这个不是完整的Vue，有些东西不能像通过js引入的方式那样使用，可以再webpack配置文件中配置resolve来设置引入完整的
// Vue，或者直接使用完整的路径进行引用
// import Vue from "../node_modules/vue/dist/vue.js";
//  import Vue from "vue/dist/vue.js";
import Vue from "vue";
//  import jquery from 'jquery'
import bootstrap from 'bootstrap'
import TWEEN from '@tweenjs/tween.js'
import Color from 'color-js'

//列表过度
var vm = new Vue({
    el:'#app',
    data(){
        return {
            colorQuery:'',
            color:{
                red:0,
                green:0,
                blue:1,
                alpha:1
            },
            tweenColor:{}
        }   
    },
    created(){
        this.tweenColor = Object.assign({},this.color);
    },
    computed:{
        tweenedCSSColor(){
            var me = this;
            return new Color({
                red:me.tweenColor.red,
                green:me.tweenColor.green,
                blue:me.tweenColor.blue,
                alpha:me.tweenColor.alpha
            }).toCSS();
        }
    },
    watch:{
        color:function(newValue){
            function animate(){
                if(TWEEN.update()) {
                    requestAnimationFrame(animate);
                }
            }
            new TWEEN.Tween(this.tweenColor)
            .to(this.color,750)
            .start();
            animate();
        }
    },
    methods:{
        updateColor(){
            this.color=new Color(this.colorQuery).toRGB();
            this.colorQuery = '';
        }
    }
});

