<template>
    <div class="container">
        <header>
            <router-link to='/home' tag="span">Home</router-link>
            <router-link to='/about'>About</router-link>
        </header>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    name:'Main',
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

