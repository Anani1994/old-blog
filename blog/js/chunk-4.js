(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{297:function(n,e,t){"use strict";t.r(e);var i=t(375),a=t(324);for(var s in a)"default"!==s&&function(n){t.d(e,n,function(){return a[n]})}(s);var l=t(0),o=Object(l.a)(a.default,i.a,i.b,!1,null,null,null);o.options.__file="src\\views\\articles\\frontend\\AngularJS\\angular-dev.vue",e.default=o.exports},323:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{toTop:this.$util.toTop}}}},324:function(n,e,t){"use strict";t.r(e);var i=t(323),a=t.n(i);for(var s in i)"default"!==s&&function(n){t.d(e,n,function(){return i[n]})}(s);e.default=a.a},375:function(n,e,t){"use strict";var i=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("BoWen",[t("div",{staticClass:"p-1",attrs:{slot:"catalog"},slot:"catalog"},[t("Steps",{attrs:{direction:"vertical"}},[t("Step",{attrs:{title:"背景",content:"简述该开发环境的背景和大体内容",status:"wait"},nativeOn:{click:function(e){n.toTop("#angular-dev-bg",30)}}}),n._v(" "),t("Step",{attrs:{title:"详细步骤",content:"详细介绍开发环境的搭建",status:"wait"},nativeOn:{click:function(e){n.toTop("#angular-dev-steps",30)}}})],1)],1),n._v(" "),t("div",{staticClass:"px-1"},[t("div",{staticClass:"py-3 text-center"},[t("h1",[t("Icon",{attrs:{type:"ios-book-outline"}}),n._v(" 搭建 webpack-angular 基础开发环境")],1),n._v(" "),t("p",{staticClass:"pt-1"},[n._v("简述搭建 Angular 开发环境的背景和大体内容")])]),n._v(" "),t("h3",{staticClass:"ml-1",attrs:{id:"angular-dev-bg"}},[t("Icon",{attrs:{type:"logo-buffer"}}),n._v(" 背景")],1),n._v(" "),t("Divider"),n._v(" "),t("p",[n._v("由于之前没有接触过 AngularJS，加上公司用的 AngulaJS 的版本比较低，所以准备自己搭建一个 AngularJS 的开发环境，从而可以更好的学习和验证。")]),n._v(" "),t("p",[n._v("虽然使用的 AngulaJS 的版本比较低，但是也可以记录一下安装开发环境的基本步骤，对于有相关需求的也能有个标本，即使安装使用其它的环境也可以进行参考，毕竟有些步骤是都会使用到的，一通百通。")]),n._v(" "),t("h3",{staticClass:"ml-1",attrs:{id:"angular-dev-steps"}},[t("Icon",{attrs:{type:"logo-buffer"}}),n._v(" 详细步骤")],1),n._v(" "),t("Divider"),n._v(" "),t("ul",{staticClass:"ml-2"},[t("li",[n._v("创建远程仓库 angular-market")]),n._v(" "),t("li",[t("code",[n._v("git clone")]),n._v(" 远程仓库")]),n._v(" "),t("li",[n._v("创建 .gitignore 文件")]),n._v(" "),t("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[t("code",{staticClass:"md"},[n._v(".DS_Store\nnode_modules/\n/dist/\nnpm-debug.log*\nyarn-debug.log*\nyarn-error.log*\n# Editor directories and files\n.idea\n.vscode\n*.suo\n*.ntvs*\n*.njsproj\n*.sln")])]),n._v(" "),t("li",[t("code",[n._v("yarn init")])]),n._v(" "),t("li",[t("code",[n._v("yarn add -D webpack webpack-cli")])]),n._v(" "),t("li",[n._v("创建 /config 下 webpack.base.config.js 文件")]),n._v(" "),t("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[t("code",{staticClass:"js"},[n._v("const webpack = require('webpack');\nconst path = require('path');\nconst HTMLWebpackPlugin = require('html-webpack-plugin');\n\nconst resolve = dir => {\n    return path.join(__dirname,dir);\n};\n\nmodule.exports = {\n    entry: path.join(__dirname,'../src/main.js'),\n    output: {\n        // filename: 'bundle.js', //输出文件的文件名\n        path: path.join(__dirname,'../'), // 输出文件所在目录\n        // publicPath: 'www.yoursite.com'\n    },\n    module: {\n        //\n    },\n    // 创建路径别名\n    resolve: {\n        alias: {\n            '@': resolve('../src')\n        }\n    },\n    plugins: [\n        //\n    ]\n};")])]),n._v(" "),t("li",[n._v("在进行下一步时我们需要用到 webpack-merge 所以我们先进行安装 "),t("code",[n._v("yarn add -D webpack-merge")])]),n._v(" "),t("li",[n._v("创建 /config 下 webpack.dev.config.js 文件")]),n._v(" "),t("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[t("code",{staticClass:"js"},[n._v("const webpack = require('webpack');\nconst path = require('path');\nconst webpackMerge = require('webpack-merge');\nconst webpackBaseConfig = require('./webpack.base.config');\n\nmodule.exports = webpackMerge(webpackBaseConfig, {\n    mode: 'development',\n    output: {\n        filename: 'market/js/[name].[hash].js',\n        chunkFilename: 'market/js/[name].[hash].js'\n    },\n    module: {\n        //\n    },\n    devtool: 'cheap-module-eval-source-map',\n    plugins: [\n        //\n    ]\n});")])]),n._v(" "),t("li",[n._v("创建 /config 下 webpack.prod.config.js 文件")]),n._v(" "),t("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[t("code",{staticClass:"js"},[n._v("const webpack = require('webpack');\nconst path = require('path');\nconst webpackBaseConfig = require('./webpack.base.config');\nconst webpackMerge = require('webpack-merge');\n\nmodule.exports = webpackMerge(webpackBaseConfig, {\n    mode: 'production',\n    output: {\n        //\n    },\n    module: {\n        //\n    },\n    plugins: [\n        //\n    ]\n});")])]),n._v(" "),t("li",[n._v("前端项目肯定少不了 .html 文件，所以接下来安装一个产生 .html 文件的插件")]),n._v(" "),t("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[t("code",{staticClass:"js"},[n._v("// 安装\nyarn add -D html-webpack-plugin\n\n// 并在 webpack.base.config.js 文件 下引入\nconst HTMLWebpackPlugin = require('html-webpack-plugin');\n\n// 并在 webpack.base.config.js 文件 下配置\nplugins: [\n    new HTMLWebpackPlugin({ //创建 .html 并自动引入打包后的文件\n        template: 'index.html',\n        inject: true, // 参照根目录创建的 .html 来生成 .html\n    })\n]")])]),n._v(" "),t("li",[n._v("在根目录创建 index.html 成为上面安装的插件的模板")]),n._v(" "),t("li",[n._v("为了使得项目便于调试，我们为项目设置热更新")]),n._v(" "),t("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[t("code",{staticClass:"js"},[n._v("// 安装\nyarn add -D webpack-dev-server\n\n// 并在 webpack.dev.config.js 配置\ndevServer: {\n    contentBase: path.join(__dirname, 'market'),\n    port:8080,\n    // host:'0.0.0.0'\n}")])]),n._v(" "),t("li",[n._v("在 package.json 下配置开发指令")]),n._v(" "),t("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[t("code",{staticClass:"json"},[n._v('"scripts": {\n    "test": "echo \\"Error: no test specified\\" && exit 1",\n    "dev": "webpack-dev-server --base ./market --open --inline --hot --compress --config config/webpack.dev.config.js",\n    "build": "webpack --config config/webpack.prod.config.js"\n}')])]),n._v(" "),t("li",[n._v("使用命令 "),t("code",[n._v("yarn add angular@1.4.6")]),n._v(" 安装 Angular")]),n._v(" "),t("li",[n._v("安装配置 bootstrap 和 jQuery")]),n._v(" "),t("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[t("code",{staticClass:"js"},[n._v("// 安装\nyarn add bootstrap@4.1.1 popper.js@1.14.3 jquery\n\n// 在 webpack-base-config.js 配置\nplugins: [\n    new webpack.ProvidePlugin({\n        $: 'jquery',\n        jQuery: 'jquery',\n        'window.jQuery': 'jquery',\n        Popper: ['popper.js', 'default'],\n    })\n]\n```\n\n- 在 /src 创建入口文件 main.js\n``` bash\n// 引入 bootstrap 的 css 文件\nimport 'bootstrap/dist/css/bootstrap.min.css';\n//引入angular\nconst Angular = require('angular');")])]),n._v(" "),t("li",[n._v("创建第一个插件")]),n._v(" "),t("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[t("code",{staticClass:"js"},[n._v("// 在 /src/controllers/hello-world 创建 hello-world.js\nmodule.exports = function (App) {\n    App.directive('helloWorld', function () {\n        return {\n            restrict: 'E',\n            template: '"),t("div",[n._v("Hello world")]),n._v("',\n            replace: true,\n            controller: function ($scope, $element) {\n                $element.bind('click', function () {\n                    console.log('测试成功');\n                })\n            }\n        }\n    });\n}\n\n// 在 main.js 下引入\n// 引入自定义的指令文件\nrequire('./controllers/hello-world/hello-world.js')(App);")])]),n._v(" "),t("li",[n._v("安装处理 css 的 loader")]),n._v(" "),t("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[t("code",{staticClass:"js"},[n._v("// 安装\nyarn add -D css-loader style-loader postcss-loader autoprefixer\n\n// 在 webpack.base.config.js 配置\n module: {\n    rules: [\n        {\n            test: /\\.css$/,\n            use: [\n                'style-loader',\n                'css-loader',\n                'postcss-loader'\n            ]\n        }\n    ]\n}\n\n// 在根目录下添加 postcss.config.js\nmodule.exports = { \n    plugins: { \n        'autoprefixer': {browsers: 'last 5 version'} \n    } \n}")])]),n._v(" "),t("li",[n._v("配置 less")]),n._v(" "),t("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[t("code",{staticClass:"js"},[n._v("// 安装\nyarn add -D less less-loader\n\n// 在 webpack.base.config.js 配置\nmodule: {\n    ...\n    rules: [\n        {\n            test: /\\.less/,\n            use: [\n                'style-loader',\n                'css-loader',\n                'postcss-loader',\n                'less-loader'\n            ]\n        }\n    ]\n    ...\n}\n\n// 调试 less 在 hello-world.js 同目录下创建 hello-world.less\nbody {\n  background: antiquewhite;\n  .hello-world {\n    color: red;\n  }\n}\n\n// 在 hello-world.js 下引入\nimport('./hello-world.less');")])]),n._v(" "),t("li",[n._v("配置 pug(jade)")]),n._v(" "),t("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[t("code",{staticClass:"js"},[n._v('// 安装\nyarn add -D pug pug-loader\n\n// 在 webpack.base.config.js 下配置\nmodule: {\n    ...\n    rules: [\n        {\n            test: /\\.pug$/,\n             use: [\n                 \'pug-html-loader\'\n             ]\n        }\n    ]\n    ...\n}\n\n// 修改根目录下的 index.html 为 index.pug\ndoctype html\nhtml(lang="en" ng-app="app")\n    head\n        meta(charset="UTF-8")\n        meta(name="viewport" content="width=device-width, initial-scale=1.0")\n        meta(http-equiv="X-UA-Compatible" content="ie=edge")\n        title 商城\n    body\n        div(class="container")\n            hello-world\n\n\n// 在 webapck.base.config.js 对之前 index.html 的引入也对应修改\nplugins: [\n    ...\n    new HTMLWebpackPlugin({\n        filename: \'index.html\',\n        template: \'index.pug\',\n        inject: true\n    })\n    ...\n]')])]),n._v(" "),t("li",[n._v("配置处理字体和图片")]),n._v(" "),t("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[t("code",{staticClass:"js"},[n._v("// 安装\nyarn add -D url-loader file-loader\n\n// 在 webapck.base.config.js  配置\nmodule: {\n    rules: [\n        {\n            test: /\\.(jpg|png|gif|svg|jpeg|woff|woff2|eot|ttf|otf)$/,\n            use: [\n                {\n                    loader: 'url-loader',\n                    options: { // 配置参数\n                        limit: 1024, // 比较标准，小于标准的图片转换为 base64 代码\n                        name:'blog/images/img-[name].[ext]'\n                    }\n                }\n            ]\n        }\n    ]\n}\n\n// 修改 hello-world.less\nhtml,body {\n  width: 100%;\n  height: 100%;\n}\nbody {\n  background:  #faebd7 url('../../images/bg-login.jpeg') no-repeat;\n  background-size: 100% 100%;\n  .hello-world {\n    color: red;\n  }\n}")])]),n._v(" "),t("li",[n._v("规范输出文件的位置")]),n._v(" "),t("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[t("code",{staticClass:"js"},[n._v("// 修改 webpack.dev.config.js\ndevServer: {\n    contentBase: path.join(__dirname, '../market'),\n    port:8080,\n    // host:'0.0.0.0'\n}\n\n// 修改 webpack.prod.config.js 的 output\noutput: {\n    filename: 'market/js/[name].[hash].js',\n    chunkFilename: 'market/js/[name].[hash].js'\n}")])]),n._v(" "),t("li",[n._v("配置 clean-webpack-plugin")]),n._v(" "),t("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[t("code",{staticClass:"js"},[n._v("// 安装\nyarn add -D clean-webpack-plugin\n\n// 在 webpack.prod.config.js 下引入\nconst cleanWebpackPlugin = require('clean-webpack-plugin');\n\n// 在 webpack.prod.config.js 下配置\n new cleanWebpackPlugin(['market/*'], {\n      root: path.resolve(__dirname, '../')\n}),")])]),n._v(" "),t("li",[n._v("删除 hello-world 目录，在 src 下创建 template 目录，该目录下包含作为全局使用的模块")]),n._v(" "),t("li",[n._v("在 template 下创建 global-tips 目录，该目录下包含作为全局提示模块")]),n._v(" "),t("li",[n._v("在 template 下创建 global-tips 目录，其下包含全局提示模块的 .pug .less .js")]),n._v(" "),t("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[t("code",{staticClass:"pug"},[n._v('// global-tips.pug\n.global-tips(ng-class="slideClass")\n    .tips-body\n        .tips-title(ng-transclude="title") 系统提示\n        .tips-content(ng-transclude="content") 提示内容\n        .tips-footer(ng-transclude="footer") 链接\n    .toggle-tips(ng-click="startSlide()" ng-if="\'slide-to-right\' === slideClass") 开\n    .toggle-tips(ng-click="startSlide()" ng-if="\'slide-to-right\' !== slideClass") 关')])]),n._v(" "),t("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[t("code",{staticClass:"less"},[n._v("// global-tips.less\n.global-tips {\n  z-index: 5;\n  position: fixed;\n  top: 0px;\n  left: 50%;\n  transform: translateX(-50%);\n  min-width: 300px;\n  height: 136px;\n  box-shadow: 0 2px 4px 2px;\n  .toggle-tips {\n    text-align: center;\n  }\n  .tips-body {\n    padding: 10px;\n    .tips-title {\n      font-weight: bolder;\n    }\n    .tips-content {\n      margin: 10px 0;\n      p {\n        margin: 0;\n      }\n    }\n    .tips-footer {\n      //\n    }\n  }\n}")])]),n._v(" "),t("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[t("code",{staticClass:"js"},[n._v("// global-tip.js\nimport('./global-tips.less');\n\nmodule.exports = function (App) {\n    App.directive('globalTips', function () {\n        return {\n            restrict: 'E',\n            replace: true,\n            transclude: {\n                'title': 'tipsTitle',\n                'content': 'tipsContent',\n                'footer': 'tipsFooter'\n            },\n            template: require('./global-tips.pug'),\n            link: function ($scope, $element) {\n                $scope.startSlide = function () {\n                    if ('slide-to-top' === $scope.slideClass) {\n                        $scope.slideClass = '';\n                    } else {\n                        $scope.slideClass = 'slide-to-top';\n                    }\n                }\n            }\n        }\n    });\n};")])]),n._v(" "),t("li",[n._v("安装配置 angular-animate")]),n._v(" "),t("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[t("code",{staticClass:"js"},[n._v("// 安装\nyarn add angular-animate@1.4.6\n\n// 在 main.js 中修改注入依赖\n// 定义一个angular模块\nlet App = Angular.module('app', [require('angular-animate')]);")])]),n._v(" "),t("li",[n._v("修改 index.pug 显示全局提示")]),n._v(" "),t("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[t("code",{staticClass:"pug"},[n._v('div(class="container")\n    global-tips\n        tips-title 信息提示\n        tips-content Hello world\n        tips-footer\n            a(href="#") 安装提示')])]),n._v(" "),t("li",[n._v("创建动画的样式")]),n._v(" "),t("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[t("code",{staticClass:"less"},[n._v("// 创建 src/styles/animates/animates.less\n/**\n * global-tips\n */\n.slide-to-top-add, .slide-to-top-remove {\n  transition: all cubic-bezier(0.250, 0.460, 0.450, 0.940) .5s;\n}\n\n.slide-to-top, .slide-to-top-add.slide-to-top-add-active {\n  top: -112px!important;\n}\n\n.slide-to-top-remove.slide-to-top-remove-active {\n  top: 0!important;\n}")])]),n._v(" "),t("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[t("code",{staticClass:"js"},[n._v("// 在 main.js 引入自定义的动画\nimport './styles/animates/animates.less';")])]),n._v(" "),t("li",[n._v("将 angular 更新到了 v1.5 (v1.4.6 应该是不支持使用 ng-transclude 分发内容)")])]),n._v(" "),t("p",{staticClass:"pt-1"},[n._v("基础环境的搭建到此就到一段落了。")]),n._v(" "),t("FooterDivider")],1)])},a=[];i._withStripped=!0,t.d(e,"a",function(){return i}),t.d(e,"b",function(){return a})}}]);