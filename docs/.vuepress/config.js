module.exports = {
  base: '/my-blog/',
  title: '邵小白 ‘s world',
  description: 'TypeScript4 最新官方文档翻译',
  theme: 'reco',
  themeConfig: {
    subSidebar: 'dark',
    nav: [
      { text: '首页', link: '/' },
      {
        text: '找到邵小白',
        items: [
          { text: 'Github', link: 'https://github.com/1024shao' },
          { text: '掘金', link: 'https://juejin.cn/user/210745713517950/posts' },
        ],
      },
      { text: '联系方式 xptz15387507459' },
    ],
    sidebar: [
      {
        title: '欢迎学习',
        path: '/',
        collapsable: false, // 不折叠
        children: [{ title: '学前必读', path: '/' }],
      },
      {
        title: '基础学习',
        path: '/handbook/ConditionalTypes.md',
        collapsable: false, // 不折叠
        children: [
          { title: '条件类型', path: '/handbook/ConditionalTypes.md' },
          { title: '泛型', path: '/handbook/Generics.md' },
        ],
      },
    ],
  },
  locales: {
    '/': {
      lang: 'zh-CN',
    },
  },
}
