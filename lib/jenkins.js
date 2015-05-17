export default {
  /**
    TODO: implement actual request
    Which currently is impossible due to a bug in Jenkins
    see: https://issues.jenkins-ci.org/browse/JENKINS-27607
   */
  getJobs () {
    return Promise.resolve([
      {
        'name': 'logs-elasticsearch',
        'url': 'http://ci.my-company.com.br/job/logs-elasticsearch/',
        'color': 'blue'
      },
      {
        'name': 'logs-logstash',
        'url': 'http://ci.my-company.com.br/job/logs-logstash/',
        'color': 'red'
      },
      {
        'name': 'ubuntu-android-image',
        'url': 'http://ci.my-company.com.br/job/ubuntu-android-image/',
        'color': 'blue'
      },
      {
        'name': 'ubuntu-image',
        'url': 'http://ci.my-company.com.br/job/ubuntu-image/',
        'color': 'blue'
      },
      {
        'name': 'ubuntu-nodejs-image',
        'url': 'http://ci.my-company.com.br/job/ubuntu-nodejs-image/',
        'color': 'blue'
      },
      {
        'name': 'ubuntu-nodejs-ruby-image',
        'url': 'http://ci.my-company.com.br/job/ubuntu-nodejs-ruby-image/',
        'color': 'disabled'
      }
    ]);
  }
};
