module.exports = {
    title: 'Towelove',
    description: '双向的爱',
    themeConfig: {
      search: true,
      searchMaxSuggestions: 10,
      nav: [
        { text: '主页', link: '/' },
        { text: '使用', link: '/useage.html' },
        { text: 'TODO', link: '/todo.html' },
        { text: 'Github', link: 'https://github.com/Towelove' },
      ],
      sidebar: [
        {
          title: '梦开始的地方',   // 必要的
          path: '/origin.html',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          sidebarDepth: 1,    // 可选的, 默认值是 1
          // children: [
          //   '/'
          // ]
        },
        {
          title: '项目介绍',
          path: '/introduce.html',
          // children: [ /* ... */ ],
          // initialOpenGroupIndex: -1 // 可选的, 默认值是 0
        },
        {
          title: '技术栈',   // 必要的
          path: '/techstack.html',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          sidebarDepth: 1,    // 可选的, 默认值是 1
          // children: [
          //   '/'
          // ]
        },
        {
          title: 'Tips',   // 必要的
          path: '/tips.html',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          sidebarDepth: 1,    // 可选的, 默认值是 1
          // children: [
          //   '/'
          // ]
        },
        {
          title: '开发工具',   // 必要的
          path: '/devtools.html',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          sidebarDepth: 1,    // 可选的, 默认值是 1
          // children: [
          //   '/'
          // ]
        },
        {
          title: '问题及解决办法',   // 必要的
          path: '/p&s.html',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          sidebarDepth: 1,    // 可选的, 默认值是 1
          // children: [
          //   '/'
          // ]
        },
        {
          title: '优化',   // 必要的
          path: '/optimize.html',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          sidebarDepth: 1,    // 可选的, 默认值是 1
          // children: [
          //   '/'
          // ]
        },
      ]
    }

  }

