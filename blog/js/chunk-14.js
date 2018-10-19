(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{307:function(t,i,v){"use strict";v.r(i);var n=v(415),l=v(362);for(var _ in l)"default"!==_&&function(t){v.d(i,t,function(){return l[t]})}(_);v(451);var a=v(0),e=Object(a.a)(l.default,n.a,n.b,!1,null,"5aaffa14",null);e.options.__file="src\\views\\articles\\frontend\\JS\\JS-04.vue",i.default=e.exports},360:function(t,i,v){},361:function(t,i,v){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default={data:function(){return{toTop:this.$util.toTop}}}},362:function(t,i,v){"use strict";v.r(i);var n=v(361),l=v.n(n);for(var _ in n)"default"!==_&&function(t){v.d(i,t,function(){return n[t]})}(_);i.default=l.a},415:function(t,i,v){"use strict";var n=function(){var t=this,i=t.$createElement,v=t._self._c||i;return v("BoWen",[v("div",{staticClass:"p-1",attrs:{slot:"catalog"},slot:"catalog"},[v("Steps",{attrs:{direction:"vertical"}},[v("Step",{attrs:{title:"乘性操作符",content:"乘性操作符",status:"wait"},nativeOn:{click:function(i){t.toTop("#JS-04-1",30)}}}),t._v(" "),v("Step",{attrs:{title:"加性操作符",content:"加性操作符"},nativeOn:{click:function(i){t.toTop("#JS-04-2",30)}}}),t._v(" "),v("Step",{attrs:{title:"关系操作符",content:"关系操作符"},nativeOn:{click:function(i){t.toTop("#JS-04-3",30)}}}),t._v(" "),v("Step",{attrs:{title:"相等操作符",content:"相等操作符"},nativeOn:{click:function(i){t.toTop("#JS-04-4",30)}}}),t._v(" "),v("Step",{attrs:{title:"条件操作符",content:"条件操作符"},nativeOn:{click:function(i){t.toTop("#JS-04-5",30)}}}),t._v(" "),v("Step",{attrs:{title:"赋值操作符",content:"赋值操作符"},nativeOn:{click:function(i){t.toTop("#JS-04-6",30)}}}),t._v(" "),v("Step",{attrs:{title:"逗号操作符",content:"逗号操作符"},nativeOn:{click:function(i){t.toTop("#JS-04-7",30)}}})],1)],1),t._v(" "),v("div",{staticClass:"px-1"},[v("div",{staticClass:"py-3 text-center"},[v("h1",[v("Icon",{attrs:{type:"ios-book-outline"}}),t._v(" JS-操作符 (二)")],1),t._v(" "),v("p",{staticClass:"pt-1"},[t._v("介绍 JavaScript 的基本操作符")])]),t._v(" "),v("h3",{staticClass:"ml-1",attrs:{id:"JS-04-1"}},[v("Icon",{attrs:{type:"logo-buffer"}}),t._v(" 乘性操作符")],1),t._v(" "),v("Divider"),t._v(" "),v("p",[t._v("ECMAScript 定义了 3 个乘性操作符：乘法、除法和求模。")]),t._v(" "),v("p",[t._v("如果参与乘性计算的某 个操作数不是数值，后台会先使用 Number()转型函数将其转换为数值。")]),t._v(" "),v("p",[v("ul",{staticClass:"ml-1"},[v("li",[t._v("乘法：乘法操作符由一个星号（*）表示，用于计算两个数值的乘积。\n                    "),v("ul",[v("li",[t._v("如果操作数都是数值，执行常规的乘法计算，即两个正数或两个负数相乘的结果还是正数，而如果只有一个操作数有符号，那么结果就是负数。如果乘积超过了 ECMAScript 数值的表示范围， 则返回 Infinity 或 -Infinity；")]),t._v(" "),v("li",[t._v("如果有一个操作数是 NaN，则结果是 NaN；")]),t._v(" "),v("li",[t._v("如果是 Infinity 与 0相乘，则结果是 NaN；")]),t._v(" "),v("li",[t._v(" 如果是 Infinity 与非 0 数值相乘，则结果是 Infinity 或 -Infinity，取决于有符号操作数的符号；")]),t._v(" "),v("li",[t._v("如果是 Infinity 与 Infinity 相乘，则结果是 Infinity；")]),t._v(" "),v("li",[t._v("如果有一个操作数不是数值，则在后台调用 Number() 将其转换为数值，然后再应用上面的规则。")])])])])]),t._v(" "),v("p",[v("ul",{staticClass:"ml-1"},[v("li",[t._v("除法 ：除法操作符由一个斜线符号（/）表示，执行第二个操作数除第一个操作数的计算。\n                    "),v("ul",[v("li",[t._v("如果操作数都是数值，执行常规的除法计算，即两个正数或两个负数相除的结果还是正数，而如果只有一个操作数有符号，那么结果就是负数。如果商超过了 ECMAScript 数值的表示范围，则返回 Infinity 或 -Infinity；")]),t._v(" "),v("li",[t._v("如果有一个操作数是 NaN，则结果是 NaN；")]),t._v(" "),v("li",[t._v("如果是 Infinity 被 Infinity 除，则结果是 NaN；")]),t._v(" "),v("li",[t._v("如果是零被零除，则结果是 NaN；")]),t._v(" "),v("li",[t._v("如果是非零的有限数被零除，则结果是 Infinity 或 -Infinity，取决于有符号操作数的符号；")]),t._v(" "),v("li",[t._v("如果是 Infinity 被任何非零数值除，则结果是 Infinity 或 -Infinity，取决于有符号操作数的符号；")]),t._v(" "),v("li",[t._v("如果有一个操作数不是数值，则在后台调用 Number() 将其转换为数值，然后再应用上面的规则。")])])])])]),t._v(" "),v("p",[v("ul",{staticClass:"ml-1"},[v("li",[t._v("求模：求模（余数）操作符由一个百分号（%）表示。\n                    "),v("ul",[v("li",[t._v("如果操作数都是数值，执行常规的除法计算，返回除得的余数；")]),t._v(" "),v("li",[t._v("如果被除数是无穷大值而除数是有限大的数值，则结果是NaN；")]),t._v(" "),v("li",[t._v("如果被除数是有限大的数值而除数是零，则结果是 NaN；")]),t._v(" "),v("li",[t._v("如果是 Infinity 被 Infinity 除，则结果是NaN；")]),t._v(" "),v("li",[t._v("如果被除数是有限大的数值而除数是无穷大的数值，则结果是被除数；")]),t._v(" "),v("li",[t._v("如果被除数是零，则结果是零；")]),t._v(" "),v("li",[t._v("如果有一个操作数不是数值，则在后台调用Number()将其转换为数值，然后再应用上面的规则。")])])])])]),t._v(" "),v("h3",{staticClass:"ml-1",attrs:{id:"JS-04-2"}},[v("Icon",{attrs:{type:"logo-buffer"}}),t._v(" 加性操作符")],1),t._v(" "),v("Divider"),t._v(" "),v("p",[v("ul",{staticClass:"ml-1"},[v("li",[t._v("加法：加法操作符（+）表示。\n                    "),v("ul",[v("li",[t._v("如果有一个操作数是 NaN，则结果是 NaN；")]),t._v(" "),v("li",[t._v("如果是 Infinity 加 Infinity，则结果是 Infinity；")]),t._v(" "),v("li",[t._v("如果是 -Infinity 加 -Infinity，则结果是 -Infinity；")]),t._v(" "),v("li",[t._v("如果是 Infinity 加 -Infinity，则结果是 NaN；")]),t._v(" "),v("li",[t._v("如果是 +0 加 +0，则结果是 +0；")]),t._v(" "),v("li",[t._v("如果是 -0 加 -0，则结果是 -0；")]),t._v(" "),v("li",[t._v("如果是 +0 加 -0，则结果是 +0。")]),t._v(" "),v("li",[t._v("如果两个操作数都是字符串，则将第二个操作数与第一个操作数拼接起来；")]),t._v(" "),v("li",[t._v("如果只有一个操作数是字符串，则将另一个操作数转换为字符串，然后再将两个字符串拼接起来。")]),t._v(" "),v("li",[t._v('如果有一个操作数是对象、数值或布尔值，则调用它们的 toString() 方法取得相应的字符串值，然后再应用前面关于字符串的规则。对于 undefined 和 null，则分别调用 String() 函数并取得字符串 "undefined" 和 "null"。')])])])])]),t._v(" "),v("p",[v("ul",{staticClass:"ml-1"},[v("li",[t._v("减法：减法操作符（-）表示。\n                    "),v("ul",[v("li",[t._v("如果两个操作符都是数值，则执行常规的算术减法操作并返回结果；")]),t._v(" "),v("li",[t._v("如果有一个操作数是 NaN，则结果是 NaN；")]),t._v(" "),v("li",[t._v("如果是 Infinity 减 Infinity，则结果是 NaN；")]),t._v(" "),v("li",[t._v("如果是 -Infinity 减 -Infinity，则结果是 NaN；")]),t._v(" "),v("li",[t._v("如果是 Infinity 减 -Infinity，则结果是 Infinity；")]),t._v(" "),v("li",[t._v("如果是 -Infinity 减 Infinity，则结果是 -Infinity；")]),t._v(" "),v("li",[t._v(" 如果是 +0 减 +0，则结果是 +0；")]),t._v(" "),v("li",[t._v("如果是 +0 减 -0，则结果是 -0；")]),t._v(" "),v("li",[t._v("如果是 -0 减 -0，则结果是 +0；")]),t._v(" "),v("li",[t._v("如果有一个操作数是字符串、布尔值、null 或 undefined，则先在后台调用 Number( )函数将其转换为数值，然后再根据前面的规则执行减法计算。如果转换的结果是 NaN，则减法的结果就是 NaN；")]),t._v(" "),v("li",[t._v("如果有一个操作数是对象，则调用对象的 valueOf() 方法以取得表示该对象的数值。如果得到的值是 NaN，则减法的结果就是 NaN。如果对象没有 valueOf() 方法，则调用其 toString() 方法并将得到的字符串转换为数值。")])])])])]),t._v(" "),v("h3",{staticClass:"ml-1",attrs:{id:"JS-04-3"}},[v("Icon",{attrs:{type:"logo-buffer"}}),t._v(" 关系操作符")],1),t._v(" "),v("Divider"),t._v(" "),v("p",[v("ul",{staticClass:"ml-1"},[v("li",[t._v("小于（<） 、大于（>） 、小于等于（<=）和大于等于（>=）这几个关系操作符都返回一个布尔值。\n                    "),v("ul",[v("li",[t._v("如果两个操作数都是数值，则执行数值比较。")]),t._v(" "),v("li",[t._v("如果两个操作数都是字符串，则比较两个字符串对应的字符编码值。")]),t._v(" "),v("li",[t._v("如果一个操作数是数值，则将另一个操作数转换为一个数值，然后执行数值比较。")]),t._v(" "),v("li",[t._v("如果一个操作数是对象，则调用这个对象的 valueOf() 方法，用得到的结果按照前面的规则执行比较。如果对象没有 valueOf() 方法，则调用 toString() 方法，并用得到的结果根据前面的规则执行比较。")]),t._v(" "),v("li",[t._v("如果一个操作数是布尔值，则先将其转换为数值，然后再执行比较。")])])])])]),t._v(" "),v("p",{staticClass:"text-warn"},[t._v("在比较字符串时，实际比较的是两个字符串中对应位置的每个字符的字符编码值。")]),t._v(" "),v("p",[t._v("在 ECMAScript 里所有大写字母的字符编码全部小于小写字母的字符编码。")]),t._v(" "),v("p",[t._v("如果要真正按字母表顺序比较字符串，就必须把两个操作数转换为相同的大小写形式（全部大写或全部小写），然后再执行比较。")]),t._v(" "),v("p",[t._v("按照常理，如果一个值不小于另一个值，则一定是大于或等于那个值。然而，在与 NaN 进行比较时， 这两个比较操作的结果都返回了 false。")]),t._v(" "),v("h3",{staticClass:"ml-1",attrs:{id:"JS-04-4"}},[v("Icon",{attrs:{type:"logo-buffer"}}),t._v(" 相等操作符")],1),t._v(" "),v("Divider"),t._v(" "),v("p",[t._v("ECMAScript中的相等操作符由两个等于号（==）表示，如果两个操作数相等，则返回 true。而不相等操作符由叹号后跟等于号（!=）表示。")]),t._v(" "),v("p",[t._v("这两个操作符都会先转换操作数（通常称为强制转型），然后再比较它们的相等性。")]),t._v(" "),v("p",[v("ul",{staticClass:"ml-1"},[v("li",[t._v("相等和不相等：在转换不同的数据类型时，相等和不相等操作符遵循下列基本规则：\n                    "),v("ul",[v("li",[t._v("如果有一个操作数是布尔值，则在比较相等性之前先将其转换为数值——false 转换为 0，而 true 转换为 1；")]),t._v(" "),v("li",[t._v("如果一个操作数是字符串，另一个操作数是数值，在比较相等性之前先将字符串转换为数值；")]),t._v(" "),v("li",[t._v("如果一个操作数是对象，另一个操作数不是，则调用对象的 valueOf() 方法，用得到的基本类型值按照前面的规则进行比较；")]),t._v(" "),v("li",[t._v("null 和 undefined 是相等的。")]),t._v(" "),v("li",[t._v("要比较相等性之前，不能将 null 和 undefined 转换成其他任何值。")]),t._v(" "),v("li",[t._v("如果有一个操作数是 NaN，则相等操作符返回 false，而不相等操作符返回 true。"),v("span",{staticClass:"text-warn"},[t._v("重要提示：即使两个操作数都是 NaN，相等操作符也返回 false；因为按照规则，NaN 不等于 NaN。")])]),t._v(" "),v("li",[t._v("如果两个操作数都是对象，则比较它们是不是同一个对象。如果两个操作数都指向同一个对象，则相等操作符返回 true；否则，返回 false。")])])])])]),t._v(" "),v("p",[t._v("全等和不全等：与相等和不相等两个操作符相比，它们主要的区别就是在比较之前不会转换操作数。")]),t._v(" "),v("h3",{staticClass:"ml-1",attrs:{id:"JS-04-5"}},[v("Icon",{attrs:{type:"logo-buffer"}}),t._v(" 条件操作符")],1),t._v(" "),v("Divider"),t._v(" "),v("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"ml-2"},[v("code",{staticClass:"js"},[t._v("variable = boolean_expression ? true_value : false_value; ")])]),t._v(" "),v("p",[t._v("基于对 boolean_expression 求值的结果，决定给变量 variable 赋什么值。如果求值结果为 true，则给变量 variable 赋 true_value 值；如果求值结果为 false， 则给变量 variable 赋 false_value 值。")]),t._v(" "),v("h3",{staticClass:"ml-1",attrs:{id:"JS-04-6"}},[v("Icon",{attrs:{type:"logo-buffer"}}),t._v(" 赋值操作符")],1),t._v(" "),v("Divider"),t._v(" "),v("p",[t._v("赋值操作符：简单的赋值操作符由等于号（=）表示。")]),t._v(" "),v("p",[t._v("如果在等于号（=）前面再添加乘性操作符、加性操作符或位操作符，就可以完成复合赋值操作符。")]),t._v(" "),v("p",[v("ul",{staticClass:"ml-1"},[v("li",[t._v("每个主要算术操作符 （以及个别的其他操作符） 都有对应的复合赋值操作符。\n                    "),v("ul",[v("li",[t._v("乘/赋值（*=）；")]),t._v(" "),v("li",[t._v("除/赋值（/=）；")]),t._v(" "),v("li",[t._v("模/赋值（%=）；")]),t._v(" "),v("li",[t._v("加/赋值（+=）；")]),t._v(" "),v("li",[t._v("减/赋值（-=）；")]),t._v(" "),v("li",[t._v("左移/赋值（<<=）；")]),t._v(" "),v("li",[t._v("有符号右移/赋值（>>=）；")]),t._v(" "),v("li",[t._v("无符号右移/赋值（>>>=）。")])])])])]),t._v(" "),v("h3",{staticClass:"ml-1",attrs:{id:"JS-04-7"}},[v("Icon",{attrs:{type:"logo-buffer"}}),t._v(" 逗号操作符")],1),t._v(" "),v("Divider"),t._v(" "),v("p",[t._v("逗号操作符多用于声明多个变量；但除此之外，逗号操作符还可以用于赋值。在用于赋值时，逗号操作符总会返回表达式中的最后一项。")]),t._v(" "),v("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"ml-2"},[v("code",{staticClass:"js"},[t._v("var num = (5, 1, 4, 8, 0); // num 的值为 0 ")])]),t._v(" "),v("p",{staticClass:"text-right"},[t._v("参考资料：JavaScript 高级程序设计（第三版）")]),t._v(" "),v("FooterDivider")],1)])},l=[];n._withStripped=!0,v.d(i,"a",function(){return n}),v.d(i,"b",function(){return l})},451:function(t,i,v){"use strict";var n=v(360);v.n(n).a}}]);