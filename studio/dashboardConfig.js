export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61416cc954aaf01cc1cf2d20',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-r1hcww9e',
                  apiId: '3708fcec-d4f4-4d2c-b1bc-a2163b0bf28d'
                },
                {
                  buildHookId: '61416cc9a3f4401fc661b7c6',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-2vm5p538',
                  apiId: 'b06feac1-9564-4222-bb94-ff355568a08d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Justin-Insight/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-2vm5p538.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
