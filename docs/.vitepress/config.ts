import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'RIME 雾凇 Wiki',
  description: 'RIME 雾凇 Minecraft 服务器 Wiki',
  lang: 'zh-CN',
  themeConfig: {
    siteTitle: 'RIME 雾凇',
    nav: [
      { text: '首页', link: '/' },
      { text: '第一区服', link: '/server-1/' },
      { text: '第二区服', link: '/server-2/' }
    ],
    sidebar: [
      {
        text: '开始',
        items: [
          { text: 'Wiki 首页', link: '/' }
        ]
      },
      {
        text: '第一区服：生电服',
        items: [
          { text: '区服介绍', link: '/server-1/' },
          { text: '客户端安装', link: '/server-1/client-install' },
          { text: '插件与功能', link: '/server-1/plugins' },
          { text: '常见问题', link: '/server-1/faq' },
          { text: '小技巧与教程', link: '/server-1/tips' }
        ]
      },
      {
        text: '第二区服',
        items: [
          { text: '占位页', link: '/server-2/' }
        ]
      }
    ],
    socialLinks: []
  }
})
