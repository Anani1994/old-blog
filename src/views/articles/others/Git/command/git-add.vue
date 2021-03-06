<template lang="pug">
    .command-articles
        h1 GIT ADD
        p 开始跟踪新文件，或者把已跟踪的文件放到暂存区，还能用于合并时把有冲突的文件标记为已解决状态等
        Divider
        h3
            Icon(type="logo-buffer")
            | &nbsp;基本用途
        p 保存工作树内容的快照，并将此快照作为下一次提交的内容。
        p 默认情况下，该命令不会添加被忽略的文件。
        p 在解决合并时把有冲突的文件标记为已解决状态。
        h3
            Icon(type="logo-buffer")
            | &nbsp;常用参数
        ul
            li
                strong.text-success &lt;pathspec&gt;
                span.des-text
                span 添加所有匹配的文件，语法可以参考 
                a(href="file:///E:/tool/cmder/vendor/git-for-windows/mingw64/share/doc/git-doc/gitglossary.html") gitglossary 
                | 中的 pathspec 条目。
                ul
                    li 这里我们以 
                        pre.custom-pre git add &lt;pathspec&gt;
                        |为例。
                        p 1、最初的目录结构：
                        img.d-block.mb-1(src="../../../../../assets/images/acticles/others/git/dir-0.png", alt="文件目录")
                        p 2、初始的状态：
                        img.d-block.mb-1(src="../../../../../assets/images/acticles/others/git/step-0-0.png", alt="状态")
                        p 3、执行上述命令后的状态：
                        img.d-block.mb-1(src="../../../../../assets/images/acticles/others/git/step-0-1.png", alt="状态")
                    li 另外我们经常使用到的有 
                        pre.custom-pre git add .
                        |  添加所有文件(同样不包含被忽略的文件)，
                        span.text-warn 并且不包括被删除的文件。
                        p 基于上面第二步执行后的状态为：
                        img.d-block.mb-1(src="../../../../../assets/images/acticles/others/git/step-0-2.png", alt="状态")
                    li 为了说明默认情况下不会添加被忽略的文件，因此我们来创建一个
                        code .gitignore 文件。
                        p 2-1、新的文件目录如下：
                        img.d-block.mb-1(src="../../../../../assets/images/acticles/others/git/dir-1.png", alt="文件目录")
                        p 其中
                            code .gitnore 文件的内容为：
                        img.d-block.mb-1(src="../../../../../assets/images/acticles/others/git/gitignore-0.png", alt="文件目录", style="height: 50px;")
                        p 2-2、初始状态为：
                        img.d-block.mb-1(src="../../../../../assets/images/acticles/others/git/step-1-0.png", alt="文件目录")
                        p 2-3、执行上述命令后的状态：
                        img.d-block.mb-1(src="../../../../../assets/images/acticles/others/git/step-1-1.png", alt="文件目录")
                        p 可见在
                            code  .gitignore 文件中指定需要被忽略的 
                            code 1.md 
                            | 文件没有被添加到索引中。
            li
                strong.text-success --dry-run(-n)
                span.des-text
                span 使用此参数不会实际添加文件，只显示没有这个参数时，命令会产生的效果。
                ul
                    li 我们基于上面 2-2 步 执行命令：
                        pre.custom-pre git add --dry-run .
                        img.d-block.mt-1.mb-1(src="../../../../../assets/images/acticles/others/git/arg-n.png", alt="文件目录")
                        p 可见文件并没有添加到暂存区，自是显示了 
                            pre.custom-pre git add .
                            |  命令会产生的效果，括号中的内容是该参数的简写，产生的效果是完全一样的。
        h3
            Icon(type="logo-buffer")
            | &nbsp;参数汇总
        p 实例中的显示的效果是在上述 2-2 步的初始状态下进行的。
        Table(:columns="columns", :data="data")
        FooterDivider
</template>

<script>
import util from '../../../../../libs/util.js';
export default {
    data() {
        return {
            columns: [
                {
                    title: '参数',
                    key: 'arg',
                    maxWidth: 125,
                },
                {
                    title: '简写',
                    key: 'shortName',
                    maxWidth: 125,
                },
                {
                    title: '使用方式',
                    key: 'useStyle',
                },
                {
                    title: '说明',
                    key: 'des',
                },
                {
                    title: '实例',
                    key: 'example',
                    align: 'center',
                    maxWidth: 125,
                    render: (h, parmas) => {
                        return h('i-button', {
                            props: {
                                type: 'info',
                                disabled: parmas.row.prohibitClick
                            },
                            nativeOn: {
                                click: () => {
                                    this.showExampleModal(parmas);
                                }
                            }
                        }, ['查看实例']);
                    }
                }
            ],
            data: [
                {
                    arg: '<pathspec>',
                    shortName: '无',
                    useStyle: 'git add <pathspec>',
                    des: '添加所有匹配的文件到暂存区',
                    prohibitClick: false,
                    detailDes: [
                        {
                            src: 'assets/images/acticles/others/git/step-1-1',
                            text: ''
                        }
                    ]
                },
                {
                    arg: '--dry-run',
                    shortName: '-n',
                    useStyle: 'git add -n <...ortherArgArr>',
                    des: '显示命令将会产生的效果，不会实际的添加文件。',
                    prohibitClick: false,
                    detailDes: [
                        {
                            src: 'assets/images/acticles/others/git/arg-n',
                            text: ''
                        }
                    ]
                },
                {
                    arg: '--verbose',
                    shortName: '-v',
                    useStyle: 'git add -v <...ortherArgArr>',
                    des: '显示此命令产生的效果，会实际的添加文件。',
                    prohibitClick: false,
                    detailDes: [
                        {
                            src: 'assets/images/acticles/others/git/arg-v',
                            text: ''
                        }
                    ]
                },
                {
                    arg: '--force',
                    shortName: '-f',
                    useStyle: 'git add -f <...ortherArgArr>',
                    des: '允许添加被忽略的文件。',
                    prohibitClick: false,
                    detailDes: [
                        {
                            src: 'assets/images/acticles/others/git/arg-f',
                            text: ''
                        }
                    ]
                },
                {
                    arg: '--interactive',
                    shortName: '-i',
                    useStyle: 'git add -i <...ortherArgArr>',
                    des: '将工作树中的修改内容以交互方式添加到索引中。',
                    prohibitClick: false,
                    detailDes: [
                        {
                            src: 'assets/images/acticles/others/git/arg-i',
                            text: ''
                        }
                    ]
                },
                {
                    arg: '--patch',
                    shortName: '-p',
                    useStyle: 'git add -p <...ortherArgArr>',
                    des: '将工作树中的修改内容以交互方式添加到索引中，并且有机会在将修改后的内容添加到索引之前查看差异。',
                    prohibitClick: false,
                    detailDes: [
                        {
                            src: 'assets/images/acticles/others/git/arg-p-0',
                            text: '<p>使用该参数时，在没有差异的情况下，不会进入交互模式（未跟踪的文件会被忽略），所以我们先把一些文件添加到暂存区，然后进行一点修改：</p>'
                        },
                        {
                            src: 'assets/images/acticles/others/git/arg-p-1',
                            text: '<p>操作后的状态：</p>'
                        }
                    ]
                },
                {
                    arg: '--edit',
                    shortName: '-e',
                    useStyle: 'git add -e <...ortherArgArr>',
                    des: '在编辑器中打开 diff 与索引，让用户编辑它。',
                    prohibitClick: true,
                    detailDes: []
                },
                {
                    arg: '--update',
                    shortName: '-u',
                    useStyle: 'git add -u <...ortherArgArr>',
                    des: '更新与 pathspec 参数的匹配项，可以删除索引条目，也可以修改索引条目以匹配工作树，但不添加新文件。如果当使用 -u 选项时没有给出 pathspec，则更新整个工作树中的所有跟踪文件（旧版本Git用于将更新限制到当前目录及其子目录）。',
                    prohibitClick: false,
                    detailDes: [
                        {
                            src: 'assets/images/acticles/others/git/arg-u',
                            text: ''
                        }
                    ]
                },
                {
                    arg: '--no-ignore-removal',
                    shortName: '-A/--all',
                    useStyle: 'git add -A <...ortherArgArr>',
                    des: '提交所有变化。',
                    prohibitClick: false,
                    detailDes: [
                        {
                            src: '',
                            text: '就像是共同执行 git add . 和 git add -u 的结果。如果当使用 -a 选项时没有给出 pathspec，则更新整个工作树中的所有跟踪文件（旧版本Git用于将更新限制到当前目录及其子目录）。'
                        }
                    ]
                },
                {
                    arg: '--ignore-removal',
                    shortName: '--no-all',
                    useStyle: 'git add --no-all <...ortherArgArr>',
                    des: '该参数主要是在旧版本中用来忽略删除的文件，也就是说 git add <pathspec> 与 git add <pathspec> --no-all 的效果一样。',
                    prohibitClick: true,
                    detailDes: []
                },
                {
                    arg: '--intent-to-add',
                    shortName: '-N',
                    useStyle: 'git add -N <...ortherArgArr>',
                    des: '只记录稍后将添加路径的事实。路径的条目被放置在没有内容的索引中。',
                    prohibitClick: true,
                    detailDes: []
                },
                {
                    arg: '--refresh',
                    shortName: '无',
                    useStyle: 'git add --refresh <...ortherArgArr>',
                    des: '不要添加文件，而只刷新索引中的状态信息。',
                    prohibitClick: true,
                    detailDes: []
                },
                {
                    arg: '--ignore-errors',
                    shortName: '无',
                    useStyle: 'git add --ignore-errors <...ortherArgArr>',
                    des: '如果某些文件由于索引错误而无法添加，则不要中止操作，而是继续添加其他文件。命令仍然以非零状态退出。配置变量 add.ignoreErrors 设置为 true 可以使其成为默认行为。',
                    prohibitClick: true,
                    detailDes: []
                },
                {
                    arg: '--ignore-missing',
                    shortName: '无',
                    useStyle: 'git add --dry-run --ignore-missing <...ortherArgArr>',
                    des: '该参数只能与参数“--dry-run”一起使用。通过使用这个选项，用户可以检查是否忽略任何给定的文件，无论它们是否已经存在于工作树中。',
                    prohibitClick: true,
                    detailDes: []
                },
                {
                    arg: '--chmod=(+|-)x',
                    shortName: '无',
                    useStyle: '尚且不明',
                    des: '重写添加文件的可执行位。可执行位只在索引中更改，磁盘上的文件保持不变。',
                    prohibitClick: true,
                    detailDes: []
                },
                {
                    arg: '--',
                    shortName: '无',
                    useStyle: 'git add -- <fileName>',
                    des: '将命令行选项与文件列表分离（当文件名可能被误认为是命令行选项时很有用）。',
                    prohibitClick: false,
                    detailDes: [
                        {
                            src: 'assets/images/acticles/others/git/arg---',
                            text: ''
                        }
                    ]
                },
                {
                    arg: '--no-warn-embedded-repo',
                    shortName: '无',
                    useStyle: 'git add --no-warn-embedded-repo <fileName>',
                    des: '默认情况下, git add 向嵌入式存储库添加索引时会发出警告, 而不用 git submodule add 其中创建条目 .gitmodules。该选项将会禁止警告。',
                    prohibitClick: true,
                    detailDes: []
                },
                {
                    arg: '--renormalize',
                    shortName: '无',
                    useStyle: 'git add --renormalize <fileName>',
                    des: '将“干净”的过程应用到所有被跟踪的文件，以强制再次添加到索引中。',
                    prohibitClick: true,
                    detailDes: []
                },
                {
                    arg: '-h',
                    shortName: '无',
                    useStyle: 'git add -h <fileName>',
                    des: '帮助信息：显示对 git add 的参数的描述。',
                    prohibitClick: false,
                    detailDes: [
                        {
                            src: 'assets/images/acticles/others/git/arg-h',
                            text: ''
                        }
                    ]
                }
            ]
        }
    },
    methods: {
        showExampleModal (parmas) {
            let content = '暂无实例。';
            if (parmas.row.detailDes.length) {
                content = '';
                parmas.row.detailDes.forEach(item => {
                    
                    if (item.text !== '' & item.src !== '') {
                        let img = require('../../../../../' + item.src + '.png');
                        content = content + `<div>${item.text}</div><img src="${img}"/>`;
                    }
                    if (item.text !== '' & item.src === '') {
                        content = content + `<div>${item.text}</div>`;
                    }
                    if (item.src !== '' & item.text === '') {
                        let img = require('../../../../../' + item.src + '.png');
                        content = content + `<img src="${img}"/>`;
                    }
                });
            }
            let config = {
                title: util.removeSymbol(parmas.row.arg, ['<', '>']),
                width: 768,
                content: content
            };
            this.$Modal.info(config);
        }
    }
}
</script>
