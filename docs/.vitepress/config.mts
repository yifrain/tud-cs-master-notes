import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "tud-cs-master-notes",
  description: "Open Track Specialization Areas",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
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
      '/systems-architecture/': [
        {
          text: 'Systems Architecture',
          items: [
            { text: 'Overview', link: '/systems-architecture/' },
            { text: 'Systems Engineering', link: '/systems-architecture/systems-engineering' },
            { text: 'Distributed Systems', link: '/systems-architecture/distribute-systems' }
          ]
        }
      ],
      '/theoretical-ai/': [
        {
          text: 'Theoretical AI',
          items: [
          ]
        }
      ],
      '/software-tech/': [
        {
          text: 'Software Tech',
          items: [
          ]
        }
      ],
      '/secure-computing/': [
        {
          text: 'Secure Computing',
          items: [
          ]
        }
      ],
      '/cyber-physical/': [
        {
          text: 'Cyber-Physical',
          items: [
          ]
        }
      ],
      '/visual-ml/': [
        {
          text: 'Visual ML',
          items: [
          ]
        }
      ],
      '/hci-media/': [
        {
          text: 'HCI Media',
          items: [
          ]
        }
      ],
      '/comp-engineering/': [
        {
          text: 'Comp Engineering',
          items: [
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
