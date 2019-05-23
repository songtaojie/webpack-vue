<template>
    <div><button v-on:click="count++">点击了{{count}}次</button></div>
</template>
<script>
    export default {
        data(){
            return {
                count:0
            };
        }
    }
</script>
<style lang="scss" scoped>
    div{
       background-color: chartreuse;
       h1{
            color: blue;
        }
    }
    
</style>



