pipeline {
  agent {
    node {
      label 'stage'
    }

  }
  stages {
    stage('Build') {
      agent {
        node {
          label 'stage'
        }

      }
      steps {
        sh 'npm install'
        sh 'npm install -g appium'
      }
    }
    stage('Test') {
      agent {
        node {
          label 'stage'
        }

      }
      steps {
        sh 'BASEURL=https://storefront.dev.amuse.com npm run iosBrowser '
      }
    }
  }
}