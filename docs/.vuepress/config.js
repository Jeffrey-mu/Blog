/*
 * @Author: WangJiaFeng
 * @Date: 2021-12-31 09:21:26
 * @LastEditTime: 2022-02-16 17:56:27
 * @Description: file content
 * @FilePath: \Blog\docs\.vuepress\config.js
 */
module.exports = {
    base: '/Blog',
    title: '王佳峰个人博客',
    head: [
        ['link', {
            rel: 'shortcut icon',
            type: "image/x-icon",
            href: `./favicon.ico`
        }]
    ],
    description: '王佳峰个人博客-技术积累',
    themeConfig: {
        nav: [{
            text: '首页',
            link: '/'
        }],
        sidebar: [{
            title: 'HTML5',
            path: '/static/HTML5/',
            collapsable: false, // 不折叠
            children: [
                {

                }
            ]
        }, {
            title: 'CSS3',
            path: '/static/CSS3/',
            collapsable: true, // 不折叠
            children: [
                {
                    title: 'CSS3简介',
                    path: '/static/CSS3/briefIntroduction',
                },
                {
                    title: 'CSS3边框',
                    path: '/static/CSS3/border',
                }
            ]
        }, {
            title: 'JavaScript',
            path: '/static/JavaScript/',
            collapsable: false, // 不折叠
        }, {
            title: 'TypeScript',
            path: '/static/TypeScript/',
            collapsable: false, // 不折叠
        }]
    }
}