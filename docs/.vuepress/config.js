module.exports = {
    // 网站的一些基本配置
    base: '/docs/',
    title: '彭时宇的博客', // 网站的标题
    description: '前端架构师的进阶之路', // 网站的描述，它将会以 <meta> 标签渲染到当前页面的 HTML 中。
    head: [
      ['link', { rel: 'icon', href: '/logo.jpg' }] // 需要被注入到当前页面的 HTML <head> 中的标签
    ],
    themeConfig: {
      logo: '/logo.jpg',
      nav: [
        // 直接跳转，'/'为不添加路由，跳转至首页，以/结尾的最终对应的都是/index.html,也就是README.md文件编译后的页面
        { text: 'Home', link: '/' },
        // 对应blog/fontend/README.md
        { text: '前端', link: '/blog/fontend/' },
        { text: '后端', link: '/blog/backend/' },
        // 对应/guide/guide.md
        { text: '导航', link: '/guide/guide' },
        // 不指定深度，默认深度1-提取h2 最大深度-2，同一标题下最多提取到h3，想要改变深度可以指定sidebarDepth
      ],
      sidebar: 'auto'

       
    }
  }