const path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin');//

module.exports = {
    entry:{
        index:'./src/main.js'
    },
    output :{
        filename:'bundle.js',
        path:path.join(__dirname,'dist')
    },
    devServer:{
        contentBase:path.join(__dirname,'src'),
        hot:true,
    },
    module:{
        rules:[{
            test:'/\.vue$/',
            use:'vue-loader'
        }]
    },
    resolve:{
        alias:{//修改Vue被导入时候的包路径
            "vue$":'vue/dist/vue.js'
        }
    },
    plugins:[
        new HtmlWebpackPlugin({
            filename:'index.html',
            template:path.join(__dirname,'./src/index.html')
        })
    ]

   
}