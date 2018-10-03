(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{310:function(t,e,n){"use strict";n.r(e);var a=n(387),i=n(360);for(var s in i)"default"!==s&&function(t){n.d(e,t,function(){return i[t]})}(s);var r=n(0),c=Object(r.a)(i.default,a.a,a.b,!1,null,null,null);c.options.__file="src\\views\\articles\\frontend\\JS\\RequireJS-3.vue",e.default=c.exports},359:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{toTop:this.$util.toTop}}}},360:function(t,e,n){"use strict";n.r(e);var a=n(359),i=n.n(a);for(var s in a)"default"!==s&&function(t){n.d(e,t,function(){return a[t]})}(s);e.default=i.a},387:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("BoWen",[n("div",{staticClass:"p-1",attrs:{slot:"catalog"},slot:"catalog"},[n("Steps",{attrs:{direction:"vertical"}},[n("Step",{attrs:{title:"传统的 jsonp 服务",content:"传统的 jsonp 服务",status:"wait"},nativeOn:{click:function(e){t.toTop("#RequireJS-3-1",30)}}}),n("Step",{attrs:{title:"RequireJS 的 jsonp 服务",content:"RequireJS 的 jsonp 服务",status:"wait"},nativeOn:{click:function(e){t.toTop("#RequireJS-3-2",30)}}})],1)],1),n("div",{staticClass:"px-1"},[n("div",{staticClass:"py-3 text-center"},[n("h1",[n("Icon",{attrs:{type:"ios-book-outline"}}),t._v(" RequireJS (四)")],1),n("p",{staticClass:"pt-1"},[t._v("RequireJS 实现 jsonp 服务")])]),n("h3",{staticClass:"ml-1",attrs:{id:"RequireJS-3-1"}},[n("Icon",{attrs:{type:"logo-buffer"}}),t._v(" 传统的 jsonp 服务")],1),n("Divider"),n("p",[t._v("由于浏览器同源策略的影响，Ajax 请求不能跨域获取数据。")]),n("p",[t._v('所谓"同源"指的是"三个相同"：'),n("ul",{staticClass:"ml-1"},[n("li",[t._v("协议相同")]),n("li",[t._v("域名相同")]),n("li",[t._v("端口相同")])])]),n("p",[t._v("同源政策的目的，是为了保证用户信息的安全，防止恶意的网站窃取数据。如果非同源，共有三种行为受到限制："),n("ul",{staticClass:"ml-1"},[n("li",[t._v("Cookie、LocalStorage 和 IndexDB 无法读取。")]),n("li",[t._v("DOM 无法获得。")]),n("li",[t._v("AJAX 请求不能发送。")])])]),n("p",[t._v("那么 Ajax 请求如何规避这个限制呢？我们知道 JSONP 是服务器与客户端跨源通信的常用方法。它的基本思想是，网页通过添加一个 "),n("code",[t._v("<script> ")]),t._v("元素，向服务器请求 JSON 数据，这种做法不受同源政策限制；服务器收到请求后，将数据放在一个指定名字的回调函数里传回来。")]),n("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"ml-2"},[n("code",{staticClass:"js"},[t._v("/**\n * @param src 请求地址\n * @param callback 请求完成后执行的回调函数的函数名，这里设置为 loaded\n */\nfunction getDataByJsonp (src, callback) {\n    var url = src + '?callback=' + callback;\n    var script = document.createElement('script');\n    script.setAttribute(\"type\",\"text/javascript\");\n    script.src = url;\n    document.body.appendChild(script);\n}\n\n// 后台接收到请求后返回立即执行的函数，函数名为请求中所带参数指定的函数(callback)，本次实例即为 loaded\n// 并把需要获取的数据以参数的形式传入该函数\n// 后台返回的数据形式\nloaded({\n   id: 1,\n   userName: 'Anani',\n   age: 24\n})\n\n// 最后申明一个 callback 函数，这里即为 loaded 函数，它将会在请求成功后立即执行\nfunction loaded (arg) {\n    console.log(arg);\n}")])]),n("h3",{staticClass:"ml-1",attrs:{id:"RequireJS-3-2"}},[n("Icon",{attrs:{type:"logo-buffer"}}),t._v(" RequireJS 的 jsonp 服务")],1),n("Divider"),n("p",[t._v("前面介绍到 RequireJS 的运行机制是通过 script 标签来加载模块，所以我们也可以通过 RequireJS 来实现 jsonp 服务。")]),n("p",[t._v("在使用 RequireJS 实现 jsonp 服务时，我们需要把后台返回的数据写成 define() 函数的形式。")]),n("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"ml-2"},[n("code",{staticClass:"js"},[t._v("// 后台的数据形式 \ndefine({\n    id: 1,\n    userName: 'Anani',\n    age: 24\n});\n \n// RequireJS 跨域获取数据\nrequire(['url'], function (arg) {\n    console.log(arg);\n});")])]),n("p",{staticClass:"text-right"},[t._v("还没有看过？点击 "),n("a",{attrs:{href:"/#/articles/frontend/JS/RequireJS-4"}},[t._v("RequireJS (五) ")]),t._v("查看更多内容。")]),n("p",{staticClass:"text-right"},[t._v("参考资料："),n("a",{staticClass:"mr-1",attrs:{href:"http://www.ruanyifeng.com/blog/2016/04/same-origin-policy.html"}},[t._v("阮一峰的网络日志")]),n("a",{attrs:{href:"https://www.imooc.com/learn/787"}},[t._v("慕课网")])])],1)])},i=[];a._withStripped=!0,n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i})}}]);