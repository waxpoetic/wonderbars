import config from '../../package.json'

const runningLocally = window.location.hostname.match(/localhost/)
const development = 'http://mindbrain.test'
const production = 'http://mindbrainmusic.herokuapp.com'
const url = (runningLocally) ? development : production
const artist = config.name

export function get(resource) {
  return fetch(`${url}/artists/${artist}/${resource}.json`)
          .then(response => response.json())
}

export default { get }
