import Showdown from 'showdown'

const converter = new Showdown.Converter()

export default function(markdown) {
  return converter.makeHtml(markdown);
}
