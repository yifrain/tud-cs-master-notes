import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/tud-cs-master-notes/',
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
            { text: 'Overview', link: '/theoretical-ai/' },
          ]
        }
      ],
      '/software-tech/': [
        {
          text: 'Software Tech',
          items: [
            { text: 'Overview', link: '/software-tech/' },
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
            { text: 'Overview', link: '/cyber-physical/' }
          ]
        }
      ],
      '/visual-ml/': [
        {
          text: 'Visual ML',
          items: [
            { text: 'Overview', link: '/visual-ml/' },
            { text: 'Foundations of Virtual Reality', link: '/visual-ml/foundations-of-virtual-reality' },
            { text: 'Data Visualization', link: '/visual-ml/foundations-of-data-visualization' }
          ]
        }
      ],
      '/hci-media/': [
        {
          text: 'HCI Media',
          items: [
            { text: 'Overview', link: '/hci-media/' },
          ]
        }
      ],
      '/comp-engineering/': [
        {
          text: 'Comp Engineering',
          items: [
            { text: 'Overview', link: '/comp-engineering/' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
