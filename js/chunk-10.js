(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{301:function(t,a,r){"use strict";r.r(a);var e=r(459),s=r(358);for(var i in s)"default"!==i&&function(t){r.d(a,t,function(){return s[t]})}(i);var n=r(0),o=Object(n.a)(s.default,e.a,e.b,!1,null,null,null);o.options.__file="src/views/articles/frontend/AngularJS/angular-ui-router-2.vue",a.default=o.exports},357:function(t,a,r){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={data:function(){return{toTop:this.$util.toTop}}}},358:function(t,a,r){"use strict";r.r(a);var e=r(357),s=r.n(e);for(var i in e)"default"!==i&&function(t){r.d(a,t,function(){return e[t]})}(i);a.default=s.a},459:function(t,a,r){"use strict";var e=function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("BoWen",[r("div",{staticClass:"p-1",attrs:{slot:"catalog"},slot:"catalog"},[r("Steps",{attrs:{direction:"vertical"}},[r("Step",{attrs:{title:"基本概念",content:"基本概念",status:"wait"},nativeOn:{click:function(a){t.toTop("#angular-ui-router-2-1",30)}}}),r("Step",{attrs:{title:"路径传参",content:"路径传参",status:"wait"},nativeOn:{click:function(a){t.toTop("#angular-ui-router-2-2",30)}}}),r("Step",{attrs:{title:"配合 params 属性传参",content:"配合 params 属性传参",status:"wait"},nativeOn:{click:function(a){t.toTop("#angular-ui-router-2-3",30)}}}),r("Step",{attrs:{title:"获取父级的参数",content:"获取父级的参数",status:"wait"},nativeOn:{click:function(a){t.toTop("#angular-ui-router-2-4",30)}}}),r("Step",{attrs:{title:"传递对象",content:"传递对象",status:"wait"},nativeOn:{click:function(a){t.toTop("#angular-ui-router-2-5",30)}}})],1)],1),r("div",{staticClass:"px-1"},[r("div",{staticClass:"py-3 text-center"},[r("h1",[r("Icon",{attrs:{type:"ios-book-outline"}}),t._v(" UI-Router for AngularJS (三)")],1),r("p",{staticClass:"pt-1"},[t._v("UI-Router is the defacto standard for routing in AngularJS")])]),r("h3",{staticClass:"ml-1",attrs:{id:"angular-ui-router-2-1"}},[r("Icon",{attrs:{type:"logo-buffer"}}),t._v(" 基本概念")],1),r("Divider"),r("p",[t._v("通常，URL 具有动态部分，被称为参数，这在现在的单页面程序开发中使用的很多。")]),r("p",[t._v("比如在一个商品展示的网页，当我们点击一件商品进入详情页时，它们所用的页面通常是同一个，只是获取的数据不同，为了给每件商品提供正确的详情数据，因此我们需要提供动态的数据去区别它们。")]),r("p",[t._v("页面传参的方式一般具有两种，一种是 url 传参，这样传递的参数会在 url 中显示出来，另外一种传递参数的方式是直接在路由配置中通过指定 params 属性，这样传递的参数不会出现在 url 中。")]),r("h3",{staticClass:"ml-1",attrs:{id:"angular-ui-router-2-2"}},[r("Icon",{attrs:{type:"logo-buffer"}}),t._v(" 路径传参")],1),r("Divider"),r("p",[t._v("路由配置。")]),r("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"ml-2"},[r("code",{staticClass:"js"},[t._v('// basic params \n$stateProvider\n    .state(\'home.products\', {\n        url: "/home/:productId", // 也可以换作：url: "/home/{productId}"\n        templateUrl: \'home.detail.html\',\n        controller: function ($stateParams) {\n            // If we got here from a url of /home/1\n            console.log($stateParams.productId); // 1\n        }\n    });\n \n// query params\n$stateProvider\n    .state(\'home.products\', {\n        url: "/products?myParam" // will match to url of "/products?myParam=value"\n    });\n$stateProvider\n    .state(\'home.products\', {\n        url: "/products?myParam1&myParam2" // will match to url of "/products?myParam1=value1&myParam2=value2"\n    });')])]),r("p",[t._v("在页面中传参。")]),r("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"ml-2"},[r("code",{staticClass:"html"},[t._v('\x3c!-- The value for id can be anything in scope. --\x3e\n<a ui-sref="home.products({productId: id})">View product</a>\n\n\x3c!-- 多个参数 --\x3e\n<a ui-sref="home.products({myParam1=value1, myParam2=value2})">View product</a>')])]),r("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"ml-2"},[r("code",{staticClass:"js"},[t._v("// 或者您也可以将它们传递给$ state.go（）\n$state.go('products', {param1: value1});\n \n// 多个参数\n$state.go('products', {param1: value1, param2: value2});")])]),r("h3",{staticClass:"ml-1",attrs:{id:"angular-ui-router-2-3"}},[r("Icon",{attrs:{type:"logo-buffer"}}),t._v(" 配合 params 属性传参")],1),r("Divider"),r("p",[t._v("就像前面所说的，配合 params 属性传参的参数不会暴露在 url 中，其用法区别仅在于在配置路由时，预先设置参数的值为 null 即可。")]),r("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"ml-2"},[r("code",{staticClass:"js"},[t._v(".state('products', { \n    url: \"/products\",\n    params: {\n        param1: null\n    },\n    templateUrl: 'products.html'\n});\n\n// 多个参数\n.state('products', {\n    url: \"/products\",\n    params: {\n        param1: null,\n        param2: null\n    },\n    templateUrl: 'products.html'\n});")])]),r("h3",{staticClass:"ml-1",attrs:{id:"angular-ui-router-2-4"}},[r("Icon",{attrs:{type:"logo-buffer"}}),t._v(" 获取父级的参数")],1),r("Divider"),r("p",[t._v("$StateParams 仅包含注册在当前状态下的参数，不包含其他状态下的参数，即使是上级的 url 参数也获取不到。")]),r("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"ml-2"},[r("code",{staticClass:"js"},[t._v("$stateProvider.state('products.detail', { \n    url: '/products/:productId',\n    controller: function ($stateParams) {\n        $stateParams.productId  //*** Exists! ***//\n    }\n}).state('products.detail.subitem', {\n    url: '/item/:itemId', \n    controller: function ($stateParams) {\n        $stateParams.productId //*** Watch Out! DOESN'T EXIST!! ***//\n        $stateParams.itemId //*** Exists! ***//  \n    }\n})\n ")])]),r("p",[t._v("若想让下级获取到当前状态的参数，需使用 resolve()。该函数会在画面渲染出来前先执行完成。")]),r("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"ml-2"},[r("code",{staticClass:"js"},[t._v("$stateProvider.state('products.detail', {\n    url: '/products/:productId',\n    controller: function ($stateParams) {\n        $stateParams.productId  //*** Exists! ***//\n    },\n    resolve:{\n        productId: ['$stateParams', function ($stateParams) {\n            return $stateParams.productId;\n        }]\n    }\n}).state('products.detail.subitem', {\n    url: '/item/:itemId', \n    controller: function ($stateParams, productId){\n        productId //*** Exists! ***//\n        $stateParams.itemId //*** Exists! ***//  \n    }\n})")])]),r("h3",{staticClass:"ml-1",attrs:{id:"angular-ui-router-2-5"}},[r("Icon",{attrs:{type:"logo-buffer"}}),t._v(" 传递对象")],1),r("Divider"),r("p",[t._v("传递。")]),r("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"ml-2"},[r("code",{staticClass:"js"},[t._v("var obj = {\n    name: 'Anani',\n    age: 24\n};\n$state.go(\"home.person\", {object: JSON.stringify(obj)});")])]),r("p",[t._v("接收。")]),r("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"ml-2"},[r("code",{staticClass:"js"},[t._v("JSON.parse($state.params.object);")])]),r("p",{staticClass:"text-right"},[t._v("还没有看够？请点击"),r("a",{attrs:{href:"/#/articles/frontend/AngularJS/angular-ui-router-3"}},[t._v(" UI-Router for AngularJS (四) ")]),t._v("查看更多内容。")]),r("p",{staticClass:"text-right"},[t._v("参考资料："),r("a",{attrs:{href:"https://github.com/angular-ui/ui-router/wiki/URL-Routing"}},[t._v("https://github.com/angular-ui/ui-router/wiki/URL-Routing")])]),r("FooterDivider")],1)])},s=[];e._withStripped=!0,r.d(a,"a",function(){return e}),r.d(a,"b",function(){return s})}}]);