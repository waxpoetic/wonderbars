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
        path: 'src/data/events/{{date}}-{{name}}.yml',
        templateFile: 'etc/templates/event.yml.hbs'
      }
    ]
  })
}
