(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{314:function(t,e,n){"use strict";n.r(e);var i=n(404),o=n(373);for(var v in o)"default"!==v&&function(t){n.d(e,t,function(){return o[t]})}(v);n(440);var s=n(0),l=Object(s.a)(o.default,i.a,i.b,!1,null,"4c1afc77",null);l.options.__file="src\\views\\articles\\frontend\\JS\\ES6-0.vue",e.default=l.exports},371:function(t,e,n){},372:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{toTop:this.$util.toTop}}}},373:function(t,e,n){"use strict";n.r(e);var i=n(372),o=n.n(i);for(var v in i)"default"!==v&&function(t){n.d(e,t,function(){return i[t]})}(v);e.default=o.a},404:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("BoWen",[n("div",{staticClass:"p-1",attrs:{slot:"catalog"},slot:"catalog"},[n("Steps",{attrs:{direction:"vertical"}},[n("Step",{attrs:{title:"let 命令",content:"let 命令",status:"wait"},nativeOn:{click:function(e){t.toTop("#ES6-0-0",30)}}}),t._v(" "),n("Step",{attrs:{title:"快级作用域",content:"快级作用域"},nativeOn:{click:function(e){t.toTop("#ES6-0-1",30)}}}),t._v(" "),n("Step",{attrs:{title:"const 命令",content:"const 命令"},nativeOn:{click:function(e){t.toTop("#ES6-0-2",30)}}}),t._v(" "),n("Step",{attrs:{title:"ES6 声明变量的六种方法",content:"ES6 声明变量的六种方法"},nativeOn:{click:function(e){t.toTop("#ES6-0-3",30)}}}),t._v(" "),n("Step",{attrs:{title:"global 对象",content:"global 对象"},nativeOn:{click:function(e){t.toTop("#ES6-0-4",30)}}}),t._v(" "),n("Step",{attrs:{title:"顶层对象的属性",content:"顶层对象的属性"},nativeOn:{click:function(e){t.toTop("#ES6-0-5",30)}}})],1)],1),t._v(" "),n("div",{staticClass:"px-1"},[n("div",{staticClass:"py-3 text-center"},[n("h1",[n("Icon",{attrs:{type:"ios-book-outline"}}),t._v(" ES6-变量申明")],1),t._v(" "),n("p",{staticClass:"pt-1"},[t._v("ES6 中新增了 let 和 const 命令，用于申明变量")])]),t._v(" "),n("h3",{staticClass:"ml-1",attrs:{id:"ES6-0-0"}},[n("Icon",{attrs:{type:"logo-buffer"}}),t._v(" let 命令")],1),t._v(" "),n("Divider"),t._v(" "),n("h4",[t._v("1、基本用法")]),t._v(" "),n("p",[t._v("ES6 新增了let命令，用来声明变量。它的用法类似于var，但是所声明的变量，只在let命令所在的代码块内有效。")]),t._v(" "),n("p",[t._v("for循环还有一个特别之处，就是设置循环变量的那部分是一个父作用域，而循环体内部是一个单独的子作用域。")]),t._v(" "),n("h4",[t._v("2、不存在变量提升")]),t._v(" "),n("p",[t._v("var命令会发生”变量提升“现象，即变量可以在声明之前使用，值为undefined。let命令改变了语法行为，它所声明的变量一定要在声明后使用，否则报错。")]),t._v(" "),n("h4",[t._v("3、暂时性死区")]),t._v(" "),n("p",[t._v("在代码块内，使用let命令声明变量之前，该变量都是不可用的。这在语法上，称为“暂时性死区”（temporal dead zone，简称 TDZ）。")]),t._v(" "),n("p",[t._v("typeof检查未申明的变量返回undefined,但在“暂时性死区”typeof运行时就会抛出一个ReferenceError。")]),t._v(" "),n("h4",[t._v("4、不允许重复申明")]),t._v(" "),n("p",[t._v("let不允许在相同作用域内，重复声明同一个变量。")]),t._v(" "),n("h3",{staticClass:"ml-1",attrs:{id:"ES6-0-1"}},[n("Icon",{attrs:{type:"logo-buffer"}}),t._v(" 块级作用域")],1),t._v(" "),n("Divider"),t._v(" "),n("h4",[t._v("1、为什么需要块级作用域？")]),t._v(" "),n("p",[t._v("ES5 只有全局作用域和函数作用域，没有块级作用域。")]),t._v(" "),n("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"ml-2"},[n("code",{staticClass:"js"},[t._v("var tmp = new Date();\n\nfunction f() {\n    console.log(tmp);\n    if (false) {\n        var tmp = 'hello world';\n    }\n}\n\nf(); // undefined")])]),t._v(" "),n("p",[t._v("上面代码的原意是，if 代码块的外部使用外层的 tmp 变量，内部使用内层的 tmp 变量。但是，函数 f 执行后，输出结果为 undefined，原因在于变量提升，导致内层的 tmp 变量覆盖了外层的 tmp 变量。")]),t._v(" "),n("p",[t._v("for 循环中的变量 i 只用来控制循环，但是循环结束后，它并没有消失，泄露成了全局变量。")]),t._v(" "),n("h4",[t._v("2、ES6 的块级作用域")]),t._v(" "),n("p",[t._v("let 实际上为 JavaScript 新增了块级作用域。")]),t._v(" "),n("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"ml-2"},[n("code",{staticClass:"js"},[t._v("function f1() {\n    let n = 5;\n    if (true) {\n        let n = 10;\n    }\n    console.log(n); // 5\n}")])]),t._v(" "),n("p",[t._v("上面的函数有两个代码块，都声明了变量 n，运行后输出 5。这表示外层代码块不受内层代码块的影响。如果两次都使用 var 定义变量 n，最后输出的值才是 10。")]),t._v(" "),n("p",[t._v("ES6 允许块级作用域的任意嵌套。")]),t._v(" "),n("h4",[t._v("3、块级作用域与函数声明")]),t._v(" "),n("p",[t._v("ES5 规定，函数只能在顶层作用域和函数作用域之中声明，不能在块级作用域声明。(但是，浏览器没有遵守这个规定)")]),t._v(" "),n("p",[t._v("ES6 规定，块级作用域之中，函数声明语句的行为类似于 let，在块级作用域之外不可引用。但对于对 ES6 的浏览器：1、允许在块级作用域内声明函数。2、函数声明类似于var，即会提升到全局作用域或函数作用域的头部。3、函数声明提升到所在的块级作用域的头部。")]),t._v(" "),n("p",[t._v("ES6 的块级作用域允许声明函数的规则，只在使用大括号的情况下成立，如果没有使用大括号，就会报错。")]),t._v(" "),n("p",[t._v("考虑到环境导致的行为差异太大，应该避免在块级作用域内声明函数。如果确实需要，也应该写成函数表达式，而不是函数声明语句。")]),t._v(" "),n("h3",{staticClass:"ml-1",attrs:{id:"ES6-0-2"}},[n("Icon",{attrs:{type:"logo-buffer"}}),t._v(" const 命令")],1),t._v(" "),n("Divider"),t._v(" "),n("h4",[t._v("1、基本用法")]),t._v(" "),n("p",[t._v("const声明一个只读的常量。一旦声明，常量的值就不能改变。")]),t._v(" "),n("p",[t._v("const的作用域与 let 命令相同：只在声明所在的块级作用域内有效。")]),t._v(" "),n("p",[t._v("const命令声明的常量也是不提升，同样存在暂时性死区，只能在声明的位置后面使用。")]),t._v(" "),n("p",[t._v("const声明的常量，也与 let 一样不可重复声明。")]),t._v(" "),n("h4",[t._v("2、本质")]),t._v(" "),n("p",[t._v("const实际上保证的，并不是变量的值不得改动，而是变量指向的那个内存地址不得改动。对于简单类型的数据（数值、字符串、布尔值），值就保存在变量指向的那个内存地址，因此等同于常量。但对于复合类型的数据（主要是对象和数组），变量指向的内存地址，保存的只是一个指针，const只能保证这个指针是固定的，无法控制它指向的数据结构是不是可变的。")]),t._v(" "),n("p",[t._v("将对象冻结，应该使用Object.freeze方法。")]),t._v(" "),n("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"ml-2"},[n("code",{staticClass:"js"},[t._v("const foo = Object.freeze({});\n\n// 常规模式时，下面一行不起作用；\n// 严格模式时，该行会报错\nfoo.prop = 123;")])]),t._v(" "),n("h3",{staticClass:"ml-1",attrs:{id:"ES6-0-3"}},[n("Icon",{attrs:{type:"logo-buffer"}}),t._v(" ES6 声明变量的六种方法")],1),t._v(" "),n("Divider"),t._v(" "),n("p",[t._v("ES5 只有两种声明变量的方法：var 命令和 function 命令。ES6 除了添加 let 和 const 命令，后面章节还会提到，另外两种声明变量的方法：import 命令和 class 命令。所以，ES6 一共有 6 种声明变量的方法。")]),t._v(" "),n("h3",{staticClass:"ml-1",attrs:{id:"ES6-0-4"}},[n("Icon",{attrs:{type:"logo-buffer"}}),t._v(" global对象")],1),t._v(" "),n("Divider"),t._v(" "),n("p",[t._v("ES5 的顶层对象，本身也是一个问题，因为它在各种实现里面是不统一的。")]),t._v(" "),n("p",[n("ul",{staticClass:"ml-1"},[n("li",[t._v("浏览器里面，顶层对象是 window，但 Node 和 Web Worker 没有 window。")]),t._v(" "),n("li",[t._v("浏览器和 Web Worker 里面，self 也指向顶层对象，但是 Node 没有 self。")]),t._v(" "),n("li",[t._v("Node 里面，顶层对象是 global，但其他环境都不支持。同一段代码为了能够在各种环境，都能取到顶层对象，现在一般是使用 this 变量，但是有局限性。")]),t._v(" "),n("li",[t._v("全局环境中，this 会返回顶层对象。但是，Node 模块和 ES6 模块中，this 返回的是当前模块。")]),t._v(" "),n("li",[t._v("函数里面的 this，如果函数不是作为对象的方法运行，而是单纯作为函数运行，this 会指向顶层对象。但是，严格模式下，这时 this 会返回 undefined。")]),t._v(" "),n("li",[t._v("不管是严格模式，还是普通模式，new Function('return this')()，总是会返回全局对象。但是，如果浏览器用了 CSP（Content Security Policy，内容安全政策），那么 eval、new Function 这些方法都可能无法使用。")])])]),t._v(" "),n("p",[t._v("综上所述，很难找到一种方法，可以在所有情况下，都取到顶层对象。下面是两种勉强可以使用的方法。")]),t._v(" "),n("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"ml-2"},[n("code",{staticClass:"js"},[t._v("// 方法一\n(typeof window !== 'undefined' ?\n    window :\n    (typeof process === 'object' &&\n        typeof require === 'function' &&\n        typeof global === 'object') ?\n    global :\n    this);\n\n// 方法二\nvar getGlobal = function () {\n    if (typeof self !== 'undefined') {\n        return self;\n    }\n    if (typeof window !== 'undefined') {\n        return window;\n    }\n    if (typeof global !== 'undefined') {\n        return global;\n    }\n    throw new Error('unable to locate global object');\n};")])]),t._v(" "),n("p",[t._v("现在有一个提案，在语言标准的层面，引入 global 作为顶层对象。也就是说，在所有环境下，global 都是存在的，都可以从它拿到顶层对象。")]),t._v(" "),n("p",[t._v("垫片库 system.global 模拟了这个提案，可以在所有环境拿到 global。")]),t._v(" "),n("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"ml-2"},[n("code",{staticClass:"js"},[t._v("require('system.global/shim')();\n\n// ES6 模块的写法\nimport shim from 'system.global/shim';\nshim();")])]),t._v(" "),n("p",[t._v("上面代码可以保证各种环境里面，global 对象都是存在的。")]),t._v(" "),n("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"ml-2"},[n("code",{staticClass:"js"},[t._v("// CommonJS 的写法\nvar global = require('system.global')();\n\n// ES6 模块的写法\nimport getGlobal from 'system.global';\nconst global = getGlobal();")])]),t._v(" "),n("p",[t._v("上面代码将顶层对象放入变量 global。")]),t._v(" "),n("h3",{staticClass:"ml-1",attrs:{id:"ES6-0-5"}},[n("Icon",{attrs:{type:"logo-buffer"}}),t._v(" 顶层对象的属性")],1),t._v(" "),n("Divider"),t._v(" "),n("p",[t._v("ES5 之中，顶层对象的属性与全局变量是等价的。")]),t._v(" "),n("p",[t._v("ES6 中 var 命令和 function 命令声明的全局变量，依旧是顶层对象的属性；另一方面规定，let命令、const命令、class命令声明的全局变量，不属于顶层对象的属性。")]),t._v(" "),n("p",{staticClass:"text-right"},[n("a",{attrs:{href:"http://es6.ruanyifeng.com/#README"}},[t._v("ECMAScript 6 入门")])]),t._v(" "),n("FooterDivider")],1)])},o=[];i._withStripped=!0,n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o})},440:function(t,e,n){"use strict";var i=n(371);n.n(i).a}}]);