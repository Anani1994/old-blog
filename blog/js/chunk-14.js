(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{307:function(n,t,e){"use strict";e.r(t);var a=e(371),l=e(345);for(var i in l)"default"!==i&&function(n){e.d(t,n,function(){return l[n]})}(i);var r=e(0),s=Object(r.a)(l.default,a.a,a.b,!1,null,null,null);s.options.__file="src\\views\\articles\\others\\notes\\note-03.vue",t.default=s.exports},344:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{toTop:this.$util.toTop}}}},345:function(n,t,e){"use strict";e.r(t);var a=e(344),l=e.n(a);for(var i in a)"default"!==i&&function(n){e.d(t,n,function(){return a[n]})}(i);t.default=l.a},371:function(n,t,e){"use strict";var a=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("BoWen",[e("div",{staticClass:"p-1",attrs:{slot:"catalog"},slot:"catalog"},[e("Steps",{attrs:{direction:"vertical"}},[e("Step",{attrs:{title:"CSS 引用图片后找不到文件资源的问题",content:"在 Vue 项目中 CSS 引用图片后找不到文件资源的问题",status:"wait"},nativeOn:{click:function(t){n.toTop("#note-031",30)}}}),n._v(" "),e("Step",{attrs:{title:"[vue/no-parsing-error] Parsing error: x-invalid-end-tag.",content:"[vue/no-parsing-error] Parsing error: x-invalid-end-tag.",status:"wait"},nativeOn:{click:function(t){n.toTop("#note-032",30)}}}),n._v(" "),e("Step",{attrs:{title:"VS code 占用 cpu 过高",content:"如何处理 VS code 占用 cpu 过高",status:"wait"},nativeOn:{click:function(t){n.toTop("#note-033",30)}}}),n._v(" "),e("Step",{attrs:{title:"球体链接",content:"JS 实现球体链接",status:"wait"},nativeOn:{click:function(t){n.toTop("#note-034",30)}}}),n._v(" "),e("Step",{attrs:{title:"error: pathspec 'message' did not match any file(s) known to git.",content:"error: pathspec 'message' did not match any file(s) known to git.",status:"wait"},nativeOn:{click:function(t){n.toTop("#note-035",30)}}})],1)],1),n._v(" "),e("div",{staticClass:"pt-3 text-center"},[e("h1",[e("Icon",{attrs:{type:"ios-book-outline"}}),n._v(" 问题收录集（2）")],1),n._v(" "),e("p",{staticClass:"pt-1"},[n._v("收集整理开发路上遇到的各种问题。")])]),n._v(" "),e("div",{staticClass:"markdown-content"},[e("h5",{attrs:{id:"note-031"}},[n._v("CSS 引用图片后找不到文件资源的问题")]),n._v(" "),e("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[e("code",{staticClass:"js"},[n._v("// 显然在 webpack 4 下使用 mini-css-extract-plugin 插件分离 css 后，原先图片的相对引入路径在打包后的位置不再生效，\n// 因为 mini-css-extract-plugin 默认的 publicPath 是在 webpackOptions.output 下设置的，因此我们有时候需要在 rules 中配置合适的。\n// 配置后的 publicPath 会加载设置的图片处理后的输出路径的前面。\n\nmodule.exports = {\n    module: {\n        rules: [\n            {\n                test: /\\.less/,\n                use: [\n                      {\n                        loader: MiniCssExtractPlugin.loader,\n                        options: {\n                              // you can specify a publicPath here\n                              // by default it use publicPath in webpackOptions.output\n                              publicPath: '../../'\n                        }\n                      },\n                  'css-loader',\n                ]\n              },\n              {\n                test: /\\.(jpg|png|gif|svg|jpeg|woff|woff2|eot|ttf|otf)$/,\n                use: [\n                      {\n                        loader: 'url-loader',\n                        options: {\n                              limit: 1024,\n                              name:'dist/images/[name].[hash].[ext]'\n                        }\n                      }\n                ]\n            }\n        ]\n    }\n}\n\n// 在 .vue 中\n.css {\n    background: url(path/to/img);\n}\n\n// 在打包后的 .css 中\n.css {\n    background: url(publicPath/dist/images/img);\n}\n\n// 理解上面显示的打包后的路径参考插件配置时的路径\nnew MiniCssExtractPlugin({\n      // Options similar to the same options in webpackOptions.output\n      // both options are optional\n      filename: \"dist/css/[name].[hash].css\",\n      chunkFilename: \"[id].[hash].css\"\n}),\n")])]),n._v(" "),e("h5",{attrs:{id:"note-032"}},[n._v("[vue/no-parsing-error] Parsing error:\n                x-invalid-end-tag.")]),n._v(" "),e("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[e("code",{staticClass:"js"},[n._v('// vetur 中 eslint 的问题，在 vscode 设置\n"vetur.validation.template": false,\n')])]),n._v(" "),e("h5",{attrs:{id:"note-033"}},[n._v("VS code 占用 cpu 过高")]),n._v(" "),e("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[e("code",{staticClass:"js"},[n._v('// 在 VS code 设置\n// 控制是否在搜索中跟踪符号链接。\n// 修复编辑器内存占用过大的问题\n"search.followSymlinks": false,\n')])]),n._v(" "),e("h5",{attrs:{id:"note-034"}},[n._v("球体链接")]),n._v(" "),e("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[e("code",{staticClass:"html"},[n._v('\x3c!-- html --\x3e\n<div class="link-ball-container">\n    <div class="link-ball">\n        <a href="">somthing</a>\n    </div>\n</div>')])]),n._v(" "),e("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[e("code",{staticClass:"css"},[n._v("/* css */\n.link-ball-container {\n    padding: 100px;\n}\n.link-ball {\n    position: relative;\n    width: 450px;\n    height: 360px;  \n}\n.link-ball a {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0;\n    padding: 4px;\n}")])]),n._v(" "),e("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[e("code",{staticClass:"js"},[n._v("//引入 以下JavaScript\nexport const linkBall = { };\n\nlinkBall.setLinkBall = (parmas ={}) => {\n    let coordinateArr = [];\n    // 焦距\n    let radius = parmas.radius;\n    // 储存各链接的空间位置\n    let focalLength = parmas.focalLength;\n    // 球\n    let ball = document.querySelector('.link-ball');\n    // 球心：(ball.width/2,ball.height/2)\n    let ballCenterX = ball.offsetWidth/2;\n    let ballCenterY = ball.offsetHeight/2;\n    // getBoundingClientRect() 返回元素的大小及其相对于视口的位置\n    let viewportX = ball.getBoundingClientRect().left + ballCenterX;\n    let viewportY = ball.getBoundingClientRect().top + ballCenterY;\n    // 所有链接元素\n    let linkes = document.querySelectorAll('.link-ball a');\n    // 创建一个文档片段保存排序后的结构\n    let temp = linkBall.randomSort(linkes);\n    // 将文档片段附加到DOM树\n    // createDocumentFragment() 创建一个新的空白的文档片段\n    // 文档片段存在于内存中，并不在DOM树中，所以将子元素插入到文档片段时不会引起页面回流\n    let docFrag = document.createDocumentFragment();\n    for(let i = 0; i < temp.length; i++) {\n        docFrag.appendChild( temp[i] );\n    };\n    ball.appendChild(docFrag);\n    // 设置平均坐标\n    linkBall.randomCoordinate(ball,linkes,radius,focalLength,coordinateArr);\n    // 根据鼠标位置动态设置各链接的最新空间位置\n    linkBall.addMousemove(coordinateArr,linkes,radius,ballCenterX,ballCenterY,focalLength,viewportX,viewportY);\n}\n\n// 随机排序\nlinkBall.randomSort = (arr) => {\n    let temp = [];\n    for(let i = 0; i < arr.length; i++) {\n        temp.push( arr[i] );\n    }\n    temp.sort(function(){\n        return Math.random() < 0.5 ? 1 : -1;\n    });\n    return temp;\n};\n\nlinkBall.randomCoordinate = (ball,linkes,radius,focalLength,coordinateArr) => {\n    for(let i = 1; i < linkes.length + 1; i++) {\n        //生成随机 θ\n        let theta = Math.acos((2*i-1)/linkes.length -1);\n        // 生成对应的 Φ\n        let phi = theta * Math.sqrt(linkes.length * Math.PI);\n        // 坐标转换\n        let x = radius * Math.sin(theta) * Math.cos(phi);\n        let y = radius * Math.sin(theta) * Math.sin(phi);\n        let z = radius * Math.cos(theta);\n        let newObj = linkBall.creatObj(linkes[i-1],x,y,z);\n        coordinateArr.push(newObj);\n        // 生成随机颜色\n        linkes[i-1].style.color = '#' + Math.floor(Math.random() * 0xffffff).toString(16);\n        // 设置坐标\n        linkes[i-1].style.left = x + ball.offsetWidth / 2 - linkes[i-1].offsetWidth/2 + \"px\";\n        linkes[i-1].style.top = y + ball.offsetHeight / 2 - linkes[i-1].offsetHeight/2 + \"px\";\n        // 根据 z 形成一递增函数来设置透明度\n        let alpha = (z + radius) / (2 * radius);\n        linkes[i-1].style.opacity = alpha + 0.5;\n        // 根据 z 形成一递增函数来设置\n        let scale = focalLength / (focalLength - z);\n        linkes[i-1].style.fontSize = 14 * scale + \"px\";\n        linkes[i-1].style.zIndex = parseInt(scale * 100);\n    }\n};\n\nlinkBall.addMousemove = (coordinateArr,linkes,radius,ballCenterX,ballCenterY,focalLength,viewportX,viewportY) => {\n    let ele = document.querySelector('.link-ball-container');\n    ele.addEventListener('mousemove',function(event) {\n        let eve = window.enent || event;\n        // if (eve.target.nodeName !== 'SECTION') {\n        //     return;\n        // }\n        if(event.target === this) {\n            let x = eve.clientX - viewportX;\n            let y = eve.clientY - viewportY;\n            let angleX = 0.00005 * x;\n            let angleY = 0.0001 * y;\n            linkBall.rotateX(angleX,coordinateArr);\n            linkBall.rotateY(angleY,coordinateArr);\n            coordinateArr.forEach(function(currVal) {\n                let scale = focalLength/(focalLength - currVal.z);\n                let alpha = (currVal.z + radius)/(2 * radius);\n                currVal.ele.style.fontSize = 15 * scale + \"px\";\n                currVal.ele.style.opacity = alpha + 0.5;\n                currVal.ele.style.zIndex = parseInt(scale*100);\n                currVal.ele.style.left = currVal.x + ballCenterX - currVal.ele.offsetWidth/2 +\"px\";\n                currVal.ele.style.top = currVal.y + ballCenterY - currVal.ele.offsetHeight/2 +\"px\";\n            });\n        };\n    });\n};\n\n// 创建一个对象用来保存各链接的空间坐标，用于后期实现滚动\nlinkBall.creatObj = (ele,x,y,z) => {\n    return {\n        ele : ele,\n        x : x,\n        y : y,\n        z : z,\n    }\n};\n\n// 绕x轴旋转\n// y = ycosθ - zsinθ;\n// z = ysinθ + zcosθ;\nlinkBall.rotateX = (angleX,arr) => {\n    let newY;\n    let newZ;\n    // let  角度的正负值控制旋转方向，大小控制旋转速度\n    let cos = Math.cos(angleX);\n    let sin = Math.sin(angleX);\n    arr.forEach(function(currVal) {\n        newY = currVal.y * cos - currVal.z * sin;\n        newZ = currVal.z * cos + currVal.y * sin;\n        currVal.y = newY;\n        currVal.z = newZ;\n    });\n};\n\n// 绕y轴旋转\n// x = xcosθ - zsinθ;\n// z = xsinθ + zcosθ;\nlinkBall.rotateY = (angleY,arr) => {\n    let newX;\n    let newZ;\n    // angleY 角度的正负值控制旋转方向，大小控制旋转速度\n    let cos = Math.cos(angleY);\n    let sin = Math.sin(angleY);\n    arr.forEach(function(currVal) {\n        newX = currVal.x * cos - currVal.z * sin;\n        newZ = currVal.z * cos + currVal.x * sin;\n        currVal.x = newX;\n        currVal.z = newZ;\n    });\n};\n\n// 然后再页面中通过以下启动，参数是一个包含半径和储存各链接的空间位置的对象\nlinkBall.setLinkBall(parmas);\n")])]),n._v(" "),e("h5",{attrs:{id:"note-035"}},[n._v("error: pathspec 'message' did not match\n                any file(s) known to git.")]),n._v(" "),e("p",[n._v("在 windows 系统使用 控制台提交(git commit -m 'message')报以上错误")]),n._v(" "),e("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[e("code",{staticClass:"js"},[n._v("// 改用 git bash提交\nGit Bash，是git for windows自带的一组程序，提供了Linux风格的shell，在该环境下，您可以直接用上面提到的命令。打开它的方法很简单，在任意位置单击右键，选择“Git Bash Here”即可。\n")])])]),n._v(" "),e("FooterDivider")],1)},l=[];a._withStripped=!0,e.d(t,"a",function(){return a}),e.d(t,"b",function(){return l})}}]);