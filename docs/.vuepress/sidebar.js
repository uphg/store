module.exports = {
  '/react/': [
    ['', '介绍'],
    {
      title: 'Redux 入门教程（阮一峰）',
      children: [
        {
          title: '一、基本用法',
          path: 'redux-part-basic'
        },
        {
          title: '二、中间件与异步操作',
          path: 'redux-part-async-operations'
        },
        {
          title: '三、React-Redux 的用法',
          path: 'redux-part-react'
        }
      ]
    }
  ],
  '/bar/': [
    ['', '介绍'],
    {
      title: 'Bar',
      children: [
        'markdown',
        'demo1.md',
        'demo2.md',
        'demo3.md',
        'demo4.md',
        'demo5.md',
        'one',
        'two'
      ]
    }
  ],
  '/foo/api/': [
    ['', '介绍'],
    {
      title: 'Bar',
      collapsable: false,
      children: [
        'one',
        'two'
      ]
    }
  ],
  '/foo/more/': [
    ['', '介绍'],
    {
      title: 'Bar',
      collapsable: false,
      children: [
        'one',
        'two'
      ]
    }
  ],
}
