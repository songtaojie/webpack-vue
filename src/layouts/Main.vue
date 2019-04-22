<template>
    <div class="container">
        <ul>
            <li>
                <v-link href="/">首页</v-link>
                <v-link href="/about">关于</v-link>
            </li>
        </ul>
        <slot></slot>
    </div>
</template>
<script>
import Vlink from '../components/VLink.vue'
export default {
    name:'Main',
    components:{
        'v-link':Vlink
    }
}
</script>
<style scoped>
.container{
    max-width: 800px;
    margin: 0 auto;
    padding: 15px 30px;
    background: #F9F7F5;
}
</style>

