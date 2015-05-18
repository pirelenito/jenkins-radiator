import React from 'react';
import './jenkins-radiator.scss';
import jenkins from './jenkins';
import classNames from 'classnames';


const Job = React.createClass({
  render: function () {
    return (
      <li className={classNames('job', this.props.job.color)}>{this.props.job.name}</li>
    );
  }
});


const JobList = React.createClass({
  render: function () {
    return (
      <ul className='job-list'>
        {
          this.props.jobs.map(job => <Job job={job}/>)
        }
      </ul>
    );
  }
});


export default React.createClass({
  getInitialState: function () {
    return { jobs: [], filter: '' };
  },

  componentWillMount: async function () {
    const fetchedJobs = await jenkins.getJobs();
    const matches = window.location.search.match(/filter=(.+)/);
    const filter = matches && matches[1] || '';
    const jobs = fetchedJobs.filter(job => job.name.match(new RegExp(filter))).map(job => {
      return { name: job.name.replace(`${filter}-`, ''), color: job.color };
    });

    this.setState({ jobs: jobs, filter: filter, height: window.innerHeight });
  },

  render: function() {
    return (
      <JobList jobs={this.state.jobs}/>
    );
  }
});
