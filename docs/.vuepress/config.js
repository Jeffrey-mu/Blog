module.exports = {
    base: '/',
    title: 'Jeffrey个人博客',
    head: [
        ['link', {
            rel: 'shortcut icon',
            type: "image/x-icon",
            href: `./favicon.ico`
        }]
    ],
    plugins: [['vuepress-plugin-code-copy', true]],
    description: 'Jeffrey个人博客-技术积累',
    themeConfig: {
        sidebarDepth: 6,
        displayAllHeaders: true, // 默认值：false
        lastUpdated: '上次更新', // string | boolean
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
                    children: ['001', '002', '003', '004', '005', '006']
                },
            ],
            '/pages/JavaScript/': [
                {
                    title: 'JavaScript',
                    collapsable: true,
                    children: [ '013', '009', '010', '011', '012', '014', '015']
                },
            ],
            '/pages/Nodejs/': [
                {
                    title: 'Nodejs ',
                    collapsable: true,
                    children: ['006', '001', '002', '003', '004']
                }
            ],
            '/pages/Python/': [
                {
                    title: 'Python ',
                    collapsable: true,
                    children: ['001',]
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
                    children: ['001', '003']
                }
            ],
            '/': [] //不能放在数组第一个，否则会导致右侧栏无法使用 
        }
    },

}