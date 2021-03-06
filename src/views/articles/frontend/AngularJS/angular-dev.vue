<template>
    <BoWen>
        <div class="p-1" slot="catalog">
            <Steps direction="vertical">
                <Step
                    title="背景"
                    content="简述该开发环境的背景和大体内容"
                    status="wait"
                    @click.native="toTop('#angular-dev-bg', 30)">
                </Step>
                <Step
                    title="详细步骤"
                    content="详细介绍开发环境的搭建"
                    status="wait"
                    @click.native="toTop('#angular-dev-steps', 30)">
                </Step>
            </Steps>
        </div>
        <div class="px-1">
            <div class="py-3 text-center">
                <h1><Icon type="ios-book-outline" /> 搭建 webpack-angular 基础开发环境</h1>
                <p class="pt-1">简述搭建 Angular 开发环境的背景和大体内容</p>
            </div>
            <h3 id="angular-dev-bg" class="ml-1"><Icon type="logo-buffer" /> 背景</h3>
            <Divider />
            <p>由于之前没有接触过 AngularJS，加上公司用的 AngulaJS 的版本比较低，所以准备自己搭建一个 AngularJS 的开发环境，从而可以更好的学习和验证。</p>
            <p>虽然使用的 AngulaJS 的版本比较低，但是也可以记录一下安装开发环境的基本步骤，对于有相关需求的也能有个标本，即使安装使用其它的环境也可以进行参考，毕竟有些步骤是都会使用到的，一通百通。</p>
            <h3 id="angular-dev-steps" class="ml-1"><Icon type="logo-buffer" /> 详细步骤</h3>
            <Divider />
            <ul class="ml-2">
                <li>创建远程仓库 angular-market</li>
                <li><code>git clone</code> 远程仓库</li>
                <li>创建 .gitignore 文件</li>
                <pre v-highlight><code class="md">.DS_Store
node_modules/
/dist/
npm-debug.log*
yarn-debug.log*
yarn-error.log*
# Editor directories and files
.idea
.vscode
*.suo
*.ntvs*
*.njsproj
*.sln</code></pre>
                <li><code>yarn init</code></li>
                <li><code>yarn add -D webpack webpack-cli</code></li>
                <li>创建 /config 下 webpack.base.config.js 文件</li>
                <pre v-highlight><code class="js">const webpack = require('webpack');
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const resolve = dir => {
    return path.join(__dirname,dir);
};

module.exports = {
    entry: path.join(__dirname,'../src/main.js'),
    output: {
        // filename: 'bundle.js', //输出文件的文件名
        path: path.join(__dirname,'../'), // 输出文件所在目录
        // publicPath: 'www.yoursite.com'
    },
    module: {
        //
    },
    // 创建路径别名
    resolve: {
        alias: {
            '@': resolve('../src')
        }
    },
    plugins: [
        //
    ]
};</code></pre>
                <li>在进行下一步时我们需要用到 webpack-merge 所以我们先进行安装 <code>yarn add -D webpack-merge</code></li>
                <li>创建 /config 下 webpack.dev.config.js 文件</li>
                <pre v-highlight><code class="js">const webpack = require('webpack');
const path = require('path');
const webpackMerge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.config');

module.exports = webpackMerge(webpackBaseConfig, {
    mode: 'development',
    output: {
        filename: 'market/js/[name].[hash].js',
        chunkFilename: 'market/js/[name].[hash].js'
    },
    module: {
        //
    },
    devtool: 'cheap-module-eval-source-map',
    plugins: [
        //
    ]
});</code></pre>
                <li>创建 /config 下 webpack.prod.config.js 文件</li>
                <pre v-highlight><code class="js">const webpack = require('webpack');
const path = require('path');
const webpackBaseConfig = require('./webpack.base.config');
const webpackMerge = require('webpack-merge');

module.exports = webpackMerge(webpackBaseConfig, {
    mode: 'production',
    output: {
        //
    },
    module: {
        //
    },
    plugins: [
        //
    ]
});</code></pre>
                <li>前端项目肯定少不了 .html 文件，所以接下来安装一个产生 .html 文件的插件</li>
                <pre v-highlight><code class="js">// 安装
yarn add -D html-webpack-plugin

// 并在 webpack.base.config.js 文件 下引入
const HTMLWebpackPlugin = require('html-webpack-plugin');

// 并在 webpack.base.config.js 文件 下配置
plugins: [
    new HTMLWebpackPlugin({ //创建 .html 并自动引入打包后的文件
        template: 'index.html',
        inject: true, // 参照根目录创建的 .html 来生成 .html
    })
]</code></pre>
                <li>在根目录创建 index.html 成为上面安装的插件的模板</li>
                <li>为了使得项目便于调试，我们为项目设置热更新</li>
                <pre v-highlight><code class="js">// 安装
yarn add -D webpack-dev-server

// 并在 webpack.dev.config.js 配置
devServer: {
    contentBase: path.join(__dirname, 'market'),
    port:8080,
    // host:'0.0.0.0'
}</code></pre>
            <li>在 package.json 下配置开发指令</li>
            <pre v-highlight><code class="json">"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "webpack-dev-server --base ./market --open --inline --hot --compress --config config/webpack.dev.config.js",
    "build": "webpack --config config/webpack.prod.config.js"
}</code></pre>
                <li>使用命令 <code>yarn add angular@1.4.6</code> 安装 Angular</li>
                <li>安装配置 bootstrap 和 jQuery</li>
                <pre v-highlight><code class="js">// 安装
yarn add bootstrap@4.1.1 popper.js@1.14.3 jquery

// 在 webpack-base-config.js 配置
plugins: [
    new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        Popper: ['popper.js', 'default'],
    })
]
```

- 在 /src 创建入口文件 main.js
``` bash
// 引入 bootstrap 的 css 文件
import 'bootstrap/dist/css/bootstrap.min.css';
//引入angular
const Angular = require('angular');</code></pre>
                <li>创建第一个插件</li>
                <pre v-highlight><code class="js">// 在 /src/controllers/hello-world 创建 hello-world.js
module.exports = function (App) {
    App.directive('helloWorld', function () {
        return {
            restrict: 'E',
            template: '<div>Hello world</div>',
            replace: true,
            controller: function ($scope, $element) {
                $element.bind('click', function () {
                    console.log('测试成功');
                })
            }
        }
    });
}

// 在 main.js 下引入
// 引入自定义的指令文件
require('./controllers/hello-world/hello-world.js')(App);</code></pre>
                <li>安装处理 css 的 loader</li>
                <pre v-highlight><code class="js">// 安装
yarn add -D css-loader style-loader postcss-loader autoprefixer

// 在 webpack.base.config.js 配置
 module: {
    rules: [
        {
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader',
                'postcss-loader'
            ]
        }
    ]
}

// 在根目录下添加 postcss.config.js
module.exports = { 
    plugins: { 
        'autoprefixer': {browsers: 'last 5 version'} 
    } 
}</code></pre>
                <li>配置 less</li>
                <pre v-highlight><code class="js">// 安装
yarn add -D less less-loader

// 在 webpack.base.config.js 配置
module: {
    ...
    rules: [
        {
            test: /\.less/,
            use: [
                'style-loader',
                'css-loader',
                'postcss-loader',
                'less-loader'
            ]
        }
    ]
    ...
}

// 调试 less 在 hello-world.js 同目录下创建 hello-world.less
body {
  background: antiquewhite;
  .hello-world {
    color: red;
  }
}

// 在 hello-world.js 下引入
import('./hello-world.less');</code></pre>
                <li>配置 pug(jade)</li>
                <pre v-highlight><code class="js">// 安装
yarn add -D pug pug-loader

// 在 webpack.base.config.js 下配置
module: {
    ...
    rules: [
        {
            test: /\.pug$/,
             use: [
                 'pug-html-loader'
             ]
        }
    ]
    ...
}

// 修改根目录下的 index.html 为 index.pug
doctype html
html(lang="en" ng-app="app")
    head
        meta(charset="UTF-8")
        meta(name="viewport" content="width=device-width, initial-scale=1.0")
        meta(http-equiv="X-UA-Compatible" content="ie=edge")
        title 商城
    body
        div(class="container")
            hello-world


// 在 webapck.base.config.js 对之前 index.html 的引入也对应修改
plugins: [
    ...
    new HTMLWebpackPlugin({
        filename: 'index.html',
        template: 'index.pug',
        inject: true
    })
    ...
]</code></pre>
                <li>配置处理字体和图片</li>
                <pre v-highlight><code class="js">// 安装
yarn add -D url-loader file-loader

// 在 webapck.base.config.js  配置
module: {
    rules: [
        {
            test: /\.(jpg|png|gif|svg|jpeg|woff|woff2|eot|ttf|otf)$/,
            use: [
                {
                    loader: 'url-loader',
                    options: { // 配置参数
                        limit: 1024, // 比较标准，小于标准的图片转换为 base64 代码
                        name:'blog/images/img-[name].[ext]'
                    }
                }
            ]
        }
    ]
}

// 修改 hello-world.less
html,body {
  width: 100%;
  height: 100%;
}
body {
  background:  #faebd7 url('../../images/bg-login.jpeg') no-repeat;
  background-size: 100% 100%;
  .hello-world {
    color: red;
  }
}</code></pre>
                <li>规范输出文件的位置</li>
                <pre v-highlight><code class="js">// 修改 webpack.dev.config.js
devServer: {
    contentBase: path.join(__dirname, '../market'),
    port:8080,
    // host:'0.0.0.0'
}

// 修改 webpack.prod.config.js 的 output
output: {
    filename: 'market/js/[name].[hash].js',
    chunkFilename: 'market/js/[name].[hash].js'
}</code></pre>
                <li>配置 clean-webpack-plugin</li>
                <pre v-highlight><code class="js">// 安装
yarn add -D clean-webpack-plugin

// 在 webpack.prod.config.js 下引入
const cleanWebpackPlugin = require('clean-webpack-plugin');

// 在 webpack.prod.config.js 下配置
 new cleanWebpackPlugin(['market/*'], {
      root: path.resolve(__dirname, '../')
}),</code></pre>
                <li>删除 hello-world 目录，在 src 下创建 template 目录，该目录下包含作为全局使用的模块</li>
                <li>在 template 下创建 global-tips 目录，该目录下包含作为全局提示模块</li>
                <li>在 template 下创建 global-tips 目录，其下包含全局提示模块的 .pug .less .js</li>
                <pre v-highlight><code class="pug">// global-tips.pug
.global-tips(ng-class="slideClass")
    .tips-body
        .tips-title(ng-transclude="title") 系统提示
        .tips-content(ng-transclude="content") 提示内容
        .tips-footer(ng-transclude="footer") 链接
    .toggle-tips(ng-click="startSlide()" ng-if="'slide-to-right' === slideClass") 开
    .toggle-tips(ng-click="startSlide()" ng-if="'slide-to-right' !== slideClass") 关</code></pre>
                <pre v-highlight><code class="less">// global-tips.less
.global-tips {
  z-index: 5;
  position: fixed;
  top: 0px;
  left: 50%;
  transform: translateX(-50%);
  min-width: 300px;
  height: 136px;
  box-shadow: 0 2px 4px 2px;
  .toggle-tips {
    text-align: center;
  }
  .tips-body {
    padding: 10px;
    .tips-title {
      font-weight: bolder;
    }
    .tips-content {
      margin: 10px 0;
      p {
        margin: 0;
      }
    }
    .tips-footer {
      //
    }
  }
}</code></pre>
                <pre v-highlight><code class="js">// global-tip.js
import('./global-tips.less');

module.exports = function (App) {
    App.directive('globalTips', function () {
        return {
            restrict: 'E',
            replace: true,
            transclude: {
                'title': 'tipsTitle',
                'content': 'tipsContent',
                'footer': 'tipsFooter'
            },
            template: require('./global-tips.pug'),
            link: function ($scope, $element) {
                $scope.startSlide = function () {
                    if ('slide-to-top' === $scope.slideClass) {
                        $scope.slideClass = '';
                    } else {
                        $scope.slideClass = 'slide-to-top';
                    }
                }
            }
        }
    });
};</code></pre>
                <li>安装配置 angular-animate</li>
                <pre v-highlight><code class="js">// 安装
yarn add angular-animate@1.4.6

// 在 main.js 中修改注入依赖
// 定义一个angular模块
let App = Angular.module('app', [require('angular-animate')]);</code></pre>
                <li>修改 index.pug 显示全局提示</li>
                <pre v-highlight><code class="pug">div(class="container")
    global-tips
        tips-title 信息提示
        tips-content Hello world
        tips-footer
            a(href="#") 安装提示</code></pre>
                <li>创建动画的样式</li>
                <pre v-highlight><code class="less">// 创建 src/styles/animates/animates.less
/**
 * global-tips
 */
.slide-to-top-add, .slide-to-top-remove {
  transition: all cubic-bezier(0.250, 0.460, 0.450, 0.940) .5s;
}

.slide-to-top, .slide-to-top-add.slide-to-top-add-active {
  top: -112px!important;
}

.slide-to-top-remove.slide-to-top-remove-active {
  top: 0!important;
}</code></pre>
                <pre v-highlight><code class="js">// 在 main.js 引入自定义的动画
import './styles/animates/animates.less';</code></pre>
                <li>将 angular 更新到了 v1.5 (v1.4.6 应该是不支持使用 ng-transclude 分发内容)</li>
            </ul>
            <p class="pt-1">基础环境的搭建到此就到一段落了。</p>
            <FooterDivider></FooterDivider>
        </div>
    </BoWen>
</template>

<script>
export default {
    data() {
        return {
            toTop: this.$util.toTop
        }
    }
}
</script>
