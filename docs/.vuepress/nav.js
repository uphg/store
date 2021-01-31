module.exports = [
  { text: 'React 教程', link: '/react/'},
  { text: 'Bar', link: '/bar/' },
  {
    text: 'Foo',
    items: [
      {
        text: '第一章',
        items: [
          { text: 'API', link: '/foo/api/' },
          { text: '更多', link: '/foo/more/' }
        ]
      },
      {
        text: '链接',
        items: [
          { text: 'GitHub', link: 'https://github.com/uphg' }
        ]
      }
    ]
  }
]
