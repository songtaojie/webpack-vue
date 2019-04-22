<template>
    <a
        :href="href"
        :class="{active:isActive}"
        @click.prevent="doClick"
    >
    <slot></slot>
    </a>
</template>
<script>
import routes from '../routes/routes.js'
export default {
    name:'Vlink',
    props:{
        href:{
            type:String,
            required:true
        }
    },
    computed:{
        isActive(){
            return this.href === this.$root.currentRoute;
        }
    },
    methods:{
        doClick(event){
            debugger
            this.$root.currentRoute = this.href;
            window.history.pushState(null,routes[this.href],this.href);
        }
    }
}
</script>
<style scoped>
.active{
    color: cornflowerblue;
}
</style>


