(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{293:function(t,a,r){"use strict";r.r(a);var e=r(403),o=r(321);for(var l in o)"default"!==l&&function(t){r.d(a,t,function(){return o[t]})}(l);var s=r(0),v=Object(s.a)(o.default,e.a,e.b,!1,null,null,null);v.options.__file="src\\views\\articles\\frontend\\mixed\\note-01-cmder.vue",a.default=v.exports},320:function(t,a,r){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={data:function(){return{toTop:this.$util.toTop}}}},321:function(t,a,r){"use strict";r.r(a);var e=r(320),o=r.n(e);for(var l in e)"default"!==l&&function(t){r.d(a,t,function(){return e[t]})}(l);a.default=o.a},403:function(t,a,r){"use strict";var e=function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("BoWen",[r("div",{staticClass:"p-1",attrs:{slot:"catalog"},slot:"catalog"},[r("Steps",{attrs:{direction:"vertical"}},[r("Step",{attrs:{title:"简介",content:"简略介绍 Cmder 的概念和安装内容",status:"wait"},nativeOn:{click:function(a){t.toTop("#note-01-cmder-des",30)}}}),t._v(" "),r("Step",{attrs:{title:"安装",content:"简介安装的步骤",status:"wait"},nativeOn:{click:function(a){t.toTop("#note-01-cmder-set",30)}}}),t._v(" "),r("Step",{attrs:{title:"设置快捷操作",content:"设置快捷操作，以便使用",status:"wait"},nativeOn:{click:function(a){t.toTop("#note-01-cmder-quick",30)}}}),t._v(" "),r("Step",{attrs:{title:"解决中文乱码",content:"解决输出中文时会乱码",status:"wait"},nativeOn:{click:function(a){t.toTop("#note-01-cmder-lang",30)}}}),t._v(" "),r("Step",{attrs:{title:"修改符号",content:"修改默认显示的符号为美元符号",status:"wait"},nativeOn:{click:function(a){t.toTop("#note-01-cmder-symbol",30)}}}),t._v(" "),r("Step",{attrs:{title:"常用命令",content:"列举开发常用的 Linux 命令",status:"wait"},nativeOn:{click:function(a){t.toTop("#note-01-cmder-order",30)}}})],1)],1),t._v(" "),r("div",{staticClass:"px-1"},[r("div",{staticClass:"py-3 text-center"},[r("h1",[r("Icon",{attrs:{type:"ios-book-outline"}}),t._v(" windows 搭建开发环境之安装使用 Cmder")],1),t._v(" "),r("p",{staticClass:"pt-1"},[t._v("简单介绍安装和使用 Cmder（cmd 替代者）")])]),t._v(" "),r("h3",{staticClass:"ml-1",attrs:{id:"note-01-cmder-des"}},[r("Icon",{attrs:{type:"logo-buffer"}}),t._v(" 简介")],1),t._v(" "),r("Divider"),t._v(" "),r("p",[t._v("众所周知，Windows 的 cmd 非常的丑陋，使用起来极为不便，而且不支持 Linux 命令行的使用，这对于经常使用 Linux 命令行的朋友来说是一个极为糟糕的信息，好在在 Windows 有许多支持 Linux 命令行的工具，而 Cmder 就是其中之一，且极为优秀。")]),t._v(" "),r("p",[t._v("Cmder 可以说是 Windows 下一款非常好用的 cmd 替代品，它不仅好用，而且功能强大，界面美观，非常适合在 Windows 下进行开发时使用。")]),t._v(" "),r("div",{staticClass:"pb-1"},[t._v("系统："),r("Tag",{attrs:{color:"default"}},[t._v("windows 10")]),t._v(" Cmder版本："),r("Tag",{attrs:{color:"default"}},[t._v("v1.3.6")])],1),t._v(" "),r("h3",{staticClass:"ml-1",attrs:{id:"note-01-cmder-set"}},[r("Icon",{attrs:{type:"logo-buffer"}}),t._v(" 安装")],1),t._v(" "),r("Divider"),t._v(" "),r("p",[t._v("Cmder 官网地址："),r("a",{attrs:{href:"http://cmder.net/"}},[t._v("传送门")])]),t._v(" "),r("p",[t._v("进入官网之后，可见在官网有两个版本，分别是 mini 与 full 版；唯一的差别就在于有没有内建 msysgit 工具，这是 Git for Windows 的标准配备；这里我选择的时 full 版本。")]),t._v(" "),r("p",[t._v("点击下载之后，将其解压到你需要放置的位置，由于它是即压即用的存在，所以点击 Cmder.exe 即可运行。")]),t._v(" "),r("h3",{staticClass:"ml-1",attrs:{id:"note-01-cmder-quick"}},[r("Icon",{attrs:{type:"logo-buffer"}}),t._v(" 设置快捷操作")],1),t._v(" "),r("Divider"),t._v(" "),r("ul",{staticClass:"ml-2"},[r("li",{attrs:{"使":""}},[t._v("Win + R 下输入 cmder 生效\n                    "),r("p",[t._v("把 Cmder.exe 存放的目录添加到系统的环境变量中。")])]),t._v(" "),r("li",[t._v("添加 Cmder 到右键菜单\n                    "),r("div",{staticClass:"ml-2 mb-1"},[t._v("以管理员身份运行系统的 cmd，输入 "),r("Tag",{attrs:{color:"default"}},[t._v("Cmder.exe /REGISTER ALL")]),t._v(" 运行。")],1)])]),t._v(" "),r("h3",{staticClass:"ml-1",attrs:{id:"note-01-cmder-lang"}},[r("Icon",{attrs:{type:"logo-buffer"}}),t._v(" 解决中文乱码")],1),t._v(" "),r("Divider"),t._v(" "),r("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[r("code",{staticClass:"js"},[t._v("// Settings->Startup->Environment 添加\nset LANG=zh_CN.UTF-8\nset LC_ALL=zh_CN.utf8")])]),t._v(" "),r("h3",{staticClass:"ml-1",attrs:{id:"note-01-cmder-symbol"}},[r("Icon",{attrs:{type:"logo-buffer"}}),t._v(" 修改符号")],1),t._v(" "),r("Divider"),t._v(" "),r("p",[t._v("在 vendor/clink.lua 注释如下所示的第一行，并添加第二行，就可以将默认的符号改为美元符号。")]),t._v(" "),r("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[r("code",{staticClass:"lua"},[t._v('-- local cmder_prompt = "\\x1b[1;32;40m{cwd} {git}{hg}{svn} \\n\\x1b[1;39;40m{lamb} \\x1b[0m"\nlocal cmder_prompt = "\\x1b[1;32;40m{cwd} {git}{hg}{svn} \\n\\x1b[1;37;40m$ \\x1b[0m"')])]),t._v(" "),r("h3",{staticClass:"ml-1",attrs:{id:"note-01-cmder-order"}},[r("Icon",{attrs:{type:"logo-buffer"}}),t._v(" 常用命令")],1),t._v(" "),r("Divider"),t._v(" "),r("h4",{staticClass:"ml-2"},[t._v("系统信息")]),t._v(" "),r("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[r("code",{staticClass:"md"},[r("Tag",{attrs:{color:"default"}},[t._v("arch")]),t._v(" 显示机器的处理器架构(1) \n"),r("Tag",{attrs:{color:"default"}},[t._v("uname -r")]),t._v(" 显示正在使用的内核版本 \n"),r("Tag",{attrs:{color:"default"}},[t._v("uname -m")]),t._v(" 显示机器的处理器架构(2) \n"),r("Tag",{attrs:{color:"default"}},[t._v("dmidecode -q")]),t._v(" 显示硬件系统部件 - (SMBIOS / DMI) \n"),r("Tag",{attrs:{color:"default"}},[t._v("hdparm -i /dev/hda")]),t._v(" 罗列一个磁盘的架构特性 \n"),r("Tag",{attrs:{color:"default"}},[t._v("hdparm -tT /dev/sda")]),t._v(" 在磁盘上执行测试性读取操作 \n"),r("Tag",{attrs:{color:"default"}},[t._v("cat /proc/cpuinfo")]),t._v(" 显示CPU info的信息 \n"),r("Tag",{attrs:{color:"default"}},[t._v("cat /proc/interrupts")]),t._v(" 显示中断 \n"),r("Tag",{attrs:{color:"default"}},[t._v("cat /proc/meminfo")]),t._v(" 校验内存使用 \n"),r("Tag",{attrs:{color:"default"}},[t._v("cat /proc/swaps")]),t._v(" 显示哪些swap被使用 \n"),r("Tag",{attrs:{color:"default"}},[t._v("cat /proc/version")]),t._v(" 显示内核的版本 \n"),r("Tag",{attrs:{color:"default"}},[t._v("cat /proc/net/dev")]),t._v(" 显示网络适配器及统计 \n"),r("Tag",{attrs:{color:"default"}},[t._v("cat /proc/mounts")]),t._v(" 显示已加载的文件系统 \n"),r("Tag",{attrs:{color:"default"}},[t._v("lspci -tv")]),t._v(" 罗列 PCI 设备 \n"),r("Tag",{attrs:{color:"default"}},[t._v("lsusb -tv")]),t._v(" 显示 USB 设备 \n"),r("Tag",{attrs:{color:"default"}},[t._v("date")]),t._v(" 显示系统日期 \n"),r("Tag",{attrs:{color:"default"}},[t._v("cal 2007")]),t._v(" 显示2007年的日历表 \n"),r("Tag",{attrs:{color:"default"}},[t._v("date 041217002007.00")]),t._v(" 设置日期和时间 - 月日时分年.秒 \n"),r("Tag",{attrs:{color:"default"}},[t._v("clock -w")]),t._v(" 将时间修改保存到 BIOS ")],1)]),t._v(" "),r("h4",{staticClass:"ml-2"},[t._v("文件和目录操作")]),t._v(" "),r("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[r("code",{staticClass:"md"},[r("Tag",{attrs:{color:"default"}},[t._v("cd /home")]),t._v(" 进入 '/ home' 目录' \n"),r("Tag",{attrs:{color:"default"}},[t._v("cd ..")]),t._v(" 返回上一级目录 \n"),r("Tag",{attrs:{color:"default"}},[t._v("cd ../..")]),t._v(" 返回上两级目录 \n"),r("Tag",{attrs:{color:"default"}},[t._v("cd")]),t._v(" 进入个人的主目录 \n"),r("Tag",{attrs:{color:"default"}},[t._v("cd ~user1")]),t._v(" 进入个人的主目录 \n"),r("Tag",{attrs:{color:"default"}},[t._v("cd -")]),t._v(" 返回上次所在的目录 \n"),r("Tag",{attrs:{color:"default"}},[t._v("pwd")]),t._v(" 显示工作路径 \n"),r("Tag",{attrs:{color:"default"}},[t._v("ls")]),t._v(" 查看目录中的文件 \n"),r("Tag",{attrs:{color:"default"}},[t._v("ls -F")]),t._v(" 查看目录中的文件 \n"),r("Tag",{attrs:{color:"default"}},[t._v("ls -l")]),t._v(" 显示文件和目录的详细资料 \n"),r("Tag",{attrs:{color:"default"}},[t._v("ls -a")]),t._v(" 显示隐藏文件 \n"),r("Tag",{attrs:{color:"default"}},[t._v("ls *[0-9]*")]),t._v(" 显示包含数字的文件名和目录名 \n"),r("Tag",{attrs:{color:"default"}},[t._v("tree")]),t._v(" 显示文件和目录由根目录开始的树形结构(1) \n"),r("Tag",{attrs:{color:"default"}},[t._v("lstree")]),t._v(" 显示文件和目录由根目录开始的树形结构(2) \n"),r("Tag",{attrs:{color:"default"}},[t._v("mkdir dir1")]),t._v(" 创建一个叫做 'dir1' 的目录' \n"),r("Tag",{attrs:{color:"default"}},[t._v("mkdir dir1 dir2")]),t._v(" 同时创建两个目录 \n"),r("Tag",{attrs:{color:"default"}},[t._v("mkdir -p /tmp/dir1/dir2")]),t._v(" 创建一个目录树 \n"),r("Tag",{attrs:{color:"default"}},[t._v("rm -f file1")]),t._v(" 删除一个叫做 'file1' 的文件' \n"),r("Tag",{attrs:{color:"default"}},[t._v("rmdir dir1")]),t._v(" 删除一个叫做 'dir1' 的目录' \n"),r("Tag",{attrs:{color:"default"}},[t._v("rm -rf dir1")]),t._v(" 删除一个叫做 'dir1' 的目录并同时删除其内容 \n"),r("Tag",{attrs:{color:"default"}},[t._v("rm -rf dir1 dir2")]),t._v(" 同时删除两个目录及它们的内容 \n"),r("Tag",{attrs:{color:"default"}},[t._v("mv dir1 new_dir")]),t._v(" 重命名/移动 一个目录 \n"),r("Tag",{attrs:{color:"default"}},[t._v("cp file1 file2")]),t._v(" 复制一个文件 \n"),r("Tag",{attrs:{color:"default"}},[t._v("cp dir/* .")]),t._v(" 复制一个目录下的所有文件到当前工作目录 \n"),r("Tag",{attrs:{color:"default"}},[t._v("cp -a /tmp/dir1 .")]),t._v(" 复制一个目录到当前工作目录 \n"),r("Tag",{attrs:{color:"default"}},[t._v("cp -a dir1 dir2")]),t._v(" 复制一个目录 \n"),r("Tag",{attrs:{color:"default"}},[t._v("ln -s file1 lnk1")]),t._v(" 创建一个指向文件或目录的软链接 \n"),r("Tag",{attrs:{color:"default"}},[t._v("ln file1 lnk1")]),t._v(" 创建一个指向文件或目录的物理链接 \n"),r("Tag",{attrs:{color:"default"}},[t._v("touch -t 0712250000 file1")]),t._v(" 修改一个文件或目录的时间戳 - (YYMMDDhhmm) \n"),r("Tag",{attrs:{color:"default"}},[t._v("iconv -l")]),t._v(" 列出已知的编码")],1)]),t._v(" "),r("h4",{staticClass:"ml-2"},[t._v("文件搜索")]),t._v(" "),r("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[r("code",{staticClass:"md"},[r("Tag",{attrs:{color:"default"}},[t._v("find / -name file1")]),t._v(" 从 '/' 开始进入根文件系统搜索文件和目录 \n"),r("Tag",{attrs:{color:"default"}},[t._v("find / -user user1")]),t._v(" 搜索属于用户 'user1' 的文件和目录 \n"),r("Tag",{attrs:{color:"default"}},[t._v("find /home/user1 -name \\*.bin")]),t._v(" 在目录 '/ home/user1' 中搜索带有'.bin' 结尾的文件 \n"),r("Tag",{attrs:{color:"default"}},[t._v("find /usr/bin -type f -atime +100")]),t._v(" 搜索在过去100天内未被使用过的执行文件 \n"),r("Tag",{attrs:{color:"default"}},[t._v("find /usr/bin -type f -mtime -10")]),t._v(" 搜索在10天内被创建或者修改过的文件 \n"),r("Tag",{attrs:{color:"default"}},[t._v("find / -xdev -name \\*.rpm 搜索以 '.rpm'")]),t._v(" 结尾的文件，忽略光驱、捷盘等可移动设备 \n"),r("Tag",{attrs:{color:"default"}},[t._v("locate \\*.ps 寻找以 '.ps'")]),t._v(" 结尾的文件 - 先运行 'updatedb' 命令 \n"),r("Tag",{attrs:{color:"default"}},[t._v("whereis halt")]),t._v(" 显示一个二进制文件、源码或man的位置 \n"),r("Tag",{attrs:{color:"default"}},[t._v("which halt")]),t._v(" 显示一个二进制文件或可执行文件的完整路径 ")],1)]),t._v(" "),r("h4",{staticClass:"ml-2"},[t._v("系统关闭")]),t._v(" "),r("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[r("code",{staticClass:"md"},[r("Tag",{attrs:{color:"default"}},[t._v("shutdown -h now")]),t._v(" 关闭系统(1) \n"),r("Tag",{attrs:{color:"default"}},[t._v("init 0")]),t._v(" 关闭系统(2) \n"),r("Tag",{attrs:{color:"default"}},[t._v("telinit 0")]),t._v(" 关闭系统(3) \n"),r("Tag",{attrs:{color:"default"}},[t._v("shutdown -h hours:minutes &")]),t._v(" 按预定时间关闭系统 \n"),r("Tag",{attrs:{color:"default"}},[t._v("shutdown -c")]),t._v(" 取消按预定时间关闭系统 \n"),r("Tag",{attrs:{color:"default"}},[t._v("shutdown -r now")]),t._v(" 重启(1) \n"),r("Tag",{attrs:{color:"default"}},[t._v("reboot")]),t._v(" 重启(2) \n"),r("Tag",{attrs:{color:"default"}},[t._v("logout")]),t._v(" 注销 ")],1)]),t._v(" "),r("p",{staticClass:"text-warn"},[t._v("以上列举的常用命令并没有一一尝试，所以可能有的命令会无效，可作为日常使用过程中的参考模板。")]),t._v(" "),r("FooterDivider")],1)])},o=[];e._withStripped=!0,r.d(a,"a",function(){return e}),r.d(a,"b",function(){return o})}}]);