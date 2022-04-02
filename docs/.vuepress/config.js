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
            text: 'Nodejs',
            link: '/pages/Nodejs/'
        }, {
            text: 'TypeScript',
            link: '/pages/TypeScript/'
        }
        ],
        sidebar: {//左侧列表
            '/pages/HTML/': [
                ''
            ],
            '/pages/CSS/': [
                {
                    title: 'CSS',
                    collapsable: true,
                    children: ['001', '002']
                },
            ],
            '/pages/JavaScript/': [
                {
                    title: 'JavaScript',
                    collapsable: true,
                    children: ['009']
                },
            ],
            '/pages/Nodejs/': [
                {
                    title: 'Nodejs ',
                    collapsable: true,
                    children: ['001', '002', '003', '004']
                }
            ],
            '/pages/TypeScript/': [
                {
                    title: 'TypeScript ',
                    collapsable: true,
                }
            ],
            '/': [] //不能放在数组第一个，否则会导致右侧栏无法使用 
        }
    },

}