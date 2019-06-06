import Vue from 'vue'
import Vuex  from 'vuex';
Vue.use(Vuex)
const state = {
    count:0
}
const mutations = {
    increment(state,n){
        if(!n)n = 1;
        state.count+=n;
    },
    decrement(state){
        state.count--;
    }
}
const actions = {
    increment:({commit},n)=>commit('increment',n),
    decrement:({commit})=>commit('decrement'),
    incrementIfOdd({commit,state}){
        if((state.count + 1)%2 === 0){
            commit('increment');
        }
    },
    incrementAsync({commit,state},n){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                commit('increment',2)
                resolve({
                    name:'ssss'
                });
            },1000)
        })
    }

}
const getters = {
    evenOrOdd:state=>state.count%2===0?'偶数':'奇数'
}
export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
});