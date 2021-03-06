module.exports = [
  ['', '介绍'],
  {
    title: 'React 入门教程',
    collapsable: false,
    children: [
      'react-technology-stack',
      'react-started',
      'react-hooks',
      // {
      //   title: 'React 钩子：useEffect()',
      //   path: 'react-hooks-useeffect'
      // },
      'react-hooks-useeffect',
      'react-router',
    ]
  },
  {
    title: 'Redux 入门教程',
    collapsable: false,
    children: [
      {
        title: '一、基本用法',
        path: 'redux/redux-part-basic'
      },
      {
        title: '二、中间件与异步操作',
        path: 'redux/redux-part-async-operations'
      },
      {
        title: '三、React-Redux 的用法',
        path: 'redux/redux-part-react'
      }
    ]
  }
]

