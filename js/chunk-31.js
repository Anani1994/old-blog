(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{322:function(t,e,i){"use strict";i.r(e);var s=i(479),a=i(404);for(var r in a)"default"!==r&&function(t){i.d(e,t,function(){return a[t]})}(r);var n=i(0),l=Object(n.a)(a.default,s.a,s.b,!1,null,null,null);l.options.__file="src/views/articles/frontend/JS/RequireJS-2.vue",e.default=l.exports},403:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{toTop:this.$util.toTop}}}},404:function(t,e,i){"use strict";i.r(e);var s=i(403),a=i.n(s);for(var r in s)"default"!==r&&function(t){i.d(e,t,function(){return s[t]})}(r);e.default=a.a},433:function(t,e,i){t.exports=i.p+"./images/img-require-shim.png"},479:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("BoWen",[s("div",{staticClass:"p-1",attrs:{slot:"catalog"},slot:"catalog"},[s("Steps",{attrs:{direction:"vertical"}},[s("Step",{attrs:{title:"配置 baseUrl",content:"配置加载文件的根路径",status:"wait"},nativeOn:{click:function(e){t.toTop("#RequireJS-2-1",30)}}}),s("Step",{attrs:{title:"加载第三方模块",content:"配置不支持 AMD 的库和插件",status:"wait"},nativeOn:{click:function(e){t.toTop("#RequireJS-2-2",30)}}}),s("Step",{attrs:{title:"配置 map",content:"解决模块升级带来的兼容问题",status:"wait"},nativeOn:{click:function(e){t.toTop("#RequireJS-2-3",30)}}}),s("Step",{attrs:{title:"其它常用配置",content:"其它常用配置",status:"wait"},nativeOn:{click:function(e){t.toTop("#RequireJS-2-4",30)}}})],1)],1),s("div",{staticClass:"px-1"},[s("div",{staticClass:"py-3 text-center"},[s("h1",[s("Icon",{attrs:{type:"ios-book-outline"}}),t._v(" RequireJS (三)")],1),s("p",{staticClass:"pt-1"},[t._v("RequireJS 的基本配置")])]),s("h3",{staticClass:"ml-1",attrs:{id:"RequireJS-2-1"}},[s("Icon",{attrs:{type:"logo-buffer"}}),t._v(" 配置 baseUrl")],1),s("Divider"),s("p",[t._v("我们知道当我们不使用 data-main 属性，也不设置 baseUrl 的值时，这时加载模块的路径(baseUrl)默认是在 .html 文件所在目录。而当我们使用 data-main 属性时，加载 js 文件的根路径就变成了 data-main 属性所指定 js 文件所在目录。")]),s("p",[t._v("这里我们将介绍的是如何手动的配置 baseUrl，我们可以在前面提到的主模块里进行配置。")]),s("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"ml-2"},[s("code",{staticClass:"js"},[t._v("// main.js \nrequire.config({\n    baseUrl: '/js'\n});")])]),s("p",[t._v("另外需要提到的是 RequireJS 的加载机制："),s("ul",{staticClass:"ml-1"},[s("li",[t._v("RequireJS 使用 head.appendChild() 将每一个依赖加载为一个 script 标签。")]),s("li",[t._v("加载后立即执行。")])])]),s("h3",{staticClass:"ml-1",attrs:{id:"RequireJS-2-2"}},[s("Icon",{attrs:{type:"logo-buffer"}}),t._v(" 加载第三方模块")],1),s("Divider"),s("p",[t._v("RequireJS 加载的模块，采用 AMD 规范。也就是说，模块必须按照 AMD 的规定来写，也就是使用 define() 来申明的模块。")]),s("p",[t._v("但是部分时候需要加载非 AMD 规范的 JavaScript，比如老版本的 jQuery、bootstrap以及 Modernizr.js，那么，RequireJS 是否能够加载这些非规范的模块呢？答案是可以的，不过我们需要对其进行相应的配置。")]),s("p",[t._v("这里我们以 Modernizr.js 为例来认识以下 shim。")]),s("img",{staticClass:"d-block ml-2 mb-1",staticStyle:{height:"200px"},attrs:{src:i(433),alt:"模块的定义"}}),s("p",[t._v("这样配置后，我们就可以在其他模块中引用 Modernizr 模块：")]),s("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"ml-2"},[s("code",{staticClass:"js"},[t._v('require(["Modernizr"], function (Modernizr) {\n    // do something\n});')])]),s("p",[t._v("对于像 bootstrap 这样只有依赖没有输出的我们只需要注明它的依赖。就像下面这样：")]),s("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"ml-2"},[s("code",{staticClass:"js"},[t._v("// main.js \nrequirejs.config({\n    shim: {\n        'bootstrap': ['jquery']\n    }\n});")])]),s("p",[t._v("当然你也可以像下面这么写，不过上面的写法看起来更简洁：")]),s("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"ml-2"},[s("code",{staticClass:"js"},[t._v("// main.js \nrequirejs.config({\n    shim: {\n        'bootstrap': {\n             deps: ['jquery']\n         }\n    }\n});")])]),s("h3",{staticClass:"ml-1",attrs:{id:"RequireJS-2-3"}},[s("Icon",{attrs:{type:"logo-buffer"}}),t._v(" 配置 map")],1),s("Divider"),s("p",[t._v("在进行项目开发的时候，我们经常会遇到这样的问题，在项目开发的初期我们使用了模块的最新且稳定的版本，然而模块随时可能会更新，当我们需要相应模块最新版本的功能时，却又担心升级后之前项目依赖的低版本会产生问题，这时候就陷入了两难的抉择。")]),s("p",[t._v("这时候就需要用到 map 配置，在这里我们以需要不同版本的 jQuery 为例。")]),s("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"ml-2"},[s("code",{staticClass:"js"},[t._v("// main.js \nrequirejs.config({\n    map: {\n        'app/login': {\n            'jquery': './lib/jquery'\n        },\n        'app/index': {\n            'jquery': './lib/jquery2'\n        }\n    }\n});")])]),s("p",[t._v("根据以上的配置虽然 app/login 和 app/index 这两个模块都加载了 jQuery，但 app/login 加载 jQuery 模块时，将加载 jquery.js，而 app/index 加载 jQuery 模块时，将加载 jquery2.js。")]),s("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"ml-2"},[s("code",{staticClass:"js"},[t._v("// main.js \nrequirejs.config({\n    map: {\n        '*': {\n            'jquery': './lib/jquery'\n        },\n        'app/index': {\n            'jquery': './lib/jquery2'\n        }\n    }\n});")])]),s("p",[t._v("当我们像上面这么配置时，除了加载 app/index 模块会加载 jquery2.js外，其它模块加载 jQuery 模块时，都会去加载 jquery.js。")]),s("h3",{staticClass:"ml-1",attrs:{id:"RequireJS-2-4"}},[s("Icon",{attrs:{type:"logo-buffer"}}),t._v(" 其它常用配置")],1),s("Divider"),s("p",[s("ul",{staticClass:"ml-1"},[s("li",[s("strong",[t._v("waitSeconds")]),t._v("：设置加载 js 的等待时间，默认为 7 秒，超出后将会报错；如果设置为 0，则禁用等待超时。")]),s("li",[s("strong",[t._v("urlArgs")]),t._v("：加载文件时，在 url 后面添加额外的 query 参数。")])])]),s("p",{staticClass:"text-right"},[t._v("还没有看够？点击 "),s("a",{attrs:{href:"/#/articles/frontend/JS/RequireJS-3"}},[t._v("RequireJS (四) ")]),t._v("查看更多内容。")]),s("p",{staticClass:"text-right"},[t._v("参考资料："),s("a",{staticClass:"mr-1",attrs:{href:"http://www.runoob.com/w3cnote/requirejs-tutorial-1.html"}},[t._v("菜鸟教程")]),s("a",{staticClass:"mr-1",attrs:{href:"https://www.ibm.com/developerworks/cn/web/1209_shiwei_requirejs/index.html"}},[t._v("IBM")]),s("a",{staticClass:"mr-1",attrs:{href:"http://www.ruanyifeng.com/blog/2012/11/require_js.html"}},[t._v("阮一峰的网络日志")]),s("a",{attrs:{href:"https://www.imooc.com/learn/787"}},[t._v("慕课网")])])],1)])},a=[];s._withStripped=!0,i.d(e,"a",function(){return s}),i.d(e,"b",function(){return a})}}]);