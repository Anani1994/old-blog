(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{272:function(e,t,n){"use strict";n.r(t);var i=n(287),s=n(278);for(var a in s)"default"!==a&&function(e){n.d(t,e,function(){return s[e]})}(a);n(291);var l=n(0),r=Object(l.a)(s.default,i.a,i.b,!1,null,"133c2922",null);r.options.__file="src\\views\\articles\\others\\notes\\note-00.vue",t.default=r.exports},276:function(e,t,n){},277:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"BoWen"}},278:function(e,t,n){"use strict";n.r(t);var i=n(277),s=n.n(i);for(var a in i)"default"!==a&&function(e){n.d(t,e,function(){return i[e]})}(a);t.default=s.a},287:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Row",{staticClass:"bo-wen"},[n("Col",{attrs:{span:"4"}},[e._v("目录")]),e._v(" "),n("Col",{staticClass:"pt-3 h-100 outContainer",attrs:{span:"17"}},[n("div",{staticClass:"h-100 innerContainer"},[n("h3",[e._v("注册全局可用的函数")]),e._v(" "),n("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[e._v("                "),n("code",{staticClass:"js"},[e._v("// main.js\nimport util from './util.js'\nVue.prototype.$util = util;")]),e._v("\n            ")]),e._v(" "),n("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[e._v("                "),n("code",{staticClass:"js"},[e._v("// 在组件中使用\nmethod:{\n    helloWorld() {\n        // sayHello 为 util 上的方法\n        this.$util.sayHello();\n    }\n}")]),e._v("\n            ")]),e._v(" "),n("h3",[e._v("注册全局组件")]),e._v(" "),n("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[e._v("                "),n("code",{staticClass:"js"},[e._v("// main.js\n// 自定义全局组件\nimport defineSubassemblies from './components/defineSubassembly.js';\nVue.use(defineSubassemblies);")]),e._v("\n            ")]),e._v(" "),n("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[e._v("                "),n("code",{staticClass:"js"},[e._v("// defineSubassembly.js\nimport FullPage from './fullpage/fullpage.vue';\nimport PageItem from './fullpage/components/page.vue';\n\nconst defineSubassemblies = {\n    install:function (Vue) {\n        Vue.component('FullPage',FullPage);\n        Vue.component('PageItem',PageItem);\n    }\n};\n\nexport default defineSubassemblies;\n")]),e._v("\n            ")]),e._v(" "),n("div",{staticClass:"text-center text-error"},[e._v("到底了，我可是有底线的。")])])]),e._v(" "),n("Col",{attrs:{span:"3"}},[e._v("额外的内容")])],1)},s=[];i._withStripped=!0,n.d(t,"a",function(){return i}),n.d(t,"b",function(){return s})},291:function(e,t,n){"use strict";var i=n(276);n.n(i).a}}]);