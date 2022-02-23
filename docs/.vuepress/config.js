/*
 * @Author: WangJiaFeng
 * @Date: 2021-12-31 09:21:26
 * @LastEditTime: 2022-02-16 17:56:27
 * @Description: file content
 * @FilePath: \Blog\docs\.vuepress\config.js
 */
module.exports = {
    base: '/Blog',
    title: 'jiafengfmc个人博客',
    head: [
        ['link', {
            rel: 'shortcut icon',
            type: "image/x-icon",
            href: `./favicon.ico`
        }]
    ],
    description: 'jiafengfmc个人博客-技术积累',
    themeConfig: {
        sidebarDepth: 6,
        displayAllHeaders: true, // 默认值：false
        nav: [{
            text: '首页',
            link: '/'
        }],
        sidebar: [{
            title: 'HTML',
            path: '/static/HTML/',
            collapsable: true, // 不折叠
            children: [
                {

                }
            ]
        }, {
            title: 'CSS',
            path: '/static/CSS/',
            collapsable: true, // 不折叠
            children: [
                {
                    title: '基本介绍',
                    path: '/static/CSS/001',
                },
            ]
        }, {
            title: 'JavaScript',
            path: '/static/JavaScript/',
            collapsable: true, // 不折叠
            children: [
                {
                    title: '二、HTML中的JavaScript',
                    path: '/static/JavaScript/001',
                    collapsable: true, // 不折叠
                    children: [
                        {
                            title: '2.1 <script>元素',
                            path: '/static/JavaScript/002',
                        },
                        {
                            title: '2.2 行内代码与外部文件',
                            path: '/static/JavaScript/003',
                        },
                        {
                            title: '2.3 文档模式',
                            path: '/static/JavaScript/004',
                        },
                        {
                            title: '2.4 <noscript>元素',
                            path: '/static/JavaScript/005',
                        },
                    ]
                },
                {
                    title: '三、语言基础',
                    path: '/static/JavaScript/006',
                    collapsable: true, // 不折叠
                    children: [
                        {
                            title: '3.1 语法',
                            path: '/static/JavaScript/007',
                        },
                        {
                            title: '3.2 关键字与保留字',
                            path: '/static/JavaScript/008',
                        },
                        {
                            title: '2.3 文档模式',
                            path: '/static/JavaScript/004',
                        },
                        {
                            title: '2.4 <noscript>元素',
                            path: '/static/JavaScript/005',
                        },
                    ]
                }
            ],
        }, {
            title: 'TypeScript',
            path: '/static/TypeScript/',
            collapsable: true, // 不折叠
        }]
    }
}