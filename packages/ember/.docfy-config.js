const path = require('path');
const autolinkHeadings = require('remark-autolink-headings');
const prism = require('@mapbox/rehype-prism');
const refractor = require('refractor');
const docfyWithProse = require('@docfy/plugin-with-prose');

refractor.alias('handlebars', 'hbs');
refractor.alias('shell', 'sh');

module.exports = {
  remarkHbsOptions: {
    escapeCurliesCode: false
  },
  remarkPlugins: [
    [
      autolinkHeadings,
      {
        behavior: 'wrap'
      }
    ]
  ],
  plugins: [docfyWithProse],
  rehypePlugins: [prism],
  sources: [
    {
      root: path.join(__dirname, 'dummy-docs'),
      pattern: '**/*.md',
      urlSchema: 'manual',
      urlPrefix: 'docs'
    }
  ],
  labels: {
    components: 'Components',
    helpers: 'Helpers',
    core: '@docfy/core',
    ember: 'prysmex-docfy-ember',
    docs: 'Documentation'
  }
};
