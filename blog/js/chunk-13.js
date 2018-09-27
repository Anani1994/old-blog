(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{306:function(t,e,n){"use strict";n.r(e);var o=n(365),i=n(345);for(var v in i)"default"!==v&&function(t){n.d(e,t,function(){return i[t]})}(v);n(390);var c=n(0),r=Object(c.a)(i.default,o.a,o.b,!1,null,"6914d227",null);r.options.__file="src\\views\\articles\\others\\othMixed\\blog-dev-log.vue",e.default=r.exports},343:function(t,e,n){},344:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{toTop:this.$util.toTop}}}},345:function(t,e,n){"use strict";n.r(e);var o=n(344),i=n.n(o);for(var v in o)"default"!==v&&function(t){n.d(e,t,function(){return o[t]})}(v);e.default=i.a},365:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("BoWen",[n("div",{staticClass:"p-1",attrs:{slot:"catalog"},slot:"catalog"},[n("Steps",{attrs:{direction:"vertical"}},[n("Step",{attrs:{title:"提示",content:"新发布文章的要点",status:"wait"},nativeOn:{click:function(e){t.toTop("#note-tips",30)}}}),t._v(" "),n("Step",{attrs:{title:"尚存的 BUG",content:"现有的缺陷还未被解决"},nativeOn:{click:function(e){t.toTop("#note-buging",30)}}}),t._v(" "),n("Step",{attrs:{title:"解决的 BUG",content:"已经解决的缺陷"},nativeOn:{click:function(e){t.toTop("#note-buged",30)}}}),t._v(" "),n("Step",{attrs:{title:"操作日志",content:"记录一些重要的操作"},nativeOn:{click:function(e){t.toTop("#note-log",30)}}}),t._v(" "),n("Step",{attrs:{title:"分支开发",content:"如何部署在 conding 和 GitHub"},nativeOn:{click:function(e){t.toTop("#note-branch",30)}}})],1)],1),t._v(" "),n("div",{staticClass:"p-1"},[n("div",{staticClass:"py-3 text-center"},[n("h1",[n("Icon",{attrs:{type:"ios-book-outline"}}),t._v(" 博客开发记录")],1),t._v(" "),n("p",{staticClass:"pt-1"},[t._v("记录博客开发中遇到的问题和解决方法等")])]),t._v(" "),n("h3",{attrs:{id:"note-tips"}},[n("Icon",{attrs:{type:"logo-buffer"}}),t._v(" 提示")],1),t._v(" "),n("Divider"),t._v(" "),n("p",[t._v("发布文章时需要在 "),n("code",[t._v("articles.js")]),t._v(" 文件下根据第一条内容写下新建文章的相关信息，并在对应路径下创建文章的组件。")]),t._v(" "),n("p",[t._v("程序会根据所填信息自动创建路由，所以定要确保相关信息与第一条规范相匹配。")]),t._v(" "),n("h3",{attrs:{id:"note-buging"}},[n("Icon",{attrs:{type:"logo-buffer"}}),t._v(" 尚存的 BUG")],1),t._v(" "),n("Divider"),t._v(" "),n("ul",[n("li",[t._v("刷新子组件（文章）后导航栏高亮的元素不正确，会直接高亮首页。")])]),t._v(" "),n("h3",{attrs:{id:"note-buged"}},[n("Icon",{attrs:{type:"logo-buffer"}}),t._v(" 解决的 BUG")],1),t._v(" "),n("Divider"),t._v(" "),n("ul",[n("li",[t._v("从父路由点进子组件(（frontend 及其同级）下的组件)正常渲染，刷新页面后子组件内的内容直接消失，页面地址没变。解决措施：修改子组件的路由中的 path 形如： "),n("pre",{staticClass:"ml-1"},[t._v("articles/others/notes/note-00 => /articles/others/notes/note-00")])])]),t._v(" "),n("h3",{attrs:{id:"note-log"}},[n("Icon",{attrs:{type:"logo-buffer"}}),t._v(" 操作日志")],1),t._v(" "),n("Divider"),t._v(" "),n("ul",[n("li",[t._v("\n                    配置 jQuery\n                    "),n("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[n("code",{staticClass:"js"},[t._v("// 安装\nyarn add jquery\n// 配置 webpack.base.config.js\nconst webpack = require('webpack');\nmodule.exports = {\n    ...\n    plugins: [\n        ...\n        new webpack.ProvidePlugin({\n            $: 'jquery',\n            jQuery: 'jquery',\n            'window.jQuery': 'jquery',\n        })\n        ...\n    ]\n}")])])])]),t._v(" "),n("h3",{attrs:{id:"note-branch"}},[n("Icon",{attrs:{type:"logo-buffer"}}),t._v(" 分支开发")],1),t._v(" "),n("Divider"),t._v(" "),n("p",[t._v("由于在国内访问 "),n("code",[t._v("GitHub")]),t._v(" 较慢，所以决定将博客同时部署在 "),n("code",[t._v("coding.net")]),t._v(" 上，由此有了分支开发的工作。在发布到 "),n("code",[t._v("GitHub")]),t._v(" 上的内容不包括已完成的一些项目，而部署在 "),n("code",[t._v("coding.net")]),t._v(" 上的内容不包括旧的博客。也因在不同的网站上部署，所以在打包时需要有相应的改动，发布到 "),n("code",[t._v("GitHub")]),t._v(" 只需要在原来的基础来检查 "),n("code",[t._v(".gitignore")]),t._v(" 文件是否正确，发布到 "),n("code",[t._v("coding.net")]),t._v(" 具体如下所示。")]),t._v(" "),n("p",[n("code",[t._v("coding")]),t._v(" 分支为部署 "),n("code",[t._v("coding.net")]),t._v(" 诞生，当需要部署到  "),n("code",[t._v("coding.net")]),t._v(" 上时，首要需要在 master 分支 执行 "),n("code",[t._v("yarn run build")]),t._v(" 命令后基于 master 创建并进入一个临时分支。")]),t._v(" "),n("p",[t._v("其次切换分支后需要修改 .gitignore 文件中的忽略的目录（忽略 old-blog，移除对已完成项目的忽略）。")]),t._v(" "),n("p",[t._v("切换到 coding 分支，合并临时分支后删除临时分支")]),t._v(" "),n("p",[n("code",[t._v("coding")]),t._v(" 分支打包："),n("code",[t._v("yarn run buildCoding")])]),t._v(" "),n("p",[t._v("推送 "),n("code",[t._v("coding")]),t._v(" 分支："),n("code",[t._v("git push coding coding:master")])]),t._v(" "),n("FooterDivider")],1)])},i=[];o._withStripped=!0,n.d(e,"a",function(){return o}),n.d(e,"b",function(){return i})},390:function(t,e,n){"use strict";var o=n(343);n.n(o).a}}]);