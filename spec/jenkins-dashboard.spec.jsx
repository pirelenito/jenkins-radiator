import React from 'react/addons';
import JenkinsDashboard from '../lib/jenkins-radiator.jsx';

describe('JenkinsDashboard', function() {
  var component;

  beforeEach(function() {
    component = React.addons.TestUtils.renderIntoDocument(
      <JenkinsDashboard/>
    );
  });

  it('should render', function() {
    expect(component.getDOMNode().className).toEqual('job-list');
  });
});
