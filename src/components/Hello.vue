<template>
    <p>{{greeting | capitalize}} World!</p>
</template>
<script>
// export default {
    
// }
module.exports={
    data:function(){
        return {
            greeting:'hello'
        }
    },
    filters:{
        capitalize:function(value){
            if(!value)return'';
            value = value.toString();
            return value.charAt(0).toUpperCase()+value.slice(1);
        }
    }
}
</script>

