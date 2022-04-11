module.exports = {
    base: '/',
    title: 'JiaFengFmc个人博客',
    head: [
        ['link', {
            rel: 'shortcut icon',
            type: "image/x-icon",
            href: `./favicon.ico`
        }]
    ],
    plugins: [['vuepress-plugin-code-copy', true]],
    description: 'JiaFengFmc个人博客-技术积累',
    themeConfig: {
        sidebarDepth: 6,
        displayAllHeaders: true, // 默认值：false
        nav: [{
            text: '首页',
            link: '/'
        }, {
            text: 'HTML',
            link: '/pages/HTML/'
        }, {
            text: 'CSS',
            link: '/pages/CSS/'
        }, {
            text: 'JavaScript',
            link: '/pages/JavaScript/'
        }, {
            text: 'Note',
            link: '/pages/Note/'
        }, {
            text: 'Nodejs',
            link: '/pages/Nodejs/'
        }, {
            text: 'TypeScript',
            link: '/pages/TypeScript/'
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
                    children: ['001', '002', '003', '004', '005']
                },
            ],
            '/pages/JavaScript/': [
                {
                    title: 'JavaScript',
                    collapsable: true,
                    children: [ '013', '009', '010', '011', '012',]
                },
            ],
            '/pages/Nodejs/': [
                {
                    title: 'Nodejs ',
                    collapsable: true,
                    children: ['006', '001', '002', '003', '004']
                }
            ],
            '/pages/TypeScript/': [
                {
                    title: 'TypeScript ',
                    collapsable: true,
                    children: ['001']
                }
            ],
            '/pages/Note/': [
                {
                    title: 'Note ',
                    collapsable: true,
                    children: ['001']
                }
            ],
            '/': [] //不能放在数组第一个，否则会导致右侧栏无法使用 
        }
    },

}