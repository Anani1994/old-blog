(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{306:function(t,e,s){"use strict";s.r(e);var i=s(375),a=s(349);for(var r in a)"default"!==r&&function(t){s.d(e,t,function(){return a[t]})}(r);var l=s(0),n=Object(l.a)(a.default,i.a,i.b,!1,null,null,null);n.options.__file="src\\views\\articles\\frontend\\JS\\RequireJS.vue",e.default=n.exports},348:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{toTop:this.$util.toTop}}}},349:function(t,e,s){"use strict";s.r(e);var i=s(348),a=s.n(i);for(var r in i)"default"!==r&&function(t){s.d(e,t,function(){return i[t]})}(r);e.default=a.a},375:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("BoWen",[s("div",{staticClass:"p-1",attrs:{slot:"catalog"},slot:"catalog"},[s("Steps",{attrs:{direction:"vertical"}},[s("Step",{attrs:{title:"简介",content:"RequireJS 简介",status:"wait"},nativeOn:{click:function(e){t.toTop("#RequireJS-1",30)}}}),s("Step",{attrs:{title:"加载 RequireJS",content:"加载 RequireJS",status:"wait"},nativeOn:{click:function(e){t.toTop("#RequireJS-2",30)}}})],1)],1),s("div",{staticClass:"px-1"},[s("div",{staticClass:"py-3 text-center"},[s("h1",[s("Icon",{attrs:{type:"ios-book-outline"}}),t._v(" RequireJS (一)")],1),s("p",{staticClass:"pt-1"},[t._v("非常小巧的 JavaScript 模块载入框架")])]),s("h3",{staticClass:"ml-1",attrs:{id:"RequireJS-1"}},[s("Icon",{attrs:{type:"logo-buffer"}}),t._v(" 简介")],1),s("Divider"),s("p",[t._v("随着网站功能逐渐丰富，网页中的 js 也变得越来越复杂和臃肿，原有通过 script 标签来导入一个个的 js 文件这种方式已经不能满足现在互联网开发模式。")]),s("p",[t._v("原始写法一个很明显的缺陷，加载多个文件的时候，浏览器会停止网页渲染，加载文件越多，网页失去响应的时间就会越长；其次，由于js文件之间存在依赖关系，因此必须严格保证加载顺序，依赖性最大的模块一定要放到最后加载，当依赖关系很复杂的时候，代码的编写和维护都会变得困难。")]),s("p",[t._v("AMD 提出了一种基于模块的异步加载 JavaScript 代码的机制，它推荐开发人员将 JavaScript 代码封装进一个个模块，对全局对象的依赖变成了对其他模块的依赖，无须再声明一大堆的全局变量。通过延迟和按需加载来解决各个模块的依赖关系。模块化的 JavaScript 代码好处很明显，各个功能组件的松耦合性可以极大的提升代码的复用性、可维护性。")]),s("p",[t._v("这种非阻塞式的并发式快速加载 JavaScript 代码，使 Web 页面上其他不依赖 JavaScript 代码的 UI 元素，如图片、CSS 以及其他 DOM 节点得以先加载完毕，Web 页面加载速度更快，用户也得到更好的体验。")]),s("p",[t._v("RequireJS是一个非常小巧的JavaScript模块载入框架，是AMD规范最好的实现者之一。")]),s("p",[t._v("让我们先来看一段没有使用 RequireJS 的代码的情况。")]),s("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"ml-2"},[s("code",{staticClass:"html"},[t._v('\x3c!-- demo.html --\x3e<!DOCTYPE html>\n<html>\n    <head>\n        <script type="text/javascript" src="js/say.hello.js"><\/script>\n    </head>\n    <body>\n        <div>Hello world</div>\n    </body>\n</html>')])]),s("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"ml-2"},[s("code",{staticClass:"js"},[t._v("// say.hello.js\n(function () {\n    function sayHello () {\n        alert('Hello');\n    }\n\n    sayHello();\n})()")])]),s("p",[t._v("如上所示的代码，当执行 sayHello 函数时，页面会是一片空白，Hello world 的字样并不会被渲染出来，只有当点击确认弹出框后，才会继续渲染页面，这便是 JS 阻塞浏览器渲染导致的结果。")]),s("h3",{staticClass:"ml-1",attrs:{id:"RequireJS-2"}},[s("Icon",{attrs:{type:"logo-buffer"}}),t._v(" 加载 RequireJS")],1),s("Divider"),s("p",[t._v("首选去官网下载"),s("a",{attrs:{href:""}},[t._v(" RequireJS")])]),s("p",[t._v("然后以传统的方式通过 script 标签的 src 属性引入，并把它放在 js 子目录下面：")]),s("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"ml-2"},[s("code",{staticClass:"js"},[t._v('// async属性表明这个文件需要异步加载，避免网页失去响应。IE 不支持这个属性，只支持 defer\n// 这样的写法是避免加载这个文件，造成网页失去响应\n// 当然把它放在网页底部加载也可以避免\n<script src="js/require.js" defer async="true"><\/script>')])]),s("p",[t._v("此时我们用 RequireJS 再来实现上面的事情：")]),s("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"ml-2"},[s("code",{staticClass:"html"},[t._v('\x3c!-- demo.html --\x3e<!DOCTYPE html>\n<html>\n    <head>\n        <script type="text/javascript" src="js/require.js" defer async="true"><\/script>\n        <script type="text/javascript">\n            require(["js/say.hello"]);\n        <\/script>\n    </head>\n    <body>\n        <div>Hello world</div>\n    </body>\n</html>')])]),s("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"ml-2"},[s("code",{staticClass:"js"},[t._v("// say.hello.js\ndefine(function () {\n    function sayHello () {\n        alert('Hello');\n    }\n\n    sayHello();\n})()")])]),s("p",[t._v("现在当弹出框弹出时，浏览器并不是一片空白，Hello world 的字样会直接显示。所以我们现在可以更加直观地感受 RequireJS 带来的好处：")]),s("ul",{staticClass:"ml-2"},[s("li",{staticClass:"ml-1"},[t._v("使用程序调用的方式加载 js，防出页面一排 script 标签引入外部 js 的情况发生。")]),s("li",{staticClass:"ml-1"},[t._v("防止js加载阻塞页面渲染。")])]),s("p",{staticClass:"text-right"},[t._v("还没有看过？点击 "),s("a",{attrs:{href:"/#/articles/frontend/JS/RequireJS-1"}},[t._v("RequireJS (二) ")]),t._v("查看更多内容。")]),s("p",{staticClass:"text-right"},[t._v("参考资料："),s("a",{staticClass:"mr-1",attrs:{href:"http://www.runoob.com/w3cnote/requirejs-tutorial-1.html"}},[t._v("菜鸟教程")]),s("a",{staticClass:"mr-1",attrs:{href:"https://www.ibm.com/developerworks/cn/web/1209_shiwei_requirejs/index.html"}},[t._v("IBM")]),s("a",{staticClass:"mr-1",attrs:{href:"http://www.ruanyifeng.com/blog/2012/11/require_js.html"}},[t._v("阮一峰的网络日志")]),s("a",{attrs:{href:"https://www.imooc.com/learn/787"}},[t._v("慕课网")])])],1)])},a=[];i._withStripped=!0,s.d(e,"a",function(){return i}),s.d(e,"b",function(){return a})}}]);