export default {
  widgets: [
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
                  buildHookId: '6246229807e5631dfa08d5df',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-p1nowvs2',
                  apiId: '7093b3a4-9174-40f1-b02a-a75932609864'
                },
                {
                  buildHookId: '624622981c9d301c5e9caec6',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-tgh8h1ij',
                  apiId: '75408277-496e-4f79-8a5c-5835ee105d8e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/michaelpanik/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-tgh8h1ij.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
