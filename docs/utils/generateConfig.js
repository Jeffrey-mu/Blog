const fs = require('fs')
const CONFIG = {
    current: './docs/pages/&./docs/config/',
    dev: '../pages/&../config/',
}
const MODEL = 'current'
fs.readdir(CONFIG[MODEL].split('&')[0], (err, data) => {
    const PATH = 'pages'
    let pages = {}
    console.log(data)
    const nav = data.map((el, index) => {
        if (!index) return
        fs.readdir(CONFIG[MODEL].split('&')[0] + el, (err, innerData) => {
            console.log(innerData)
            pages[`/${PATH}/${el}/`] = [
                {
                    title: el,
                    collapsable: true,
                    children: innerData && innerData.filter(el => el !== 'README.md')
                },
            ]
            if (index === data.length - 1)
                setPages()
        })
        return ({ text: el, link: `/${PATH}/${el}/` })
    }).filter(Boolean)
    function setPages () {
        fs.writeFile(CONFIG[MODEL].split('&')[1] + 'pages.json', JSON.stringify(pages), (err) => {
            if (!err) {
                console.log('写入成功！')
            }
        })
    }
    fs.writeFile(CONFIG[MODEL].split('&')[1] + 'nav.json', JSON.stringify(nav), (err) => {
        if (!err) {
            console.log('写入成功！')
        }
    })
})
