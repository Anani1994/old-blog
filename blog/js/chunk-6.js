(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{299:function(t,e,a){"use strict";a.r(e);var n=a(428),i=a(347);for(var l in i)"default"!==l&&function(t){a.d(e,t,function(){return i[t]})}(l);var o=a(0),s=Object(o.a)(i.default,n.a,n.b,!1,null,null,null);s.options.__file="src\\views\\articles\\frontend\\AngularJS\\angular-radio.vue",e.default=s.exports},346:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{toTop:this.$util.toTop}}}},347:function(t,e,a){"use strict";a.r(e);var n=a(346),i=a.n(n);for(var l in n)"default"!==l&&function(t){a.d(e,t,function(){return n[t]})}(l);e.default=i.a},428:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("BoWen",[a("div",{staticClass:"p-1",attrs:{slot:"catalog"},slot:"catalog"},[a("Steps",{attrs:{direction:"vertical"}},[a("Step",{attrs:{title:"常规的获取方式",content:"常规的获取方式",status:"wait"},nativeOn:{click:function(e){t.toTop("#angular-radio-1",30)}}}),a("Step",{attrs:{title:"jQuery 的获取方式",content:"jQuery 的获取方式",status:"wait"},nativeOn:{click:function(e){t.toTop("#angular-radio-2",30)}}}),a("Step",{attrs:{title:"Angular 的获取方式",content:"Angular 的获取方式",status:"wait"},nativeOn:{click:function(e){t.toTop("#angular-radio-3",30)}}})],1)],1),a("div",{staticClass:"px-1"},[a("div",{staticClass:"py-3 text-center"},[a("h1",[a("Icon",{attrs:{type:"ios-book-outline"}}),t._v(" AngularJS 获取 radio 选中的值")],1),a("p",{staticClass:"pt-1"},[t._v("AngularJS 获取 实时获取被选中的 radio 的值")])]),a("h3",{staticClass:"ml-1",attrs:{id:"angular-radio-1"}},[a("Icon",{attrs:{type:"logo-buffer"}}),t._v(" 常规的获取方式")],1),a("Divider"),a("p",[t._v("原生js 获取 radio 选中的值的核心思想就是遍历所有的单选按钮，检测是否被选中，当某个单选按钮选中的时候，将它对应的值传递给我们赋值的参数，然后退出遍历循环。")]),a("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"ml-2"},[a("code",{staticClass:"html"},[t._v('<label> \n    <input type="radio" name="sex" value="male" checked="checked">男\n</label>\n<label>\n    <input type="radio" name="sex" value="female">女\n</label>\n<p>\n    <button onclick="logValue()">打印</button>\n</p>')])]),a("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"ml-2"},[a("code",{staticClass:"js"},[t._v("// 核心函数 \nfunction getCheckedRadioValue (radioName) {\n    let radios = document.getElementsByName(radioName);\n    if (radios.length) {\n        for (let i = 0; i < radios.length; i++) {\n            if (radios[i].checked) {\n                return radios[i].value;\n            }\n        }\n    } else {\n        return undefined;\n    }\n}\n// 测试函数\nfunction logValue() {\n    console.log(getCheckedRadioValue('sex'))\n}")])]),a("h3",{staticClass:"ml-1",attrs:{id:"angular-radio-2"}},[a("Icon",{attrs:{type:"logo-buffer"}}),t._v(" jQuery 的获取方式")],1),a("Divider"),a("p",[t._v("jQuery 获取 radio 选中的值的方式有多种，比如：")]),a("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"ml-2"},[a("code",{staticClass:"html"},[t._v('<label> \n    <input type="radio" name="phone" value="huawei" checked="checked">华>\n</label>\n<label>\n    <input type="radio" name="phone" value="xiaomi">小>\n</label>\n<p>\n    <button onclick="logValue()">打印</button>\n</p>')])]),a("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"ml-2"},[a("code",{staticClass:"js"},[t._v("function logValue() { \n    console.log($('input:radio[name=\"phone\"]:checked').val());\n    console.log($('input:radio:checked').val());\n    console.log($(\"input[type='radio']:checked\").val());\n    console.log($(\"input[name='phone']:checked\").val());\n}")])]),a("p",[t._v("另外其中的 .val() 也可以换作 .attr('value')。")]),a("h3",{staticClass:"ml-1",attrs:{id:"angular-radio-3"}},[a("Icon",{attrs:{type:"logo-buffer"}}),t._v(" Angular 的获取方式")],1),a("Divider"),a("p",[t._v("第一种使用方式：")]),a("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"ml-2"},[a("code",{staticClass:"pug"},[t._v('// pug 文件 \ndiv(ng-app="app", ng-controller="appCon")\n    input(type="radio", name="fruit", value="apple", ng-model="testValue")/ apple\n    input(type="radio", name="fruit", value="banana", ng-model="testValue")/ banana\n    input(type="text", name="result1", ng-model="testValue")/')])]),a("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"ml-2"},[a("code",{staticClass:"js"},[t._v("var App = angular.module('app', []); \nApp.controller('appCon', ['$scope', function ($scope) {\n    $scope.testValue = \"banana\";\n}]);")])]),a("p",[t._v("使用 ng-model 把 radio 绑到一个变量上，ng-value 使用表达式来表示值。选中时它的值就是 ng-value 的值了。")]),a("p",[t._v("第二种使用方式：")]),a("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"ml-2"},[a("code",{staticClass:"pug"},[t._v('// pug 文件,为避免在文中读取 { {fruit} } 报错，所以多添加了两个花括号之间的空格，实际中应去掉\ndiv(ng-app="app", ng-controller="appCon")\n    form(name="testForm")\n        label(ng-repeat="fruit in fruits", for="{ {fruit} }") { {fruit} }\n            input(type="radio", name="fruit", ng-value="fruit", ng-model="test.testValue2", id="{ {fruit} }")/\n            input(type="text", name="result2", ng-model="test.testValue2")/')])]),a("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"ml-2"},[a("code",{staticClass:"js"},[t._v("var App = angular.module('app', []); \nApp.controller('appCon', ['$scope', function ($scope) {\n    // 为何此处只能为对象？\n    $scope.test = {\n        testValue2: \"banana\"\n    };\n    $scope.fruits = ['apple', 'banana'];\n}]);")])]),a("p",[t._v("第三种使用方式：")]),a("p",[t._v("在第二种方式的基础上，我们可以在 .pug 中通过 "),a("pre",{staticClass:"custom-pre"},[t._v("testForm.fruit.$modelValue")]),t._v(" 或 "),a("pre",{staticClass:"custom-pre"},[t._v("testForm.fruit.$viewValue")]),t._v(" 来获取选中的值。")]),a("p",[t._v("其中 testForm 为 form 元素的 name 属性的值，fruit 为 input 元素 name 属性的值。")]),a("p",{staticClass:"text-info"},[t._v("在单选框中 ng-model 绑定输出的是 value 属性的值。")]),a("p",{staticClass:"text-info"},[t._v("将 value 改为 ng-value 时，绑定的表达式必须是对象，不知为何？")]),a("FooterDivider")],1)])},i=[];n._withStripped=!0,a.d(e,"a",function(){return n}),a.d(e,"b",function(){return i})}}]);