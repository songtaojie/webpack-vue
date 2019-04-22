<template>
    <main-layout>
        <p>服务器忙，请稍后再试<v-link href="/">首页</v-link></p>
    </main-layout>
</template>
<script>
import MainLayout from '../layouts/Main.vue'
import VLink from '../components/VLink.vue'
export default {
    components:{
        MainLayout,
        VLink
    }
}
</script>
