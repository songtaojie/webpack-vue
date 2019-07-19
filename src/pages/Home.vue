<template>
<transition name="slide">
<div>
    
        我是Home页{{id}}
        <button @click="increment">加</button>
        <button @click="dec">减</button>
        <button @click="incrementIfOdd">如果是奇数</button>
        <button @click="incrementAsync">异步加</button>
        Count:{{$store.state.count}}，是{{evenOdd}}

</div>
    </transition>
</template>
<script>
import {mapGetters,mapMutations ,mapActions} from 'vuex'
export default {
    props:['id'],
    name:'Home',
    computed: {
        ...mapGetters({
            evenOdd : 'evenOrOdd'
        })
    },
    methods: {
        ...mapActions([
            // 'increment',
            'decrement',
            'incrementIfOdd',
            // 'incrementAsync'
        ]),
        ...mapMutations({
            dec:'decrement'
        }),
        increment(){
            this.$store.commit('increment',2)
        },
        incrementAsync(){
            this.$store.dispatch('incrementAsync',2)
            .then((result) => {
                console.log(result)
            })
        }
    },
}
</script>