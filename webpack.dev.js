const path = require('path'),
    dir='component',
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    VueLoaderPlugin = require('vue-loader/lib/plugin');//

module.exports = {
    entry:{
        index:`./src/${dir}/main.js`
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
            test:/\.vue$/,
            use:'vue-loader'//默认webpack无法打包vue结尾的文件，所以需要安装相关的loader，内部依赖vue-template-compiler
        },{
            test:/\.css$/,
            use:['style-loader','css-loader']
        },{
            test:/\.scss$/,
            use:['style-loader','css-loader','sass-loader']
        }]
    },
    // resolve:{
    //     alias:{//修改Vue被导入时候的包路径
    //         "vue$":'vue/dist/vue.js'
    //     }
    // },
    plugins:[
        new HtmlWebpackPlugin({
            filename:'index.html',
            template:path.join(__dirname,`./src/${dir}/index.html`)
        }),
        new VueLoaderPlugin()
    ],
    mode:'development'
}