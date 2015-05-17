import React from 'react/addons';
import JenkinsDashboard from '../lib/jenkins-dashboard.jsx';


describe('JenkinsDashboard', function() {
  var component;

  beforeEach(function() {
    component = React.addons.TestUtils.renderIntoDocument(
      <JenkinsDashboard name='Jonh'/>
    );
  });

  it('should render', function() {
    expect(component.getDOMNode().className).toEqual('jenkins-dashboard');
  });
});
