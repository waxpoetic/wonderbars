module.exports = function(plop) {
  plop.setGenerator('release', {
    description: 'Generate a new release',
    prompts: [
      { type: 'input', name: 'name', message: 'Release Name' },
      { type: 'input', name: 'description', message: 'Short Description' },
      { type: 'input', name: 'spotify_url', message: 'Spotify URL' },
      { type: 'input', name: 'genius_url', message: 'Genius URL' },
      { type: 'input', name: 'catalog_number', message: 'Catalog Number' }
    ],
    actions: [
      {
        type: 'add',
        path: 'src/data/releases/{{catalog_number}}.yml',
        templateFile: 'etc/templates/release.yml.hbs'
      }
    ]
  })

  plop.setGenerator('event', {
    description: 'Generate a new event',
    prompts: [
      { type: 'input', name: 'name', message: 'Name of Event' },
      { type: 'input', name: 'location', message: 'Location' },
      { type: 'input', name: 'facebook_id', message: 'Facebook Event ID' },
      { type: 'input', name: 'date', message: 'Date' },
      { type: 'input', name: 'description', message: 'Short Description' },
      { type: 'input', name: 'price', message: 'Cover charge' }
    ],
    actions: [
      {
        type: 'add',
        path: 'src/data/events/{{dashCase date}}-{{dashCase name}}.yml',
        templateFile: 'etc/templates/event.yml.hbs'
      }
    ]
  })

  plop.setGenerator('article', {
    description: 'Generate a new article',
    prompts: [
      { type: 'input', name: 'name', message: 'Article Title' },
      { type: 'input', name: 'category', message: 'Category' },
      { type: 'input', name: 'date', message: 'Date', default: new Date() }
    ],
    actions: [
      {
        type: 'add',
        path: 'src/articles/{{dashCase date}}-{{dashCase name}}.md',
        templateFile: 'etc/templates/article.md.hbs'
      }
    ]
  })
}
