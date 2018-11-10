(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{333:function(t,e,s){"use strict";s.r(e);var i=s(456),r=s(434);for(var a in r)"default"!==a&&function(t){s.d(e,t,function(){return r[t]})}(a);var g=s(0),o=Object(g.a)(r.default,i.a,i.b,!1,null,null,null);o.options.__file="src\\views\\articles\\others\\Git\\command\\git-add.vue",e.default=o.exports},429:function(t,e,s){t.exports=s.p+"blog/images/img-note-01.dimensions-offset.png"},430:function(t,e,s){t.exports=s.p+"blog/images/img-require-shim.png"},431:function(t,e,s){t.exports=s.p+"blog/images/img-require-define.png"},432:function(t,e,s){t.exports=s.p+"blog/images/img-css-grid-useable.png"},433:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(t){return t&&t.__esModule?t:{default:t}}(s(2));e.default={data:function(){var t=this;return{columns:[{title:"参数",key:"arg",maxWidth:125},{title:"简写",key:"shortName",maxWidth:125},{title:"使用方式",key:"useStyle"},{title:"说明",key:"des"},{title:"实例",key:"example",align:"center",maxWidth:125,render:function(e,s){return e("i-button",{props:{type:"info",disabled:s.row.prohibitClick},nativeOn:{click:function(){t.showExampleModal(s)}}},["查看实例"])}}],data:[{arg:"<pathspec>",shortName:"无",useStyle:"git add <pathspec>",des:"添加所有匹配的文件到暂存区",prohibitClick:!1,detailDes:[{src:"assets/images/acticles/others/git/step-1-1",text:""}]},{arg:"--dry-run",shortName:"-n",useStyle:"git add -n <...ortherArgArr>",des:"显示命令将会产生的效果，不会实际的添加文件。",prohibitClick:!1,detailDes:[{src:"assets/images/acticles/others/git/arg-n",text:""}]},{arg:"--verbose",shortName:"-v",useStyle:"git add -v <...ortherArgArr>",des:"显示此命令产生的效果，会实际的添加文件。",prohibitClick:!1,detailDes:[{src:"assets/images/acticles/others/git/arg-v",text:""}]},{arg:"--force",shortName:"-f",useStyle:"git add -f <...ortherArgArr>",des:"允许添加被忽略的文件。",prohibitClick:!1,detailDes:[{src:"assets/images/acticles/others/git/arg-f",text:""}]},{arg:"--interactive",shortName:"-i",useStyle:"git add -i <...ortherArgArr>",des:"将工作树中的修改内容以交互方式添加到索引中。",prohibitClick:!1,detailDes:[{src:"assets/images/acticles/others/git/arg-i",text:""}]},{arg:"--patch",shortName:"-p",useStyle:"git add -p <...ortherArgArr>",des:"将工作树中的修改内容以交互方式添加到索引中，并且有机会在将修改后的内容添加到索引之前查看差异。",prohibitClick:!1,detailDes:[{src:"assets/images/acticles/others/git/arg-p-0",text:"<p>使用该参数时，在没有差异的情况下，不会进入交互模式（未跟踪的文件会被忽略），所以我们先把一些文件添加到暂存区，然后进行一点修改：</p>"},{src:"assets/images/acticles/others/git/arg-p-1",text:"<p>操作后的状态：</p>"}]},{arg:"--edit",shortName:"-e",useStyle:"git add -e <...ortherArgArr>",des:"在编辑器中打开 diff 与索引，让用户编辑它。",prohibitClick:!0,detailDes:[]},{arg:"--update",shortName:"-u",useStyle:"git add -u <...ortherArgArr>",des:"更新与 pathspec 参数的匹配项，可以删除索引条目，也可以修改索引条目以匹配工作树，但不添加新文件。如果当使用 -u 选项时没有给出 pathspec，则更新整个工作树中的所有跟踪文件（旧版本Git用于将更新限制到当前目录及其子目录）。",prohibitClick:!1,detailDes:[{src:"assets/images/acticles/others/git/arg-u",text:""}]},{arg:"--no-ignore-removal",shortName:"-A/--all",useStyle:"git add -A <...ortherArgArr>",des:"提交所有变化。",prohibitClick:!1,detailDes:[{src:"",text:"就像是共同执行 git add . 和 git add -u 的结果。如果当使用 -a 选项时没有给出 pathspec，则更新整个工作树中的所有跟踪文件（旧版本Git用于将更新限制到当前目录及其子目录）。"}]},{arg:"--ignore-removal",shortName:"--no-all",useStyle:"git add --no-all <...ortherArgArr>",des:"该参数主要是在旧版本中用来忽略删除的文件，也就是说 git add <pathspec> 与 git add <pathspec> --no-all 的效果一样。",prohibitClick:!0,detailDes:[]},{arg:"--intent-to-add",shortName:"-N",useStyle:"git add -N <...ortherArgArr>",des:"只记录稍后将添加路径的事实。路径的条目被放置在没有内容的索引中。",prohibitClick:!0,detailDes:[]},{arg:"--refresh",shortName:"无",useStyle:"git add --refresh <...ortherArgArr>",des:"不要添加文件，而只刷新索引中的状态信息。",prohibitClick:!0,detailDes:[]},{arg:"--ignore-errors",shortName:"无",useStyle:"git add --ignore-errors <...ortherArgArr>",des:"如果某些文件由于索引错误而无法添加，则不要中止操作，而是继续添加其他文件。命令仍然以非零状态退出。配置变量 add.ignoreErrors 设置为 true 可以使其成为默认行为。",prohibitClick:!0,detailDes:[]},{arg:"--ignore-missing",shortName:"无",useStyle:"git add --dry-run --ignore-missing <...ortherArgArr>",des:"该参数只能与参数“--dry-run”一起使用。通过使用这个选项，用户可以检查是否忽略任何给定的文件，无论它们是否已经存在于工作树中。",prohibitClick:!0,detailDes:[]},{arg:"--chmod=(+|-)x",shortName:"无",useStyle:"尚且不明",des:"重写添加文件的可执行位。可执行位只在索引中更改，磁盘上的文件保持不变。",prohibitClick:!0,detailDes:[]},{arg:"--",shortName:"无",useStyle:"git add -- <fileName>",des:"将命令行选项与文件列表分离（当文件名可能被误认为是命令行选项时很有用）。",prohibitClick:!1,detailDes:[{src:"assets/images/acticles/others/git/arg---",text:""}]},{arg:"--no-warn-embedded-repo",shortName:"无",useStyle:"git add --no-warn-embedded-repo <fileName>",des:"默认情况下, git add 向嵌入式存储库添加索引时会发出警告, 而不用 git submodule add 其中创建条目 .gitmodules。该选项将会禁止警告。",prohibitClick:!0,detailDes:[]},{arg:"--renormalize",shortName:"无",useStyle:"git add --renormalize <fileName>",des:"将“干净”的过程应用到所有被跟踪的文件，以强制再次添加到索引中。",prohibitClick:!0,detailDes:[]},{arg:"-h",shortName:"无",useStyle:"git add -h <fileName>",des:"帮助信息：显示对 git add 的参数的描述。",prohibitClick:!1,detailDes:[{src:"assets/images/acticles/others/git/arg-h",text:""}]}]}},methods:{showExampleModal:function(t){var e="暂无实例。";t.row.detailDes.length&&(e="",t.row.detailDes.forEach(function(t){if(""!==t.text&""!==t.src){var i=s(436)("./"+t.src+".png");e=e+"<div>"+t.text+'</div><img src="'+i+'"/>'}if(""!==t.text&""===t.src&&(e=e+"<div>"+t.text+"</div>"),""!==t.src&""===t.text){var r=s(436)("./"+t.src+".png");e=e+'<img src="'+r+'"/>'}}));var r={title:i.default.removeSymbol(t.row.arg,["<",">"]),width:768,content:e};this.$Modal.info(r)}}}},434:function(t,e,s){"use strict";s.r(e);var i=s(433),r=s.n(i);for(var a in i)"default"!==a&&function(t){s.d(e,t,function(){return i[t]})}(a);e.default=r.a},436:function(t,e,s){var i={"./assets/images/acticles/frontend/css/css-grid-useable.png":432,"./assets/images/acticles/frontend/js/require-define.png":431,"./assets/images/acticles/frontend/js/require-shim.png":430,"./assets/images/acticles/others/git/arg---.png":535,"./assets/images/acticles/others/git/arg-f.png":534,"./assets/images/acticles/others/git/arg-h.png":533,"./assets/images/acticles/others/git/arg-i.png":532,"./assets/images/acticles/others/git/arg-n.png":437,"./assets/images/acticles/others/git/arg-p-0.png":531,"./assets/images/acticles/others/git/arg-p-1.png":530,"./assets/images/acticles/others/git/arg-u.png":529,"./assets/images/acticles/others/git/arg-v.png":528,"./assets/images/acticles/others/git/dir-0.png":445,"./assets/images/acticles/others/git/dir-1.png":441,"./assets/images/acticles/others/git/gitignore-0.png":440,"./assets/images/acticles/others/git/step-0-0.png":444,"./assets/images/acticles/others/git/step-0-1.png":443,"./assets/images/acticles/others/git/step-0-2.png":442,"./assets/images/acticles/others/git/step-1-0.png":439,"./assets/images/acticles/others/git/step-1-1.png":438,"./assets/images/acticles/others/notes/note-01.dimensions-offset.png":429};function r(t){var e=a(t);return s(e)}function a(t){var e=i[t];if(!(e+1)){var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}return e}r.keys=function(){return Object.keys(i)},r.resolve=a,t.exports=r,r.id=436},437:function(t,e,s){t.exports=s.p+"blog/images/img-arg-n.png"},438:function(t,e,s){t.exports=s.p+"blog/images/img-step-1-1.png"},439:function(t,e,s){t.exports=s.p+"blog/images/img-step-1-0.png"},440:function(t,e,s){t.exports=s.p+"blog/images/img-gitignore-0.png"},441:function(t,e,s){t.exports=s.p+"blog/images/img-dir-1.png"},442:function(t,e,s){t.exports=s.p+"blog/images/img-step-0-2.png"},443:function(t,e,s){t.exports=s.p+"blog/images/img-step-0-1.png"},444:function(t,e,s){t.exports=s.p+"blog/images/img-step-0-0.png"},445:function(t,e,s){t.exports=s.p+"blog/images/img-dir-0.png"},456:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"command-articles"},[s("h1",[t._v("GIT ADD")]),s("p",[t._v("开始跟踪新文件，或者把已跟踪的文件放到暂存区，还能用于合并时把有冲突的文件标记为已解决状态等")]),s("Divider"),s("h3",[s("Icon",{attrs:{type:"logo-buffer"}}),t._v(" 基本用途")],1),s("p",[t._v("保存工作树内容的快照，并将此快照作为下一次提交的内容。")]),s("p",[t._v("默认情况下，该命令不会添加被忽略的文件。")]),s("p",[t._v("在解决合并时把有冲突的文件标记为已解决状态。")]),s("h3",[s("Icon",{attrs:{type:"logo-buffer"}}),t._v(" 常用参数")],1),t._m(0),s("h3",[s("Icon",{attrs:{type:"logo-buffer"}}),t._v(" 参数汇总")],1),s("p",[t._v("实例中的显示的效果是在上述 2-2 步的初始状态下进行的。")]),s("Table",{attrs:{columns:t.columns,data:t.data}}),s("FooterDivider")],1)},r=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",[i("li",[i("strong",{staticClass:"text-success"},[t._v("<pathspec>")]),i("span",{staticClass:"des-text"}),i("span",[t._v("添加所有匹配的文件，语法可以参考 ")]),i("a",{attrs:{href:"file:///E:/tool/cmder/vendor/git-for-windows/mingw64/share/doc/git-doc/gitglossary.html"}},[t._v("gitglossary ")]),t._v("中的 pathspec 条目。"),i("ul",[i("li",[t._v("这里我们以 "),i("pre",{staticClass:"custom-pre"},[t._v("git add <pathspec>")]),t._v("为例。"),i("p",[t._v("1、最初的目录结构：")]),i("img",{staticClass:"d-block mb-1",attrs:{src:s(445),alt:"文件目录"}}),i("p",[t._v("2、初始的状态：")]),i("img",{staticClass:"d-block mb-1",attrs:{src:s(444),alt:"状态"}}),i("p",[t._v("3、执行上述命令后的状态：")]),i("img",{staticClass:"d-block mb-1",attrs:{src:s(443),alt:"状态"}})]),i("li",[t._v("另外我们经常使用到的有 "),i("pre",{staticClass:"custom-pre"},[t._v("git add .")]),t._v(" 添加所有文件(同样不包含被忽略的文件)，"),i("span",{staticClass:"text-warn"},[t._v("并且不包括被删除的文件。")]),i("p",[t._v("基于上面第二步执行后的状态为：")]),i("img",{staticClass:"d-block mb-1",attrs:{src:s(442),alt:"状态"}})]),i("li",[t._v("为了说明默认情况下不会添加被忽略的文件，因此我们来创建一个"),i("code",[t._v(".gitignore 文件。")]),i("p",[t._v("2-1、新的文件目录如下：")]),i("img",{staticClass:"d-block mb-1",attrs:{src:s(441),alt:"文件目录"}}),i("p",[t._v("其中"),i("code",[t._v(".gitnore 文件的内容为：")])]),i("img",{staticClass:"d-block mb-1",staticStyle:{height:"50px"},attrs:{src:s(440),alt:"文件目录"}}),i("p",[t._v("2-2、初始状态为：")]),i("img",{staticClass:"d-block mb-1",attrs:{src:s(439),alt:"文件目录"}}),i("p",[t._v("2-3、执行上述命令后的状态：")]),i("img",{staticClass:"d-block mb-1",attrs:{src:s(438),alt:"文件目录"}}),i("p",[t._v("可见在"),i("code",[t._v(" .gitignore 文件中指定需要被忽略的 ")]),i("code",[t._v("1.md ")]),t._v("文件没有被添加到索引中。")])])])]),i("li",[i("strong",{staticClass:"text-success"},[t._v("--dry-run(-n)")]),i("span",{staticClass:"des-text"}),i("span",[t._v("使用此参数不会实际添加文件，只显示没有这个参数时，命令会产生的效果。")]),i("ul",[i("li",[t._v("我们基于上面 2-2 步 执行命令："),i("pre",{staticClass:"custom-pre"},[t._v("git add --dry-run .")]),i("img",{staticClass:"d-block mt-1 mb-1",attrs:{src:s(437),alt:"文件目录"}}),i("p",[t._v("可见文件并没有添加到暂存区，自是显示了 "),i("pre",{staticClass:"custom-pre"},[t._v("git add .")]),t._v(" 命令会产生的效果，括号中的内容是该参数的简写，产生的效果是完全一样的。")])])])])])}];i._withStripped=!0,s.d(e,"a",function(){return i}),s.d(e,"b",function(){return r})},528:function(t,e,s){t.exports=s.p+"blog/images/img-arg-v.png"},529:function(t,e,s){t.exports=s.p+"blog/images/img-arg-u.png"},530:function(t,e,s){t.exports=s.p+"blog/images/img-arg-p-1.png"},531:function(t,e,s){t.exports=s.p+"blog/images/img-arg-p-0.png"},532:function(t,e,s){t.exports=s.p+"blog/images/img-arg-i.png"},533:function(t,e,s){t.exports=s.p+"blog/images/img-arg-h.png"},534:function(t,e,s){t.exports=s.p+"blog/images/img-arg-f.png"},535:function(t,e,s){t.exports=s.p+"blog/images/img-arg---.png"}}]);