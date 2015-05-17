var React = require('react');
var TestUtils = React.addons.TestUtils;
var JenkinsDashboard = require('../lib/jenkins-dashboard.jsx');


describe("JenkinsDashboard", function() {
  var component;

  beforeEach(function() {
    component = TestUtils.renderIntoDocument(
      <JenkinsDashboard name="Jonh"/>
    );
  });

  it("should render", function() {
    expect(component.getDOMNode().className).toEqual('jenkins-dashboard');
  });
});
