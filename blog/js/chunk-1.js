(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{294:function(t,e,s){"use strict";s.r(e);var a=s(358),i=s(317);for(var n in i)"default"!==n&&function(t){s.d(e,t,function(){return i[t]})}(n);s(378);var o=s(0),r=Object(o.a)(i.default,a.a,a.b,!1,null,"23ca92b5",null);r.options.__file="src\\views\\articles\\frontend\\CSS\\pseudo-before-after.vue",e.default=r.exports},315:function(t,e,s){},316:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){var t=this;return{toTop:this.$util.toTop,columns:[{title:"值",key:"value",width:300,render:function(e,s){return e("i-button",{props:{type:"text"},style:{color:"#fff",background:"rgb(109,109,109)"},nativeOn:{click:function(){s.row.id?t.$util.toTop(s.row.id,30):t.$Message.error("暂无相关信息。")}}},s.row.value)}},{title:"描述",key:"des"}],data:[{value:"string",des:"定义文本内容。",id:"#pseudo-before-after-str"},{value:"url",des:"定义 url。",id:"#pseudo-before-after-url"},{value:"counter()/counters()",des:"在 content 上应用 counter() 或 counters() 函数来显示在页面",id:"#pseudo-before-after-counter"},{value:"attr(X)",des:"定义显示在该选择器之前或之后的选择器的属性。",id:"#pseudo-before-after-attr"},{value:"open-quote",des:""},{value:"close-quote",des:""},{value:"no-open-quote",des:""},{value:"no-close-quote",des:""}]}}}},317:function(t,e,s){"use strict";s.r(e);var a=s(316),i=s.n(a);for(var n in a)"default"!==n&&function(t){s.d(e,t,function(){return a[t]})}(n);e.default=i.a},358:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("BoWen",[s("div",{staticClass:"p-1",attrs:{slot:"catalog"},slot:"catalog"},[s("Steps",{attrs:{direction:"vertical"}},[s("Step",{attrs:{title:"简介",content:"简单介绍该类伪元素",status:"wait"},nativeOn:{click:function(e){t.toTop("#pseudo-before-after-intro",30)}}}),t._v(" "),s("Step",{attrs:{title:"content 属性",content:"分析两种伪元素独有的属性",status:"wait"},nativeOn:{click:function(e){t.toTop("#pseudo-before-after-pro",30)}}}),t._v(" "),s("Step",{attrs:{title:"常见的使用方式",content:"列举两种伪类的常见使用方式",status:"wait"},nativeOn:{click:function(e){t.toTop("#pseudo-before-after-use",30)}}}),t._v(" "),s("Step",{attrs:{title:"最后",content:"想到什么说什么",status:"wait"},nativeOn:{click:function(e){t.toTop("#pseudo-before-after-end",30)}}})],1)],1),t._v(" "),s("div",{staticClass:"px-1"},[s("div",{staticClass:"py-3 text-center"},[s("h1",[s("Icon",{attrs:{type:"ios-book-outline"}}),t._v(" 伪元素 ::before 和 ::after")],1),t._v(" "),s("p",{staticClass:"pt-1"},[t._v("CSS伪元素是用来添加一些选择器的特殊效果")])]),t._v(" "),s("h3",{staticClass:"ml-1",attrs:{id:"pseudo-before-after-intro"}},[s("Icon",{attrs:{type:"logo-buffer"}}),t._v(" 简介")],1),t._v(" "),s("Divider"),t._v(" "),s("p",[s("code",[t._v("CSS")]),t._v(" 伪元素是添加到选择器的关键字，它允许您设置所选元素的特定部分的样式。")]),t._v(" "),s("p",[t._v("而这两个伪元素还允许创作人员在元素内容的最前面插入生成内容。默认地，这个伪元素是行内元素，不过可以使用属性 "),s("code",[t._v("display")]),t._v(" 改变这一点。")]),t._v(" "),s("p",[t._v("现在所有主流浏览器都支持 "),s("code",[t._v("::before")]),t._v(" 伪元素。")]),t._v(" "),s("p",{staticClass:"text-info"},[t._v("通常(css3)伪元素应当使用双冒号，伪类使用单冒号。由于 "),s("code",[t._v("W3C")]),t._v(" 规范的旧版本中不存在这种区别(css2)，所以多数浏览器都支持这两写法。")]),t._v(" "),s("h3",{staticClass:"ml-1",attrs:{id:"pseudo-before-after-pro"}},[s("Icon",{attrs:{type:"logo-buffer"}}),t._v(" content 属性")],1),t._v(" "),s("Divider"),t._v(" "),s("p",[t._v("content 属性设置文本或图像出现（浮动）在另一个元素中的什么地方。")]),t._v(" "),s("Table",{staticClass:"ml-2",attrs:{columns:t.columns,data:t.data,border:""}}),t._v(" "),s("h4",{staticClass:"my-1 ml-2",attrs:{id:"pseudo-before-after-str"}},[s("Icon",{attrs:{type:"logo-buffer"}}),t._v(" "),s("strong",[t._v("[String]")]),t._v(" -向元素内容中添加字符串")],1),t._v(" "),s("p",[t._v("代码：")]),t._v(" "),s("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"ml-2"},[s("code",{staticClass:"html"},[t._v('\x3c!-- html --\x3e\n<div class="content">文本内容</div>')])]),t._v(" "),s("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"ml-2"},[s("code",{staticClass:"css"},[t._v("/* css */\n.content {\n    color: #fff;\n}\n.content::before {\n    content: '添加在前面的文本';\n    color: #19be6b;\n}\n.content::after {\n    content: '添加在后面的文本';\n    color: #ff9900 ;\n}")])]),t._v(" "),s("p",[t._v("渲染结果：")]),t._v(" "),s("div",{staticClass:"bg-hljs ml-2"},[s("span",{staticClass:"text-success"},[t._v("添加在前面的文本")]),t._v("文本内容"),s("span",{staticClass:"text-warn"},[t._v("添加在后面的文本")])]),t._v(" "),s("h4",{staticClass:"my-1 ml-2",attrs:{id:"pseudo-before-after-url"}},[s("Icon",{attrs:{type:"logo-buffer"}}),t._v(" "),s("strong",[t._v("url")]),t._v(" -引用媒体文件")],1),t._v(" "),s("p",[t._v("代码：")]),t._v(" "),s("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"ml-2"},[s("code",{staticClass:"html"},[t._v('\x3c!-- html --\x3e\n<a href="anani1994.github.io">首页</a>')])]),t._v(" "),s("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"ml-2"},[s("code",{staticClass:"css"},[t._v('/* css */\na::before {\n    url("https://www.baidu.com/images/image-name.jpg");\n}')])]),t._v(" "),s("p",[t._v("渲染结果：会在首页的前面显示通过 url 指定的图片。")]),t._v(" "),s("h4",{staticClass:"my-1 ml-2",attrs:{id:"pseudo-before-after-counter"}},[s("Icon",{attrs:{type:"logo-buffer"}}),t._v(" "),s("strong",[t._v("counter/counters")]),t._v(" -使用 css 中的计时器")],1),t._v(" "),s("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"ml-2"},[s("code",{staticClass:"html"},[t._v("\x3c!-- html --\x3e\n<ul>\n    <li>内容</li>\n    <li>内容</li>\n    <ul>\n        <li>内容</li>\n        <li>内容</li>\n        <ul>\n            <li>内容</li>\n            <li>内容</li>\n        </ul>\n    </ul>\n</ul>")])]),t._v(" "),s("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"ml-2"},[s("code",{staticClass:"css"},[t._v("/* css */\nul {\n    margin-left: 2rem;\n    counter-reset: order;\n    list-style-type: none;\n}\nul li::before {\n    counter-increment: order 1;\n    content: counters(order, '-') '. ';\n}")])]),t._v(" "),s("p",[t._v("渲染结果：")]),t._v(" "),s("ul",[s("li",[t._v("内容")]),t._v(" "),s("li",[t._v("内容")]),t._v(" "),s("ul",[s("li",[t._v("内容")]),t._v(" "),s("li",[t._v("内容")]),t._v(" "),s("ul",[s("li",[t._v("内容")]),t._v(" "),s("li",[t._v("内容")])])])]),t._v(" "),s("h4",{staticClass:"my-1 ml-2",attrs:{id:"pseudo-before-after-attr"}},[s("Icon",{attrs:{type:"logo-buffer"}}),t._v(" "),s("strong",[t._v("attr()")]),t._v(" -调用当前元素的属性")],1),t._v(" "),s("p",[t._v("代码：")]),t._v(" "),s("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"ml-2"},[s("code",{staticClass:"html"},[t._v('\x3c!-- html --\x3e\n<a href="anani1994.github.io">首页</a>')])]),t._v(" "),s("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"ml-2"},[s("code",{staticClass:"css"},[t._v('/* css */\na::after { content:"(" attr(href) ")"; }')])]),t._v(" "),s("p",[t._v("渲染结果：")]),t._v(" "),s("div",{staticClass:"bg-hljs ml-2",staticStyle:{color:"blue"}},[t._v("首页(anani1994.github.io)")]),t._v(" "),s("h3",{staticClass:"ml-1 mt-1",attrs:{id:"pseudo-before-after-use"}},[s("Icon",{attrs:{type:"logo-buffer"}}),t._v(" 常见的使用方式")],1),t._v(" "),s("Divider"),t._v(" "),s("h4",{staticClass:"ml-2 my-1",attrs:{id:"pseudo-before-after-use-1"}},[s("Icon",{attrs:{type:"logo-buffer"}}),t._v(" 清除浮动")],1),t._v(" "),s("p",[t._v("代码：")]),t._v(" "),s("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"ml-2"},[s("code",{staticClass:"css"},[t._v('/* css */\n.clearfix {\n    *overflow: hidden;\n    *zoom: 1;\n}\n.clearfix::after {\n    display: block;\n    content: "";\n    clear: both;\n}')])]),t._v(" "),s("h4",{staticClass:"ml-2 my-1",attrs:{id:"pseudo-before-after-use-2"}},[s("Icon",{attrs:{type:"logo-buffer"}}),t._v(" 超链接特效")],1),t._v(" "),s("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"ml-2"},[s("code",{staticClass:"html"},[t._v('\x3c!-- html --\x3e\n<a href="anani1994.github.io">鼠标移上去出现方括号</a>')])]),t._v(" "),s("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"ml-2"},[s("code",{staticClass:"css"},[t._v('/* css */\na {\n    display: inline-block;\n    position: relative;\n    text-decoration: none;\n}\n\na:hover::before,\na:hover::after {\n    position: absolute;\n}\n\na:hover::before {\n    content: "\\5B";\n    left: -10px;\n}\n\na:hover::after {\n    content: "\\5D";\n    right: -10px;\n}')])]),t._v(" "),s("div",{staticClass:"bg-hljs ml-2"},[t._v("渲染结果："),s("a",{staticClass:"ml-1",attrs:{href:"anani1994.github.io"}},[t._v("鼠标移上去出现方括号")])]),t._v(" "),s("h4",{staticClass:"ml-2 my-1",attrs:{id:"pseudo-before-after-use-2"}},[s("Icon",{attrs:{type:"logo-buffer"}}),t._v(" 分割线")],1),t._v(" "),s("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"ml-2"},[s("code",{staticClass:"html"},[t._v('\x3c!-- html --\x3e\n<p class="text-line">something</p>')])]),t._v(" "),s("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"ml-2"},[s("code",{staticClass:"css"},[t._v("/* css */\n.text-line {\n    overflow: hidden;\n    position: relative;\n    margin: auto;\n    width: 100%;\n    line-height: 20px;\n    text-align: center;\n}\n.text-line::before, .text-line::after {\n    position: absolute;\n    top: 10px;\n    content: '';\n    height: 1px;\n    width: 50%;\n    background: #000;\n}\n.text-line::before {\n    right: calc(50% + 50px);\n}\n.text-line::after {\n    left: calc(50% + 50px);\n}")])]),t._v(" "),s("p",[t._v("渲染结果：")]),t._v(" "),s("p",{staticClass:"text-line"},[t._v("something")]),t._v(" "),s("h3",{staticClass:"ml-1",attrs:{id:"pseudo-before-after-end"}},[s("Icon",{attrs:{type:"logo-buffer"}}),t._v(" 最后")],1),t._v(" "),s("Divider"),t._v(" "),s("p",[t._v("伪元素，修饰不在文档树中的部分，并不是真实存在的，利用 js 无法获取其中的内容。")]),t._v(" "),s("p",[t._v("以下内容仅作参考，且所提及伪元素仅指本文介绍的两个伪元素：")]),t._v(" "),s("p",[t._v("伪元素初始表现为 "),s("code",[t._v("display: inline;")]),t._v(" 其中的内容会呈现在元素(content-box)内的内容的前后，也就是在 "),s("code",[t._v("padding-box")]),t._v(" 内。")]),t._v(" "),s("p",[t._v("当设置伪元素为 "),s("code",[t._v("display: inline-block;")]),t._v(" 比上一条多出一个行内块元素的表现，便具有了宽高等属性。")]),t._v(" "),s("p",[t._v("当设置伪元素为 "),s("code",[t._v("display: block;")]),t._v(" 会比上一条多出一个块元素的表现。")]),t._v(" "),s("p",[t._v("当设置元素为相对定位，伪元素为绝对定位时，此时伪元素具有了宽高等属性，就像是更具破坏性的浮动。如果元素此时没有内容，两伪元素的初始位置皆位于元素上，并处于 "),s("code",[t._v("padding-box")]),t._v(" 内。(就像是相对于 "),s("code",[t._v("content-box")]),t._v(" 的绝对定位 "),s("code",[t._v("top: 0; left: 0;")]),t._v(")，此时 top 和 left 的表现与元素之间的设置一样。且无论元素有无内容 "),s("code",[t._v("::before")]),t._v(" 设置的 left 或 right 总相对于元素内边界(padding-box)。而在元素含有内容时，"),s("code",[t._v("::after")]),t._v(" 会跟在内容得后面，设置 left 或 right 又会跟 "),s("code",[t._v("::before")]),t._v(" 一致。")]),t._v(" "),s("p",[t._v("伪元素的百分比宽度是相对与元素的宽度。")]),t._v(" "),s("FooterDivider")],1)])},i=[];a._withStripped=!0,s.d(e,"a",function(){return a}),s.d(e,"b",function(){return i})},378:function(t,e,s){"use strict";var a=s(315);s.n(a).a}}]);