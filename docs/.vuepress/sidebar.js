module.exports = {
  '/react/': [
    ['', '介绍'],
    {
      title: 'React 教程',
      collapsable: false,
      children: [
        'react-started',
        'react-hooks',
      ]
    },
    {
      title: 'Redux 入门教程（阮一峰）',
      collapsable: false,
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
  '/devbook/': [
    ['', '介绍'],
    {
      title: 'CSS 教程',
      collapsable: false,
      children: [
        'css-cookbook',
        'css-modules',
      ]
    }
  ]
}
