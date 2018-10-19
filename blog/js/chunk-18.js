(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{311:function(t,o,i){"use strict";i.r(o);var a=i(407),n=i(370);for(var e in n)"default"!==e&&function(t){i.d(o,t,function(){return n[t]})}(e);var r=i(0),s=Object(r.a)(n.default,a.a,a.b,!1,null,null,null);s.options.__file="src\\views\\articles\\frontend\\JS\\JS-08.vue",o.default=s.exports},369:function(t,o,i){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default={data:function(){return{toTop:this.$util.toTop}}}},370:function(t,o,i){"use strict";i.r(o);var a=i(369),n=i.n(a);for(var e in a)"default"!==e&&function(t){i.d(o,t,function(){return a[t]})}(e);o.default=n.a},407:function(t,o,i){"use strict";var a=function(){var t=this,o=t.$createElement,i=t._self._c||o;return i("BoWen",[i("div",{staticClass:"p-1",attrs:{slot:"catalog"},slot:"catalog"},[i("Steps",{attrs:{direction:"vertical"}},[i("Step",{attrs:{title:"基本概念",content:"基本概念",status:"wait"},nativeOn:{click:function(o){t.toTop("#JS-08-1",30)}}}),i("Step",{attrs:{title:"延长作用域链",content:"延长作用域链",status:"wait"},nativeOn:{click:function(o){t.toTop("#JS-08-2",30)}}}),i("Step",{attrs:{title:"没有块级作用域",content:"没有块级作用域",status:"wait"},nativeOn:{click:function(o){t.toTop("#JS-08-3",30)}}})],1)],1),i("div",{staticClass:"px-1"},[i("div",{staticClass:"py-3 text-center"},[i("h1",[i("Icon",{attrs:{type:"ios-book-outline"}}),t._v(" JS-执行环境和作用域")],1),i("p",{staticClass:"pt-1"},[t._v("执行环境(execution context)，为简单起见，有时也称为“环境”")])]),i("h3",{staticClass:"ml-1",attrs:{id:"JS-08-1"}},[i("Icon",{attrs:{type:"logo-buffer"}}),t._v(" 基本概念")],1),i("Divider"),i("p",[t._v("执行环境定义了变量或函数有权访问的其他数据，决定了它们各自的行为。")]),i("p",{staticClass:"text-info"},[t._v("每个执行环境都有一个与之关联的变量对象（variable object），环境中定义的所有变量和函数都保存在这个对象中。虽然我们编写的代码无法访问这个对象，但解析器在处理数据时会在后台使用它。")]),i("p",[t._v("全局执行环境是最外围的一个执行环境，在 Web 浏览器中，全局执行环境被认为是 window 对象，因此所有全局变量和函数都是作为 window 对象的属性和方法创建的。")]),i("p",[t._v("某个执行环境中的所有代码执行完毕后，该环境被销毁，保存在其中的所有变量和函数定义也随之销毁（全局执行环境直到应用程序退出——例如关闭网页或浏览器——时才会被销毁）。")]),i("p",{staticClass:"text-info"},[t._v("每个函数都有自己的执行环境。当执行流进入一个函数时，函数的环境就会被推入一个环境栈中。而在函数执行之后，栈将其环境弹出，把控制权返回给之前的执行环境。")]),i("p",[t._v("当代码在一个环境中执行时，会创建变量对象的一个作用域链（scope chain）。作用域链的用途，是保证对执行环境有权访问的所有变量和函数的有序访问。")]),i("p",[i("span",{staticClass:"text-info"},[t._v("作用域链的前端，始终都是当前执行的代码所在环境的变量对象。")]),t._v("如果这个环境是函数，则将其活动对象（activation object）作为变量对象。")]),i("p",[t._v("活动对象在最开始时只包含一个变量，即 arguments 对象（这个对象在全局环境中是不存在的）。作用域链中的下一个变量对象来自包含（外部）环境，而再下一个变量对象则来自下一个包含环境。这样，一直延续到全局执行环境。")]),i("p",[t._v("全局执行环境的变量对象始终都是作用域链中的最后一个对象。")]),i("p",[t._v("标识符解析是沿着作用域链一级一级地搜索标识符的过程。搜索过程始终从作用域链的前端开始，然后逐级地向后回溯，直至找到标识符为止（如果找不到标识符，通常会导致错误发生）。")]),i("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"ml-2"},[i("code",{staticClass:"js"},[t._v("// 全局环境，其变量对象包含一个变量 color 和 一个函数 changeColor() \nvar color = 'red';\nfunction changeColor () {\n    // changeColor() 局部环境，其变量对象包含一个变量 anotherColor 和一个函数 getColor()\n    anotherColor = 'blue';\n    // 这里还可以访问全局环境下的变量 color\n    console.log(color); // red\n    function getColor () {\n        // getColor() 局部环境，其变量对象包括一个变量 localColor\n        // 这里可以访问全局环境和 changeColor() 局部环境中的所有变量\n        var localColor = color + ' ' + anotherColor;\n        console.log(localColor); // red blue\n    }\n    getColor();\n}\n \nchangeColor();")])]),i("h3",{staticClass:"ml-1",attrs:{id:"JS-08-2"}},[i("Icon",{attrs:{type:"logo-buffer"}}),t._v(" 延长作用域链")],1),i("Divider"),i("p",[t._v("有些语句可以在作用域链的前端临时增加一个变量对象，该变量对象会在代码执行后被移除。")]),i("p",[t._v("具体来说，就是当执行流进入下列任何一个语句时，作用域链就会得到加长，比如 "),i("pre",{staticClass:"custom-pre"},[t._v("try-catch 语句的 catch 块")]),t._v(" 和 "),i("pre",{staticClass:"custom-pre"},[t._v("with 语句")]),t._v("，这两个语句都会在作用域链的前端添加一个变量对象。")]),i("p",[t._v("对 with 语句来说，会将指定的对象添加到作用域链中。对 catch 语句来说，会创建一个新的变量对象，其中包含的是被抛出的错误对象的声明。")]),i("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"ml-2"},[i("code",{staticClass:"js"},[t._v('function buildUrl () { \n    var params = "?username=Anani"\n    with(location) {\n        var url = href + params;\n    }\n    return url;\n}')])]),i("p",[t._v("这里，with 语句接收的是 location 对象，因此其变量对象中就包含了 location 对象的所有属性和方法，而这个变量对象被添加到了作用域链的前端。")]),i("p",[t._v("buildUrl() 函数中定义了一个变量 params。当在 with 语句中引用变量 href 时（实际引用的是 location.href），可以在当前执行环境的变量对象中找到。")]),i("p",[t._v("当引用变量 params 时，引用的则是在 buildUrl() 中定义的那个变量，而该变量位于函数环境的变量对象中。至于 with 语句内部，则定义了一个名为 url 的变量，因而 url 就成了函数执行环境的一部分，所以可以作为函数的值被返回。")]),i("h3",{staticClass:"ml-1",attrs:{id:"JS-08-3"}},[i("Icon",{attrs:{type:"logo-buffer"}}),t._v(" 没有块级作用域")],1),i("Divider"),i("p",[t._v("JavaScript 没有块级作用域经常会导致理解上的困惑，比如下面的例子：")]),i("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"ml-2"},[i("code",{staticClass:"js"},[t._v("for (var i = 0; i < 5; i++) { \n    // do something\n}\nconsole.log(i); // 5")])]),i("p",[t._v("对于有块级作用域的语言来说，for 语句初始化变量的表达式所定义的变量，只会存在于循环的环境之中，也就是说上面的打印结果应该是 undefined，然而事实上并非如此，在 for 语句中定义的变量在循环外部依然存在，所以打印的结果是 5。")]),i("p",[t._v("再来看下面这个例子：")]),i("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"ml-2"},[i("code",{staticClass:"js"},[t._v("for (var i = 0; i < 5; i++) { \n    setTimeout(() => {\n        console.log(i);\n    },4);\n}\n// 结果会输出 5 个 5")])]),i("p",[t._v("因为 JavaScript 异步函数的原因，延迟函数执行前循环已经结束，由于 JavaScript 不存在块级作用域，所以后面输出时读取的都是全局作用域下的 i 的值，因为循环已经结束，i 的值已经变为 5 了，所以最后会输出 5 个 5。")]),i("p",{staticClass:"text-right"},[t._v("参考资料：JavaScript 高级程序设计（第三版）")]),i("FooterDivider")],1)])},n=[];a._withStripped=!0,i.d(o,"a",function(){return a}),i.d(o,"b",function(){return n})}}]);