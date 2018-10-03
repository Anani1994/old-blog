(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{301:function(e,t,n){"use strict";n.r(t);var i=n(393),v=n(338);for(var r in v)"default"!==r&&function(e){n.d(t,e,function(){return v[e]})}(r);var a=n(0),o=Object(a.a)(v.default,i.a,i.b,!1,null,null,null);o.options.__file="src\\views\\articles\\frontend\\JS\\trigger-event.vue",t.default=o.exports},337:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{toTop:this.$util.toTop,toPage:this.$util.toPage}}}},338:function(e,t,n){"use strict";n.r(t);var i=n(337),v=n.n(i);for(var r in i)"default"!==r&&function(e){n.d(t,e,function(){return i[e]})}(r);t.default=v.a},393:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("BoWen",[n("div",{staticClass:"p-1",attrs:{slot:"catalog"},slot:"catalog"},[n("Steps",{attrs:{direction:"vertical"}},[n("Step",{attrs:{title:"背景",content:"问题产生的背景",status:"wait"},nativeOn:{click:function(t){e.toTop("#trigger-event-cacus",30)}}}),e._v(" "),n("Step",{attrs:{title:"解决思路",content:"解决问题的着重点",status:"wait"},nativeOn:{click:function(t){e.toTop("#trigger-event-think",30)}}}),e._v(" "),n("Step",{attrs:{title:"解决方法",content:"解决问题的具体措施",status:"wait"},nativeOn:{click:function(t){e.toTop("#trigger-event-method",30)}}},[n("Steps",{attrs:{direction:"vertical"}},[n("Step",{attrs:{title:"jquery",content:"利用 jQuery 中的 trigger() 方法",status:"wait"},nativeOn:{click:function(t){t.stopPropagation(),e.toTop("#trigger-event-method-jq",30)}}}),e._v(" "),n("Step",{attrs:{title:"原生 JavaScript",content:"利用 JavaScript 中的原生方法",status:"wait"},nativeOn:{click:function(t){t.stopPropagation(),e.toTop("#trigger-event-method-js",30)}}})],1)],1),e._v(" "),n("Step",{attrs:{title:"提示",content:"简单注明注意事项",status:"wait"},nativeOn:{click:function(t){e.toTop("#trigger-event-tips",30)}}})],1)],1),e._v(" "),n("div",{staticClass:"px-1"},[n("div",{staticClass:"py-3 text-center"},[n("h1",[n("Icon",{attrs:{type:"ios-book-outline"}}),e._v(" 手动触发事件")],1),e._v(" "),n("p",{staticClass:"pt-1"},[e._v("简要介绍手动触发 JavaScript 事件的方法")])]),e._v(" "),n("h3",{attrs:{id:"trigger-event-cacus"}},[n("Icon",{attrs:{type:"logo-buffer"}}),e._v(" 背景")],1),e._v(" "),n("Divider"),e._v(" "),n("p",[e._v("在使用一个 UI 组件库(iview) 中的走马灯时，由于项目的需要，必须重写指示器，或者说需要提供新的指示器来改变幻灯片当前显示的元素。其提供的 "),n("code",[e._v("API")]),e._v(" 中包含有一个 "),n("code",[e._v("value")]),e._v(" 属性，表示幻灯片展示元素的索引，可由 "),n("code",[e._v("v-model")]),e._v(" 实现双向绑定，所以首先想到了通过函数改变这个值来达到想要的效果。")]),e._v(" "),n("p",[e._v("在通过给新创建的指示器元素绑定 "),n("code",[e._v("click")]),e._v(" 事件后，经测试可行，但是有一个很严重的 "),n("code",[e._v("bug")]),e._v(" 就是不能像原始的指示器一样重置计时器，所以有时点击切换后会立马再次切换，给用户带来了极差的体验。")]),e._v(" "),n("h3",{attrs:{id:"trigger-event-think"}},[n("Icon",{attrs:{type:"logo-buffer"}}),e._v(" 解决思路")],1),e._v(" "),n("Divider"),e._v(" "),n("p",[e._v("既然原始的指示器可以重置计时器，如果有一种方法可以通过函数去手动的触发对应指示器的事件，那么也就解决了上面出现的尴尬问题，这也就引出了本文的主题。")]),e._v(" "),n("P",[e._v("我们通过创建对应个数的新指示器，然后对其绑定点击事件，事件执行的函数内容就是去触发对应原始指示器上绑定的事件，这样好像切换幻灯片的事件就在新创建的指示器元素上一样。")]),e._v(" "),n("h3",{attrs:{id:"trigger-event-method"}},[n("Icon",{attrs:{type:"logo-buffer"}}),e._v(" 解决方法")],1),e._v(" "),n("Divider"),e._v(" "),n("p",[e._v("手动触发事件的实现主要有两种方式，其一是通过 jQuery 提供的 trigger() 方法，再者就是使用原生 JavaScript 实现。")]),e._v(" "),n("h4",{staticClass:"m-1",attrs:{id:"trigger-event-method-jq"}},[n("Icon",{attrs:{type:"logo-buffer"}}),e._v(" jQuery")],1),e._v(" "),n("p",[n("code",[e._v("trigger()")]),e._v(" 方法触发被选元素上指定的事件以及事件的默认行为（比如表单提交）。")]),e._v(" "),n("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"ml-2"},[n("code",{staticClass:"js"},[e._v("// 语法\n$(selector).trigger(event,eventObj,param1,param2,...)\n// 参数：event\t必需。规定指定元素上要触发的事件。包括自定义事件和其它标准事件。\n// 参数：param1,param2,...\t可选。传递到事件处理程序的参数")])]),e._v(" "),n("h4",{staticClass:"m-1",attrs:{id:"trigger-event-method-js"}},[n("Icon",{attrs:{type:"logo-buffer"}}),e._v(" 原生 JavaScript")],1),e._v(" "),n("p",[e._v("使用原生 JavaScript 手动触发事件大概包括创建一个事件对象、初始化该事件对象、最后就是触发它。这其中涉及到的方法包括："),n("code",[e._v("createEvent")]),e._v(" "),n("code",[e._v("initEvent")]),e._v(" "),n("code",[e._v("dispatchEvent")]),e._v("。其大致步骤如下所示。")]),e._v(" "),n("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"ml-2"},[n("code",{staticClass:"js"},[e._v("function trigger (selector, eveType) {\n    // 获取 DOM 元素：用于绑定或触发事件的 DOM 节点\n    let ele = document.querySelector(selector);\n    // 创建一个新的事件（Event）\n    let eve = document.createEvent('Event') \n    // 初始化事件对象\n    // 参数：evetype 事件的类型（DOMString 类型的字段）\n    // 参数：bubbles 事件是否应该向上冒泡（boolean值）\n    // 参数：cancelable 事件的默认动作是否可以被取消（boolean值）\n    eve.initEvent(eveType, true, true);\n    // 触发事件监听\n    // 参数：eve 派发的事件对象，即上面创建并被初始化的事件对象\n    if (ele.fireEvent) {\n        // IE浏览器特有，不会触发事件的默认行为\n        ele.fireEvent(`on${eveType}`);\n    } else {\n        ele.dispatchEvent(eve);\n    }\n}")])]),e._v(" "),n("p",[e._v("测试代码如下所示。")]),e._v(" "),n("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"ml-2"},[n("code",{staticClass:"html"},[e._v("<!DOCTYPE html>\n<html lang=\"zh-CN\">\n<head>\n    <title>测试</title>\n</head>\n<body>\n<div id=\"target\">我是目标元素。</div>\n<button>测试</button>\n</body>\n<script>\nfunction trigger (selector, eveType) {\n    let ele = document.querySelector(selector);\n    let eve = document.createEvent('Event') \n    eve.initEvent(eveType, true, true);\n    if (ele.fireEvent) {\n        ele.fireEvent(`on${eveType}`);\n    } else {\n        ele.dispatchEvent(eve);\n    }\n}\ndocument.querySelector('#target').onclick = function sayHello () {\n    alert('Hello');\n}\ndocument.querySelector('button').onclick = function () {\n    trigger ('#target', 'click');\n}\n<\/script>\n</html>")])]),e._v(" "),n("p",[e._v("到此对于手动触发函数的关键知识已经完结了，后面对 trigger() 函数进行了改进。")]),e._v(" "),n("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"ml-2"},[n("code",[e._v("function trigger (selector, eveType, bubbles, cancelable, method) {\n    // 获取 DOM 元素：用于绑定或触发事件的 DOM 节点\n    let ele = document.querySelector(selector);\n    // 创建一个新的事件（Event）\n    let eve = document.createEvent('Event') \n    // 初始化事件对象\n    // 参数：evetype 事件的类型（DOMString 类型的字段）\n    // 参数：bubbles 事件是否应该向上冒泡（boolean值）\n    // 参数：cancelable 事件的默认动作是否可以被取消（boolean值）\n    eve.initEvent(eveType, bubbles = true, cancelable = true);\n    // 绑定对该事件的监听\n    if (method) {\n        if (ele.addEventListener) {\n            // method 中的第一个参数即为 event，也就是创建的事件对象，浏览器会将它变得更加丰富\n            ele.addEventListener(eveType, method)\n        } else {\n            // IE8及早期版本特有的替代性标准\n            ele.attachEvent(eveType, method)\n        }\n    }\n    // 触发事件监听\n    // 参数：eve 派发的事件对象，即上面创建并被初始化的事件对象\n    if (ele.fireEvent) {\n        // IE浏览器特有，不会触发事件的默认行为\n        ele.fireEvent(`on${eveType}`);\n    } else {\n        ele.dispatchEvent(eve);\n    }\n}")])]),e._v(" "),n("p",[e._v("测试代码如下所示。")]),e._v(" "),n("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"ml-2"},[n("code",{staticClass:"html"},[e._v("<!DOCTYPE html>\n<html lang=\"zh-CN\">\n<head>\n    <title>测试</title>\n</head>\n<body>\n<div id=\"target\">我是目标元素。</div>\n<button>测试</button>\n</body>\n<script>\nfunction trigger (selector, eveType, bubbles, cancelable, method) {\n    let ele = document.querySelector(selector);\n    let eve = document.createEvent('Event') \n    eve.initEvent(eveType, bubbles = true, cancelable = true);\n    if (method) {\n        if (ele.addEventListener) {\n            ele.addEventListener(eveType, method)\n        } else {\n            ele.attachEvent(eveType, method)\n        }\n    }\n    if (ele.fireEvent) {\n        ele.fireEvent(`on${eveType}`);\n    } else {\n        ele.dispatchEvent(eve);\n    }\n}\nfunction sayHello () {\n    alert('Hello');\n}\ndocument.querySelector('button').onclick = function () {\n    trigger ('#target', 'click', true, true, sayHello);\n}\n<\/script>\n</html>")])]),e._v(" "),n("h3",{attrs:{id:"trigger-event-tips"}},[n("Icon",{attrs:{type:"logo-buffer"}}),e._v(" 提示")],1),e._v(" "),n("Divider"),e._v(" "),n("p",{staticClass:"text-warn"},[e._v("文章中涉及到的方法包括："),n("code",[e._v("createEvent")]),e._v(" "),n("code",[e._v("initEvent")]),e._v(" "),n("code",[e._v("dispatchEvent")]),e._v("，已知的其中前两者已经过时，但很多浏览器目前仍然支持它，但不建议使用，推荐使用 event 构造函数来替代。")]),e._v(" "),n("div",{staticClass:"ml-2"},[e._v("点击 "),n("Tag",{attrs:{color:"success"},nativeOn:{click:function(t){e.toPage("new-trigger-event")}}},[e._v("查看新方法")]),e._v(" 最新的实现方法。")],1),e._v(" "),n("p",{staticClass:"text-right"},[e._v("参考资料："),n("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/"}},[e._v("MDN")])]),e._v(" "),n("FooterDivider")],1)])},v=[];i._withStripped=!0,n.d(t,"a",function(){return i}),n.d(t,"b",function(){return v})}}]);