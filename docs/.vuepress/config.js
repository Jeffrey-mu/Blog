module.exports = {
    base: '/',
    title: 'Jeffrey Blog',
    head: [
        ['link', {
            rel: 'shortcut icon',
            type: "image/x-icon",
            href: `./favicon.ico`
        }]
    ],
    markdown: {
        lineNumbers: true
    },
    plugins: [['vuepress-plugin-code-copy', true], '@vuepress/back-to-top', ['@vuepress/search', {
        searchMaxSuggestions: 10
    }], '@vuepress/nprogress'],
    description: 'Jeffrey个人博客-技术积累',
    theme: 'vuepress-theme-yilia-plus',
    themeConfig: {
        yilia_plus: {
            // github-corner(关闭请设置为false)
            github: {
                url: "https://github.com/Jeffrey-mu"
            },
            footer: {
                // 网站成立年份(若填入年份小于当前年份，则显示为 2018-2019 类似的格式)
                since: 2020,
                // 网站作者(关闭请设置为false)
                author: '<a href="https://github.com/Jeffrey-mu" target="_blank">Jeffrey</a>',
                // 访问量统计功能(不蒜子)
                busuanzi: {
                    // 是否启用(关闭请设置为false)
                    // enable: true
                }
            }
        },
        sidebarDepth: 6,
        displayAllHeaders: true, // 默认值：false
        lastUpdated: '上次更新', // string | boolean
        nav: [{
            text: '主页',
            link: '/'
        }, {
            text: '技术笔记',
            link: '/pages/HTML/',
            items: [{
                text: 'Note',
                link: '/pages/Note/'
            },
            {
                text: 'CSS',
                link: '/pages/CSS/'
            }, {
                text: 'JavaScript',
                link: '/pages/JavaScript/'
            }, {
                text: 'TypeScript',
                link: '/pages/TypeScript/'
            }, {
                text: 'Python',
                link: '/pages/Python/'
            }, {
                text: 'Nodejs',
                link: '/pages/Nodejs/'
            }
            ]
        }, {
            text: '关于我',
            link: '/pages/author/'
        }, {
            text: '查看源码',
            link: 'https://github.com/Jeffrey-mu/Blog'
        }
        ],
        sidebar: {//左侧列表
            '/pages/HTML/': [
                {
                    title: 'HTML',
                    collapsable: true,
                    children: ['001', '002', '003', '004']
                },
            ],
            '/pages/CSS/': [
                {
                    title: 'CSS',
                    collapsable: true,
                    children: ['001', '002', '003', '004', '005', '006']
                },
            ],
            '/pages/JavaScript/': [
                {
                    title: 'JavaScript',
                    collapsable: true,
                    children: ['013', '009', '010', '011', '012', '014', '015']
                },
                {
                    title: 'TypeScript ',
                    collapsable: true,
                    children: ['001']
                }
            ],
            '/pages/TypeScript/': [
                {
                    title: 'TypeScript ',
                    collapsable: true,
                    children: ['001']
                }
            ],
            '/pages/Nodejs/': [
                {
                    title: 'Nodejs ',
                    collapsable: true,
                    children: ['010', '011', '012', '013', '014', '006', '001', '002', '003', '004', '007', '008', '009', '015']
                },
            ],
            '/pages/Python/': [
                {
                    title: 'Python ',
                    collapsable: true,
                    children: ['001', '002']
                }
            ],
            '/pages/Note/': [
                {
                    title: 'Note ',
                    collapsable: true,
                    children: ['001', '003', '004', '005', '006']
                }
            ],
            '/': [] //不能放在数组第一个，否则会导致右侧栏无法使用 
        }
    },

}