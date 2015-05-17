# jenkins dashboard

Get the AMD module located at `jenkins-dashboard.js` and include it in your project.

Here is a sample integration:

```js
require.config({
  paths: {
    'react': 'vendor/bower_components/react/react',
    'JenkinsDashboard': 'jenkins-dashboard'
  }
});

require(['react', 'JenkinsDashboard'], function(React, JenkinsDashboard) {

  React.render(React.createElement(JenkinsDashboard), document.getElementById('widget-container'));

});
```

## Development

* Development server `npm run dev`.
* Continuously run tests on file changes `npm run watch-test`;
* Run tests: `npm test`;
* Build `npm run build`;
