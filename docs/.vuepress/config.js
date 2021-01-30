var nav = require("./nav")
var sidebar = require("./sidebar")

module.exports = {
  base: '/store/',
  title: 'Store Note',
  description: '分享/转载，我收集的一些前端的博客、教程等。',
  head: [
    ['link', { href: 'https://fonts.googleapis.com/css?family=Inter:300,400,500,600|Open+Sans:400,600;display=swap', rel: 'stylesheet' }],
    /* 本地备份字体 */
    // ['link', {rel: 'stylesheet', href: './font/index.css'}]
    ['script', { src: '/icon/svg.js' }]
  ],
  themeConfig: {
    lastUpdated: '上次更新',
    /* 开启平滑滚动 */
    smoothScroll: true,
    /* 侧栏显示标题深度 */
    sidebarDepth: 0,
    /* 搜索显示条目数 */
    searchMaxSuggestions: 10,
    // 顶部导航
    nav: nav,
    sidebar: sidebar
  },
  plugins: [
    ['vuepress-plugin-table-of-contents'],
    ['@vuepress/back-to-top'],
    [
      'vuepress-plugin-zooming',
      {
        selector: '.page img',
        delay: 1000,
        options: {
          bgColor: 'black',
          zIndex: 10000,
        },
      },
    ],
    ['@vuepress/active-header-links',
      {
        sidebarLinkSelector: '.page-catalog a'
      }
    ],
    [
      'vuepress-plugin-container',
      {
        type: 'info',
        before: text => `<div class="custom-block info"><p class="custom-block-title">${text}</p>`,
        after: '</div>',
      },
    ],
  ]
}