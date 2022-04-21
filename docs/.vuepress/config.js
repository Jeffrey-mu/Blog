const items = require('../config/nav.json')
const sidebar = require('../config/pages.json')
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
    description: 'Jeffrey技术笔记',
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
            items
        }, {
            text: '关于我',
            link: '/pages/author/'
        }, {
            text: '查看源码',
            link: 'https://github.com/Jeffrey-mu/Blog'
        }
        ],
        sidebar: sidebar
    },

}