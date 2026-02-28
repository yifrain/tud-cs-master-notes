import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "tud-cs-master-notes",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
      { text: "Home", link: "/" },
      { text: "OS", link: "/os/" },
      { text: "DB", link: "/db/" },
      { text: "Distributed Systems", link: "/distributed/" }
    ],

    sidebar: {
      '/': [
        {
          text: 'Examples',
          items: [
            { text: 'Markdown Examples', link: '/markdown-examples' },
            { text: 'Runtime API Examples', link: '/api-examples' }
          ]
        }
      ],
      '/os/': [
        {
          text: 'Operating Systems',
          items: [
            { text: 'Overview', link: '/os/' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
