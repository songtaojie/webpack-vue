<template>
<transition name="slide">
<div>
    
        我是Home页{{id}}
    
</div>
    </transition>
</template>
<script>
export default {
    props:['id'],
    name:'Home',
}
</script>