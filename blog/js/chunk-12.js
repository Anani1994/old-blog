(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{305:function(t,n,e){"use strict";e.r(n);var i=e(363),s=e(342);for(var a in s)"default"!==a&&function(t){e.d(n,t,function(){return s[t]})}(a);var o=e(0),l=Object(o.a)(s.default,i.a,i.b,!1,null,null,null);l.options.__file="src\\views\\articles\\others\\othMixed\\blog-dev-enviroment.vue",n.default=l.exports},341:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={data:function(){return{toTop:this.$util.toTop}}}},342:function(t,n,e){"use strict";e.r(n);var i=e(341),s=e.n(i);for(var a in i)"default"!==a&&function(t){e.d(n,t,function(){return i[t]})}(a);n.default=s.a},363:function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("BoWen",[e("div",{staticClass:"p-1",attrs:{slot:"catalog"},slot:"catalog"},[e("Steps",{attrs:{direction:"vertical"}},[e("Step",{attrs:{title:"安装步骤",content:"安装步骤",status:"wait"},nativeOn:{click:function(n){t.toTop("#blog-dev-01",30)}}}),t._v(" "),e("Step",{attrs:{title:"特别说明",content:"更多参考说明"},nativeOn:{click:function(n){t.toTop("#blog-dev-02",30)}}}),t._v(" "),e("Step",{attrs:{title:"详细步骤",content:"搭建博客开发的基础环境"},nativeOn:{click:function(n){t.toTop("#blog-dev-03",30)}}})],1)],1),t._v(" "),e("div",{staticClass:"px-1"},[e("div",{staticClass:"py-3 text-center"},[e("h1",[e("Icon",{attrs:{type:"ios-book-outline"}}),t._v(" 博客开发环境搭建")],1),t._v(" "),e("p",{staticClass:"pt-1"},[t._v("记录博客开发的基础环境的搭建")])]),t._v(" "),e("h3",{staticClass:"ml-1",attrs:{id:"blog-dev-01"}},[e("Icon",{attrs:{type:"logo-buffer"}}),t._v(" 安装步骤")],1),t._v(" "),e("Divider"),t._v(" "),e("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[e("code",{staticClass:"js"},[t._v("# 安装依赖\n$ yarn install\n\n# 服务器默认运行在 http://localhost:8080\n$ yarn run dev\n\n# 创建项目\n$ yarn run build")])]),t._v(" "),e("h3",{staticClass:"ml-1",attrs:{id:"blog-dev-02"}},[e("Icon",{attrs:{type:"logo-buffer"}}),t._v(" 特别说明")],1),t._v(" "),e("Divider"),t._v(" "),e("p",[t._v("博客项目的创建是在项目 webpack-iview-vue 上的改进，从而产生需要的博客开发环境，如要查看最初的环境配置，请点击按钮 "),e("a",{attrs:{href:"https://github.com/Anani1994/hello-world/tree/master/webpack-iview-vue"}},[t._v("webpack-iview-vue")]),t._v(" 进行查看。")]),t._v(" "),e("h3",{staticClass:"ml-1",attrs:{id:"blog-dev-03"}},[e("Icon",{attrs:{type:"logo-buffer"}}),t._v(" 详细步骤")],1),t._v(" "),e("Divider"),t._v(" "),e("h4",{staticClass:"m-1",attrs:{id:"blog-dev-031"}},[e("Icon",{attrs:{type:"logo-buffer"}}),t._v(" 更新 .gitignore")],1),t._v(" "),e("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[e("code",{staticClass:"js"},[t._v(".DS_Store\nnode_modules/\n/dist/\nnpm-debug.log*\nyarn-debug.log*\nyarn-error.log*\n\n# Editor directories and files\n.idea\n.vscode\n*.suo\n*.ntvs*\n*.njsproj\n*.sln")])]),t._v(" "),e("h4",{staticClass:"m-1",attrs:{id:"blog-dev-032"}},[e("Icon",{attrs:{type:"logo-buffer"}}),t._v(" 配置 clean-webpack-plugin")],1),t._v(" "),e("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[e("code",{staticClass:"js"},[t._v("// 将 webpack.prod.config.js 中对应部分更新到 webpack.base.config.js 并删除源\nconst cleanWebpackPlugin = require('clean-webpack-plugin');\nplugins: [\n  ...\n  new cleanWebpackPlugin(['blog/*','index.html'], {\n    root: path.resolve(__dirname, '../')\n  })\n  ...\n]")])]),t._v(" "),e("h4",{staticClass:"m-1",attrs:{id:"blog-dev-033"}},[e("Icon",{attrs:{type:"logo-buffer"}}),t._v(" 修改 build 文件名为 config")],1),t._v(" "),e("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[e("code",{staticClass:"js"},[t._v('// 同时修改 package.json 下的配置\n"dev": "webpack-dev-server --base ./dist --open --inline --hot --compress --config config/webpack.dev.config.js",\n"build": "webpack --config config/webpack.prod.config.js"')])]),t._v(" "),e("h4",{staticClass:"m-1",attrs:{id:"blog-dev-034"}},[e("Icon",{attrs:{type:"logo-buffer"}}),t._v(" 修改 webpack.base.config.js 文件")],1),t._v(" "),e("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[e("code",{staticClass:"js"},[t._v("// 将输出路径放到根目录\npath: path.join(__dirname,'../'), // 输出文件所在目录\n\n```\n\n```bash\n\n// 修改 url-loader 配置\n{\n  test: /\\.(jpg|png|gif|svg|jpeg|woff|woff2|eot|ttf|otf)$/,\n  use: [\n    {\n      loader: 'url-loader',\n      options: { // 配置参数\n        limit: 1024 // 比较标准，小于标准的图片转换为 base64 代码\n      }\n    }\n  ]\n},\n// 删除 file-loader 配置")])]),t._v(" "),e("h4",{staticClass:"m-1",attrs:{id:"blog-dev-035"}},[e("Icon",{attrs:{type:"logo-buffer"}}),t._v(" 修改 webpack.dev.config.js 配置")],1),t._v(" "),e("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[e("code",{staticClass:"js"},[t._v("// 将出口文件置于 blog 文件夹\noutput: {\n  publicPath: 'https://anani1994.github.io',\n  filename: 'blog/js/[hash].js',\n  chunkFilename: 'blog/js/[hash]-chunk.js'\n}\n\n```\n\n```bash\n\n// 由于两个 .html 文件在一个路径下，改名以免覆盖\nplugins: [\n  ...\n  new HTMLWebpackPlugin({\n    filename: 'index.html',\n    template: 'index-ori.html',\n    inject: true, //\n    favicon: path.resolve('favicon.ico')\n  })\n  ...\n],")])]),t._v(" "),e("h4",{staticClass:"m-1",attrs:{id:"blog-dev-036"}},[e("Icon",{attrs:{type:"logo-buffer"}}),t._v(" 配置 webpack.prod.config.js 参照 webpack.dev.config.js 配置")],1),t._v(" "),e("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[e("code",{staticClass:"js"},[t._v("output: {\n  ...\n  // https://...这部分为你的服务器域名\n  publicPath: 'https://anani1994.github.io',\n  // 取消 devserve 的配置\n  ...\n}")])]),t._v(" "),e("h4",{staticClass:"m-1",attrs:{id:"blog-dev-037"}},[e("Icon",{attrs:{type:"logo-buffer"}}),t._v(" 配置 mini-css-extract-plugin")],1),t._v(" "),e("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[e("code",{staticClass:"js"},[t._v("// 安装\n$ yarn add -D mini-css-extract-plugin\n\n//引入插件\nconst MiniCssExtractPlugin = require(\"mini-css-extract-plugin\"); \n\n// 在 webpack.base.config.js 下配置\nplugins: [\n  ...\n  new MiniCssExtractPlugin({\n    // Options similar to the same options in webpackOptions.output\n    // both options are optional\n    filename: \"blog/css/[name].[hash].css\",\n    chunkFilename: \"[id].[hash].css\"\n  }),\n  ...\n]\n//\n{\n  test: /\\.less/,\n  use: [\n    {\n      loader: MiniCssExtractPlugin.loader,\n      options: {\n        // you can specify a publicPath here\n        // by default it use publicPath in webpackOptions.output\n        // publicPath: '../'\n      }\n    },\n    // 'style-loader',\n    'css-loader',\n    'postcss-loader',\n    'less-loader' // loader 由下往上依次开始处理\n  ]\n},")])]),t._v(" "),e("h4",{staticClass:"m-1",attrs:{id:"blog-dev-038"}},[e("Icon",{attrs:{type:"logo-buffer"}}),t._v(" 配置 highlight.js")],1),t._v(" "),e("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[e("code",{staticClass:"js"},[t._v("// 安装\n$ yarn add highlight.js\n\n// 封装成插件-0:创建 scr/highlight/highlight.js\nimport Vue from 'vue';\nimport Hljs from 'highlight.js';\nimport 'highlight.js/styles/googlecode.css';\nlet Highlight = {};\nHighlight.install = function (Vue, options) {\n  Vue.directive('highlight', function (el) {\n    let blocks = el.querySelectorAll('pre code');\n    blocks.forEach((block) => {\n      Hljs.highlightBlock(block)\n    });\n  });\n};\nexport default Highlight;\n\n// 在入口文件使用插件\nimport Highlight from 'path/to/Highlight.js'\nVue.use(Highlight)")])]),t._v(" "),e("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[e("code",{staticClass:"html"},[t._v("// 在组件中使用\n<pre v-highlight≶\n  <code ≶\n    /* code */\n  </code≶\n</pre≶")])]),t._v(" "),e("h4",{staticClass:"m-1",attrs:{id:"blog-dev-039"}},[e("Icon",{attrs:{type:"logo-buffer"}}),t._v(" 配置 mini-css-extract-plugin 会导致 webpack-dev-serve 无法监听 css 的更新")],1),t._v(" "),e("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[e("code",{staticClass:"js"},[t._v("// 在 webpack.config.js 配置\nconst MiniCssExtractPlugin = require(\"mini-css-extract-plugin\");\nconst devMode = process.env.NODE_ENV !== 'production'\n \nmodule.exports = {\n  plugins: [\n    new MiniCssExtractPlugin({\n      // Options similar to the same options in webpackOptions.output\n      // both options are optional\n      filename: devMode ? '[name].css' : '[name].[hash].css',\n      chunkFilename: devMode ? '[id].css' : '[id].[hash].css',\n    })\n  ],\n  module: {\n    rules: [\n      {\n        test: /\\.(sa|sc|c)ss$/,\n        use: [\n          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,\n          'css-loader',\n          'postcss-loader',\n          'sass-loader',\n        ],\n      }\n    ]\n  }\n}")])]),t._v(" "),e("h4",{staticClass:"m-1",attrs:{id:"blog-dev-03a"}},[e("Icon",{attrs:{type:"logo-buffer"}}),t._v(" 配置 babel-plugin-syntax-dynamic-import 支持路由懒加载中的写法")],1),t._v(" "),e("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[e("code",{staticClass:"js"},[t._v("// 在写路由时，我们可以先引入在书写，但为了方便我们常常会这样写\ncomponent: import('@/views/index.vue')\n\n//但如果使用 babel 就需要安装此插件才能使 Babel 可以正确地解析语法\n$ yarn add -D babel-plugin-syntax-dynamic-import\n\n// 配置\n{\n  test: /\\.js$/,\n  exclude: /(node_modules|bower_components)/,\n  use: [\n  {\n    loader: 'babel-loader',\n    options: {\n    presets: ['env'],\n    // 支持路由懒加载\n    plugins: ['syntax-dynamic-import']\n    }\n  }\n  ]\n},")])]),t._v(" "),e("h4",{staticClass:"m-1",attrs:{id:"blog-dev-03a"}},[e("Icon",{attrs:{type:"logo-buffer"}}),t._v(" 使用 pug 高效开发")],1),t._v(" "),e("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[e("code",{staticClass:"js"},[t._v("// 安装依赖\nyarn add -D pug pug-plain-loader\n\n// webpack.base.config.js -> module.rules\n{\n  test: /\\.pug$/,\n  loader: 'pug-plain-loader'\n}")])]),t._v(" "),e("FooterDivider")],1)])},s=[];i._withStripped=!0,e.d(n,"a",function(){return i}),e.d(n,"b",function(){return s})}}]);