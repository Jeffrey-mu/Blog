const items = require('../config/nav.json')
const sidebar = require('../config/pages.json')
module.exports = {
    base: '/',
    title: 'Jeffrey Blog',
    head: [
        ['link', {
            rel: 'shortcut icon',
            type: "image/x-icon",
            href: `/favicon.ico`
        }]
    ],
    markdown: {
        lineNumbers: true,
        linkify:true
    },
    plugins: [['vuepress-plugin-code-copy', true], '@vuepress/back-to-top', ['@vuepress/search', {
        searchMaxSuggestions: 10
    }], '@vuepress/nprogress',[ '@vuepress/active-header-links', {
        sidebarLinkSelector: '.sidebar-link',
        headerAnchorSelector: '.header-anchor'
      }]],
    description: 'Jeffrey技术笔记',
    theme: 'vuepress-theme-yilia-plus',
    themeConfig: {
        contributors: true,
        contributorsText: '贡献者',
        lastUpdatedText: '上次更新',
        notFound: ['这就戳碰到我知识的盲点了'],
        editLinkText: "编辑页面",
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
            text: '工具',
            link: '/',
            items: [
                { text: '正则可视化', link: "https://jex.im/regulex/#!flags=&re=%5E(a%7Cb)*%3F%24" },
                { text: '画板', link: "https://www.tldraw.com/" },
                { text: '时间轴工具', link: "https://time.graphics/editor" },
                { text: '扁平配图unDraw', link: "https://undraw.co/illustrations" },
                { text: '创客贴做海报', link: "https://www.chuangkit.com/" },
                { text: "正则表达式", link: "https://any86.github.io/any-rule/" },
                { text: '图片清除背景', link: "https://remove.bg/" },
                { text: '小徽章', link: "https://shields.io/" },
                { text: '数据结构/算法动态可视化', link: "https://visualgo.net/zh" },
                { text: 'AST Explorer', link: "https://astexplorer.net/" },]
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
        sidebar
    },

}