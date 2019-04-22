<template>
    <div id='app'>
        <home></home>
    </div>
</template>
<script>
import routes from './routes/routes.js'
export default {
    name:'app',
    data(){
         const matchingView = routes[this.currentRoute];
        
        return {
            currentRoute:window.location.pathname,
            ViewComponent: matchingView
            ? require('./pages/' + matchingView + '.vue')
            : require('./pages/404.vue')
        }
    },
    components:{
        'home':this.ViewComponent
    },
    // computed:{
    //     ViewComponent(){
            
    //     return 
    //     }
    // }
}
// window.addEventListener('popstate', () => {
//   app.currentRoute = window.location.pathname
// })
</script>

