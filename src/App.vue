<template>
    <div id='app'>
        <main-layout></main-layout>
        计数：{{count}}
    </div>
</template>
<script>
import MainLayout from './layouts/Main.vue'
export default {
    components:{
        MainLayout
    },
    computed: {
      count () {
        return this.$store.state.count;
      }
    }
}
</script>

